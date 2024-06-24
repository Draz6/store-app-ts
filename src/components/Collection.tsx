import  { useEffect, useState } from "react";
import Card from "./Card.tsx";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom'
import PopUpCard from './PopUpCard'
import loading from "../img/loading.gif"
import Home from "./Home";
import {getData} from "../api/api.ts"
import '../styles/Collection.css'


interface CollectionItem {
  name: string;
  imgURL: string;
  price: number;
  company: string;
  category: string;
  model: string;
}
// get data by api
export default function Collection() {
  const [collection, setCollection] = useState<CollectionItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getDataFromApi() {
      try {
        const collectionData: CollectionItem[] = await getData();
        setCollection(collectionData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getDataFromApi();
  }, []);

  {
    /*   <div id="logControl"> {true ? <div>
               <button>Log out</button>
               </div> : 'you need to login'}</div>*/
  }
  return (
    <div id="card">
      <div id="sideBar">
        <Link to="/LogIn">
          <button className="logOut">
            <PersonIcon className="logOutIcon" /> Log out{" "}
          </button>
        </Link>
      </div>
      <Home />
      <div id="containerDiv">
        {isLoading ? (
          <div className="loading">
            <img src={loading} alt="" />
            Loading…
          </div>
        ) : (
          <div>
            {" "}
            {collection.map((item) => (
              <div id="cardsDiv">
                <Card
                  name={item.name}
                  pic={item.imgURL}
                  price={item.price + " $"}
                  brand={item.company}
                  category={item.category}
                  model={item.model}
                />
                <PopUpCard pic={item.imgURL} name={item.name} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}