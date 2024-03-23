import { useLocation, useNavigate } from "react-router-dom";
import adayData from "../models/adaylarData";
import buyukSehirAdaylar from "../models/buyukSehirAdaylar";
import { useState, useEffect } from "react";

function Aday() {
  const [adayListe, setAdayListe] = useState(null);
  const { state } = useLocation();
  const navigateTo = useNavigate();
  const adayId = state?.id;
  const cityId = state?.cityId;

  useEffect(() => {
    const adayList = adayData[cityId];
    if (adayList && adayId) {
      const foundAday = adayList.find((item) => item.id == adayId);
      setAdayListe([foundAday]);
    }
  }, [cityId, adayId]);

  const cityContMap = {};
  buyukSehirAdaylar.forEach((aday) => {
    const { cityCont } = aday;
    cityContMap[cityCont] = true;
  });

  const filteredAdaylar = buyukSehirAdaylar.filter((aday) => aday.id.toString() === state.id.toString());

  if (adayListe !== null) {
    return (
      <section className="NewsDetail">
        <div className="container">
          <div className="left">
            <div className="content">
              <div className="image">
                <img src={adayListe[0].adayResim} alt={adayListe[0].adayAdi} />
              </div>
              <h1>{adayListe[0].adayAdi}</h1>
              <p>{adayListe[0].adayBiyografi}</p>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <div className="ads">
                <img src="https://via.placeholder.com/400x200" />
                <div className="absolute">
                  <h3>Reklam Alanı</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (filteredAdaylar.length > 0) {
    return (
      <section className="NewsDetail">
        <div className="container">
          <div className="left">
            <div className="content">
              <div className="image">
                <img src={filteredAdaylar[0].img} alt={filteredAdaylar[0].name} />
              </div>
              <h1>{filteredAdaylar[0].name}</h1>
              <p>{filteredAdaylar[0].biyografi}</p>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <div className="ads">
                <img src="https://via.placeholder.com/400x200" />
                <div className="absolute">
                  <h3>Reklam Alanı</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aday;
