import BigNews from "../components/layout/BigNews";
import News from "../components/layout/News";
import City from "../components/maps/city";
import data from "../models/newsData";

function Home() {
    return (
        <>
            <City />
            <News data={data.newsList} />
            <BigNews data={data.sonDakikaHaberler} />
        </>
    )
}

export default Home;