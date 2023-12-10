import "./App.css";
import armor from "./assets/darkbody.png";
import BackGlow from "./assets/Backglow.png";
import cableHigherLeft from "./assets/cableHigherLeft.png";
import cableHigherRight from "./assets/cableHigherRight.png";
import cableLowerLeft from "./assets/cableLowerLeft.png";
import cableLowerRight from "./assets/cableLowerRight.png";
import matrixvideo from "./assets/matrix.mp4";
import Ac from "./assets/Ac.png";

function App() {
  /*   const handleClick = () => {
    return alert("hej");
  };
 */
  return (
    <>
      <video className="matrixvideo" autoPlay loop muted>
        <source src={matrixvideo} type="video/mp4" />
      </video>
      <div className="main-container">
        <div className="container">
          <div className="glow"></div>

          <div className="box-1"></div>
          <div className="body-container">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            <div className="line line-4"></div>
            <div className="line line-5"></div>
            <div className="line line-6"></div>
            <div className="line line-7"></div>
            <div className="line line-8"></div>
            <img className="armor" src={armor} alt="" />
            <img className="Ac" src={Ac} alt="" />
            <img className="BackGlow" src={BackGlow} alt="" />
            <img className="cableHigherLeft" src={cableHigherLeft} alt="" />
            <img className="cableHigherRight" src={cableHigherRight} alt="" />
            <img className="cableLowerLeft" src={cableLowerLeft} alt="" />
            <img className="cableLowerRight" src={cableLowerRight} alt="" />
          </div>

          <div className="container-lower">
            {/* Nedre två */}
            <div className="box-2">
              <div className="grind"></div>
            </div>
            <div className="box-3"></div>
          </div>
          {/* <div className="armor"></div> */}
          {/* <div className="body"></div> */}
        </div>
      </div>
    </>
  );
}

export default App;
