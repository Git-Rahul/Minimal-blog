import "./App.css";
import cactus from "./assets/cactus_img.jpg";
function App() {
  return (
    <>
      <center>
        <div id="card">
          <img src={cactus} height="152px" width="336px"></img>
          <div id="cont">
          <div id="tag"><b>Design</b></div>
          <div id="text">
            {" "}
            <b>Embracing Minimalism </b>
          </div>
          <p id="subtxt">
            From minimalist sculptures to minimalist paintings, this blog will
            inspire you to appreciate the beauty that lies in simplicity.
          </p>
          <div id="hr"></div>
          <div id="name">Kumar Rahul</div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
