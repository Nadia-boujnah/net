import "../components/Main.css";
import hero from "../assets/background.jpg";
import ecriturenarcos from "../assets/narcos.svg"; 
import img1 from "../assets/crown.png";
import img2 from "../assets/houseofcards.png";
import img3 from "../assets/suburra.png";
import img4 from "../assets/blackmirror.png";
import img5 from "../assets/clj.png";
import img6 from "../assets/dirtymoney.png";
import img7 from "../assets/elchapo.png";
import img8 from "../assets/narcos.png";
import img9 from "../assets/add.png";
import img10 from "../assets/fauda.png";
import img11 from "../assets/ugly.png";
import img12 from "../assets/nas.png";
import img13 from "../assets/13rw.png";
import img14 from "../assets/marcopolo.png";

function Main () {
    return (
        <main>
            <div className="section-1">
                <img className="img-narcos" src={hero} alt=""/>
                <img className="ecriture-narcos" src={ecriturenarcos} alt=""/>
            </div>
            <div className="section-2">
                <img className="img1" src={img1} alt=""/>
                <img className="img2" src={img2} alt=""/>
                <img className="img3" src={img3} alt=""/>
                <img className="img4" src={img4} alt=""/>
                <img className="img5" src={img5} alt=""/>
                <img className="img6" src={img6} alt=""/>
                <img className="img7" src={img7} alt=""/>
            </div>
            <div className="section-3">
                <img className="img8" src={img8} alt=""/>
                <img className="img9" src={img9} alt=""/>
                <img className="img10" src={img10} alt=""/>
                <img className="img11" src={img11} alt=""/>
                <img className="img12" src={img12} alt=""/>
                <img className="img13" src={img13} alt=""/>
                <img className="img14" src={img14} alt=""/>

            </div>
        </main>









    );
}
export default Main;