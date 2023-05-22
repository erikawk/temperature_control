import { BsMoisture } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";

const Data = ({ temperature, moisture }) => {
  const color = "#60B2FF";

  return (
    <>
      {temperature ? (
        <h2>
          <FaTemperatureHigh color={color} /> {temperature}
        </h2>
      ) : (
        <h2>
          <BsMoisture color={color} /> {moisture}
        </h2>
      )}
    </>
  );
};
export default Data;
