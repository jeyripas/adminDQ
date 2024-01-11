import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../utils/getToken';
import FilterClients from '../components/yourClients/FilterClients';
import TableClients from '../components/yourClients/TableClients';
import './pagesStyle/yourClients.css';

const YourClients = () => {
  const [allClients, setAllClients] = useState();
  const [search, setSearch] = useState(false);
  const [dni, setdni] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/orders/clients?dni=${dni}&name=${name}&phone=${phone}&page=${currentPage}`;

    axios
      .get(url, config)
      .then((res) => setAllClients(res.data))
      .catch((err) => console.log(err));
  }, [search, currentPage]);

  return (
    <div className="sections__container">
      <article className="sections__articleOne">
        <h2>Tus Clientes</h2>
      </article>
      <section className="yourClients__sectionOne">
        <h3>Filtrar clientes</h3>
        <FilterClients
          dni={dni}
          name={name}
          phone={phone}
          setdni={setdni}
          setname={setname}
          setphone={setphone}
          setSearch={setSearch}
          search={search}
        />
        <TableClients allClients={allClients} />
      </section>
      {allClients?.totalPages > 0 && (
        <section className="yourClients__pages">
          <h4>Pagina</h4>
          <div>
            <i
              className="bx bx-chevron-left bx-flip-vertical"
              onClick={() =>
                setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
              }
            ></i>

            {Array.from(
              { length: allClients?.totalPages },
              (_, index) => (
                <p
                  className={`${
                    currentPage == index + 1
                      ? 'yourClients__pages__pActive'
                      : ''
                  }`}
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1} <span>-</span>
                </p>
              )
            )}

            <i
              className="bx bx-chevron-right bx-flip-vertical"
              onClick={() =>
                setCurrentPage(
                  currentPage < allClients?.totalPages
                    ? currentPage + 1
                    : currentPage
                )
              }
            ></i>
          </div>
        </section>
      )}
    </div>
  );
};

export default YourClients;
