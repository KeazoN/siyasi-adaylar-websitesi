import TurkeyMap from 'turkey-map-react';
import { Tooltip } from 'antd';
import { useNavigate } from "react-router-dom";

function City() {
  const capitalizeFirstLowercaseRest = (str) => {
    return (
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );
  };
  const renderCity = (cityComponent, cityData) => ( 
    <Tooltip title={cityData.name} key={cityData.name}> 
        {cityComponent} 
    </Tooltip>
  );
  const navigateTo = useNavigate();
  const redirect = (cityData) => {
    navigateTo(`/il/${cityData.name}`, { state: { id: cityData.plateNumber } });
  }
  return (
    <>
      <section className="TurkeyMap">
        <div className="turkeyMapEffect"></div>
        <div className="container">
          <TurkeyMap 
            cityWrapper={renderCity}
            customStyle={{ idleColor: "#001C30", hoverColor: "#176B87" }}
            onClick={(redirect)}
          />
        </div>
      </section>
    </>
  )
}

export default City