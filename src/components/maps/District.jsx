import * as distracte from 'turkey-district-maps-3';
import { Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import buyukSehirAdaylar from '../../models/buyukSehirAdaylar';

const District = () => {
    const { state } = useLocation();
    const capitalizeFirstLowercaseRest = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    const { cityName } = useParams();
    const transformedCityName = cityName
        .replace('â', 'a')
        .replace('İ', 'I');
    const CityComponent = distracte[capitalizeFirstLowercaseRest(transformedCityName)];
    const navigateTo = useNavigate();
    const redirect = (district) => {
        if (state && state.id) {
            navigateTo(`/il/${cityName.toLowerCase()}/ilce/${district.toLowerCase()}`, { state: { cityId: state.id, district: district } });
        } else {
            navigateTo(`/il/${cityName.toLowerCase()}/ilce/${district.toLowerCase()}`);
        }
    };

    const cityContMap = {};
    buyukSehirAdaylar.forEach((aday) => {
        const { cityCont } = aday;
        cityContMap[cityCont] = true;
    });

    const filteredAdaylar = buyukSehirAdaylar.find((aday) => {
        return aday.cityCont.toString() === state.id.toString();
    });
    
    const handleClick = (name, id) => {
        const slug = name
            .toLowerCase()
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ı/g, "i")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c")
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        navigateTo(`/aday/${slug}`, { state: { id } });
    };

    return (
        <>
            <section className="TurkeyMap District">
                <div className="turkeyMapEffect"></div>
                <div className="container">
                    <div className="top">
                        <CityComponent
                            distWrapper={(distComponent, distData) => (
                                <Tooltip title={distData.name} key={distData.name}>
                                    {distComponent}
                                </Tooltip>
                            )}
                            style={{ cursor: 'pointer' }}
                            customStyle={{ idleColor: '#001C30', hoverColor: '#176B87' }}
                            onClick={({ name }) => redirect(name)}
                        />
                    </div>
                    {cityContMap[state.id] ? (
                        <div className="bottom">
                            <div className="title">
                                <h1>Adaylar</h1>
                                <p>Aşağıdaki kutucuğa tıklayarak oy verebilirsiniz.</p>
                            </div>
                            <div className="line"></div>
                            <div className="adaylar">
                                <div className="aday" key={filteredAdaylar.id}>
                                    <div className="img">
                                        <img src={filteredAdaylar.img} alt={filteredAdaylar.name} />
                                    </div>
                                    <div className="info">
                                        <h1>{filteredAdaylar.name}</h1>
                                        <h3>{filteredAdaylar.parti}</h3>
                                    </div>
                                    <div className="circleContent">
                                        <div className="circle"></div>
                                    </div>
                                    <a onClick={() => handleClick(filteredAdaylar.name, filteredAdaylar.id)} target="_blank" rel="noopener noreferrer">
                                        Detaylar
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            </section>
        </>
    );
};

export default District;
