import { useParams } from "react-router-dom";
import News from "../components/layout/News";
import District from "../components/maps/District";
import data from "../models/newsData";

function Sehir() {
    const { cityName } = useParams();
    return (
        <>
            <District />
            <News data={data.district} />
        </>
    )
}

export default Sehir