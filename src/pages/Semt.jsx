import { useParams } from "react-router-dom"
import { AiOutlineRight } from "react-icons/ai"
import { useLocation, useNavigate } from "react-router-dom"
import adayData from "../models/adaylarData"

function Semt() {
    const { state } = useLocation();
    const { cityName, districtName } = useParams()
    if (cityName == undefined || districtName == undefined || cityName == "" || districtName == "" || cityName == null || districtName == null) {
        return (
            <div>
                <h1>404</h1>
            </div>
        )
    }
    const navigateTo = useNavigate();
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
        navigateTo(`/aday/${slug}`, { state: { id, cityId:state.cityId } });
    };
    return (
        <>
        <section className="Semt">
            <div className="container">
                <div className="top">
                    <h1>{cityName.toLocaleUpperCase()}</h1>
                    <div className="icon"><AiOutlineRight /></div>
                    <h2>{districtName.toLocaleUpperCase()}</h2>
                </div>
                <div className="bottom">
                    <div className="title">
                        <h1>Adaylar</h1>
                        <p>Aşağıda ki kutucuğa tıklayarak oy verebilirsiniz.</p>
                    </div>
                    <div className="line"></div>
                    <div className="adaylar">
                    {state?.cityId && adayData[state?.cityId] ? (
                        adayData[state?.cityId].map((item) => (
                        <div className="aday" key={item.id}>
                            <div className="img">
                                <img src={item.adayResim} />
                            </div>
                            <div className="info">
                                <h1>{item.adayAdi}</h1>
                                <h3>{item.adayPartisi}</h3>
                            </div>
                            <div className="circleContent">
                                <div className="circle"></div>
                            </div>
                            <a onClick={() => handleClick(item.adayAdi, item.id)} target="_blank">Detaylar</a>
                        </div>
                        ))
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default Semt