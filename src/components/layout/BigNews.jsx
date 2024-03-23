import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from "react-router-dom";


function BigNews({ data }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 5;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / 5);
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 5) % data.length;
      setItemOffset(newOffset);
    };
    const navigateTo = useNavigate();
    const redirect = (id, name) => {
      const slug = name
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
    }
    return (
        <section className="contentNews">
            <div className="container">
                <div className="left">
                    <div className="content">
                        <div className="content-title">
                            <h2>İlginizi Çekebilir</h2>
                        </div>
                        <div className="content-body">
                            <div className="cards">
                              {currentItems.map((item) => (
                                <a key={item.id} onClick={() => { redirect(item.id, item.title)}}>
                                  <div className="card">
                                    <div className="leftChild">
                                      <div className="img">
                                        <img src={item.image} />
                                      </div>
                                      <div className="text">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                      </div>
                                    </div>
                                    <div className="rightChild">
                                      <span className="category">{item.category}</span>
                                      <p>{item.date}</p>
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                           <ReactPaginate
                              breakLabel="..."
                              nextLabel="İleri"
                              onPageChange={handlePageClick}
                              pageRangeDisplayed={5}
                              pageCount={pageCount}
                              previousLabel="Geri"
                              renderOnZeroPageCount={null}
                            />
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
                    <div className="category">
                      <h3>Kategoriler</h3>
                      <div className="line"></div>
                      <ul>
                        <li>
                          <a href="#">Gündem</a>
                        </li>
                        <li>
                          <a href="#">Spor</a>
                        </li>
                        <li>
                          <a href="#">Ekonomi</a>
                        </li>
                        <li>
                          <a href="#">Magazin</a>
                        </li>
                        <li>
                          <a href="#">Teknoloji</a>
                        </li>
                        <li>
                          <a href="#">Sağlık</a>
                        </li>
                        <li>
                          <a href="#">Eğitim</a>
                        </li>
                        <li>
                          <a href="#">Dünya</a>
                        </li>
                        <li>
                          <a href="#">Yaşam</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default BigNews;