import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/Login.css";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme  = createTheme();

export default function SignUp() {
 const [email, setEmail] = useState<string>("");
 const [password, setPassword] = useState<string>("");
 const navigate = useNavigate();

 // post data to local storage
 function register(): any {
   localStorage.setItem("email", email);
   localStorage.setItem("password", password);
 }
 //check email & password
 function checkPassword():boolean {
   let firstPassword = document.getElementById("firstPassword") as HTMLInputElement;
   let confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
   let span:any = document.getElementById("spanSign");
   let emailSign = document.getElementById("emailSign") as HTMLInputElement;
   if (
     firstPassword.value != confirmPassword.value ||
     firstPassword.value == "" ||
     emailSign.value == ""
   ) {
     span.innerHTML = "* Register info are incorrect, please try again";
     return false;
   } else {
     navigate("/LogIn");
     return true;
   }
 }
 //validation
 function validate(e: React.FormEvent): boolean {
   e.preventDefault();
   if (checkPassword() && register()) {
   }
   return false;
 }
  return (
    <div id="formMain">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#455a64" }}>
              <PersonAddIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>

            <TextField
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="emailSign"
              label="Email Address / User Name"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="firstPassword"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
            />
            <span id="spanSign" className="span"></span>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              onClick={validate}
            >
              Register
            </Button>

            <Grid container>
              <Grid item>
                <Link href="/LogIn" variant="body2">
                  {" "}
                  {"Already have an account ? Log in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
