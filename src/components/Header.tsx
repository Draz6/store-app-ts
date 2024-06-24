
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import '../styles/Header.css';

export default function Header() {
    return (
        <div id="nav"> 
            <ul id="navList"> 
                <h4 id="logo">D R &forall; Z</h4>
            </ul>
            <ul className='menu'>
                <a href="/LogIn"><li>Home</li></a>
                <li>Collection</li>
                <a href="/LogIn"> <li><PersonIcon /></li></a>
                <li><ShoppingCartIcon /></li>
            </ul>
        </div>
    )
}