import Data from "../components/Data";
import "./TemperatureControl.css";

const TemperatureControl = () => {
  return (
    <>
      <div className="container__principal">
        <h4 className="title__temperature">
          Temperatura atual da sala <span className="name__room">B210</span>
        </h4>
        <div className="container__temperature__principal">
          <div className="container__temperature">
            <Data temperature={"20°C"} />
          </div>
          <div className="container__temperature">
            <Data moisture={"40%"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TemperatureControl;
