function AdayDetail() {
  const { state } = useLocation();
  const newsId = state?.id;

  const districtId = state?.districtId;
  const adayList = adayData[districtId];

  const adayItem = adayList.find((item) => item.id === newsId);

  const navigateTo = useNavigate();
  const handleClick = (item) => {
    const slug = item.adayAdi
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

    navigateTo(`/aday/${slug}`, { state: { id: item.id } });
  };

  if (adayItem) {
    return (
      <section className="NewsDetail">
        <div className="container">
          <div className="left">
            <div className="content">
              <div className="image">
                <img src={adayItem.adayResim} alt={adayItem.adayAdi} />
              </div>
              <h1>{adayItem.adayAdi}</h1>
              <p>{adayItem.adayBiyografi}</p>
            </div>
            <div className="content-info">
              <div className="leftChild">
                <div className="author">
                  <img
                    src="https://via.placeholder.com/50x50"
                    alt="author"
                  />
                  <div className="info">
                    <h3>Admin</h3>
                  </div>
                </div>
              </div>
              <div className="rightChild">
                <div className="date">
                  <h3>Oy Oranı: {adayItem.adayOyOrani}%</h3>
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
  }
}

export default AdayDetail;
