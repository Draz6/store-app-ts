import pic1 from '../img/ad1.jfif'
import pic2 from "../img/nike4.jpg";
import pic3 from "../img/gi2.gif";
import pic4 from "../img/lil.jpeg";
import "../styles/Home.css";


function Home() {
 
   
  return (
    <div className="main-grid">
        <div className="box "><img src={pic1} alt=""  className="box1"/></div>
        <section className='aside'>
        <div className="box box2" >
            <img src={pic3} alt="" />
            <button className='new-btn'>Go...</button>
        </div>
        <section className='adds'>
        <div className="box " ><img src={pic2} alt=""  className="box3"/></div>
        <div className="box "><img src={pic4} alt=""  className="box4"/></div>
        </section>
        </section>
    </div>
  );
}

export default Home