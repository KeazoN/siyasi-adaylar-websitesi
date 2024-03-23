import { useNavigate } from "react-router-dom";

function News(props) {
  const { data } = props;

  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestNews = sortedData.slice(0, 3);
  const navigateTo = useNavigate();
  const handleClick = (id, title) => {
    const slug = title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');

    navigateTo(`/haber/${slug}`, { state: { id } });
  };

  return (
    <>
      <section className="newsGrid">
        <div className="container">
          <div className="content">
            <div className="group line">
              <a onClick={()=> handleClick(latestNews[0].id, latestNews[0].title)}
                >
                <img src={latestNews[0].image} alt={latestNews[0].title} />
                <span className="effect"></span>
                <span className="text">
                  <div className="contentText">
                    <div className="category">
                      <p>{latestNews[0].category}</p>
                    </div>
                    <h1>{latestNews[0].title}</h1>
                    <p>{latestNews[0].description}</p>
                  </div>
                </span>
              </a>
            </div>
            <div className="group2x">
              <div className="group box">
                <a onClick={()=> handleClick(latestNews[1].id, latestNews[1].title)}
                  >
                  <img src={latestNews[1].image} alt={latestNews[1].title} />
                  <span className="effect"></span>
                  <span className="text">
                    <div className="contentText">
                      <div className="category">
                        <p>{latestNews[1].category}</p>
                      </div>
                      <h1>{latestNews[1].title}</h1>
                      <p>{latestNews[1].description}</p>
                    </div>
                  </span>
                </a>
              </div>
              <div className="group box">
                <a onClick={()=> handleClick(latestNews[2].id, latestNews[2].title)}
                  >
                  <img src={latestNews[2].image} alt={latestNews[2].title} />
                  <span className="effect"></span>
                  <span className="text">
                    <div className="contentText">
                      <div className="category">
                        <p>{latestNews[2].category}</p>
                      </div>
                      <h1>{latestNews[2].title}</h1>
                      <p>{latestNews[2].description}</p>
                    </div>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default News;
