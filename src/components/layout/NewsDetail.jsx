import { useLocation } from "react-router-dom";
import data from "../../models/newsData";
import { useNavigate } from "react-router-dom";

function NewsDetail() {
  const { state } = useLocation();
  const newsId = state?.id;

  const newsItem = data.newsList.find((item) => item.id === newsId);
  const districtItem = data.district.find((item) => item.id === newsId);
  const sonDakikaHaberler = data.sonDakikaHaberler.find((item) => item.id === newsId);
  const navigateTo = useNavigate();
  const handleClick = (item) => {
    const slug = item.title
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

    navigateTo(`/haber/${slug}`, { state: {id: item.id} })
  }

  if (newsItem) {
    return (
      <section className="NewsDetail">
        <div className="container">
          <div className="left">
            <div className="content">
                <div className="image">
                    <img src={newsItem.image} alt={newsItem.title} />
                </div>
                <h1>{newsItem.title}</h1>
                <p>{newsItem.description}</p>
            </div>
            <div className="content-info">
              <div className="leftChild">
                <div className="author">
                  <img src="https://via.placeholder.com/50x50" alt="author" />
                  <div className="info">
                    <h3>Admin</h3>
                  </div>
                </div>
              </div>
              <div className="rightChild">
                <div className="date">
                  <h3>{newsItem.date.replace("-", ".").replace("-", ".")}</h3>
                </div>
              </div>
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
              <div className="randomNews">
                <h3>Rastgele Haberler</h3>
                <div className="line"></div>
                <ul>
                  {data.newsList.slice(0, 5).map((item) => (
                    <li key={item.id}>
                      <a onClick={() => handleClick(item)}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (districtItem) {
    return (
      <>
        <section className="NewsDetail">
          <div className="container">
            <div className="left">
              <div className="content">
                <div className="image">
                  <img src={districtItem.image} alt={districtItem.title} />
                </div>
                <h1>{districtItem.title}</h1>
                <p>{districtItem.description}</p>
              </div>
              <div className="content-info">
                <div className="leftChild">
                  <div className="author">
                    <img src="https://via.placeholder.com/50x50" alt="author" />
                    <div className="info">
                      <h3>Admin</h3>
                    </div>
                  </div>
                </div>
                <div className="rightChild">
                  <div className="date">
                    <h3>{districtItem.date.replace("-", ".").replace("-", ".")}</h3>
                  </div>
                </div>
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
                <div className="randomNews">
                  <h3>Rastgele Haberler</h3>
                  <div className="line"></div>
                  <ul>
                    {data.district.slice(0, 5).map((item) => (
                      <li key={item.id}>
                        <a onClick={() => handleClick(item)}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }else if (sonDakikaHaberler) {
    return (
      <>
        <section className="NewsDetail">
          <div className="container">
            <div className="left">
              <div className="content">
                <div className="image">
                  <img src={sonDakikaHaberler.image} alt={sonDakikaHaberler.title} />
                </div>
                <h1>{sonDakikaHaberler.title}</h1>
                <p>{sonDakikaHaberler.description}</p>
              </div>
              <div className="content-info">
                <div className="leftChild">
                  <div className="author">
                    <img src="https://via.placeholder.com/50x50" alt="author" />
                    <div className="info">
                      <h3>Admin</h3>
                    </div>
                  </div>
                </div>
                <div className="rightChild">
                  <div className="date">
                    <h3>{sonDakikaHaberler.date.replace("-", ".").replace("-", ".")}</h3>
                  </div>
                </div>
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
                <div className="randomNews">
                  <h3>Rastgele Haberler</h3>
                  <div className="line"></div>
                  <ul>
                    {data.sonDakikaHaberler.slice(0, 5).map((item) => (
                      <li key={item.id}>
                        <a onClick={() => handleClick(item)}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default NewsDetail;
