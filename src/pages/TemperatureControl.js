import axios from "axios";
import Data from "../components/Data";
import "./TemperatureControl.css";
import { useEffect, useState } from "react";

const TemperatureControl = () => {
  const [umid, setUmid] = useState(0)
  const [temp, setTemp] = useState(0)
  const obterDadosVariavel = async (bucketToken, nomeVariavel) => {
    return axios.get('https://api.tago.io/data', {
        headers: {
            'Content-Type': 'application/json',
            'Device-Token': bucketToken
        },
        params: {
            variable: nomeVariavel
        }
    })
        .then(response => {
            if (nomeVariavel==="umidade") setUmid(response.data.result[0].value)
            else setTemp(response.data.result[0].value)
        })
        .catch(error => {
            console.error(error)
            throw error
        })
}
  useEffect(()=>{
    const interval = setInterval(()=>{
      obterDadosVariavel("5b513aed-17a5-47c1-afee-1be13933add9", "umidade")
      obterDadosVariavel("5b513aed-17a5-47c1-afee-1be13933add9", "temperatura")
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className="container__principal">
        <h4 className="title__temperature">
          Temperatura atual da sala <span className="name__room">B210</span>
        </h4>
        <div className="container__temperature__principal">
          <div className="container__temperature">
            <Data temperature={temp+"°C"} />
          </div>
          <div className="container__temperature">
            <Data moisture={umid+"%"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TemperatureControl;