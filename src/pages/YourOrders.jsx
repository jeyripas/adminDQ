import React, { useEffect, useState } from 'react';
import './pagesStyle/section.css';
import axios from 'axios';
import config from '../utils/getToken';
import FilterOrders from '../components/yourOrders/FilterOrders';
import './pagesStyle/yourOrders.css';
import TableOrders from '../components/yourOrders/TableOrders';
import UpdateOrder from '../components/yourOrders/UpdateOrder';

const YourOrders = () => {
  const getFormattedDate = () => {
    const currentDate = new Date();
    const day =
      currentDate.getDate() < 10
        ? `0${currentDate.getDate()}`
        : currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    return `${day}-${
      month < 10 ? `0${month}` : month
    }-${currentDate.getFullYear()}`;
  };

  const [crud, setCrud] = useState('');
  const [allOrders, setAllOrders] = useState();
  const [selectOrder, setselectOrder] = useState();
  const [date, setdate] = useState(getFormattedDate());
  const [statusOrder, setstatusOrder] = useState('onTheWay');

  useEffect(() => {
    const url = `${
      import.meta.env.VITE_URL_API
    }/orders?date=${date}&status=${statusOrder}`;

    axios
      .get(url, config)
      .then((res) => setAllOrders(res.data))
      .catch((err) => console.log(err));
  }, [date, statusOrder, crud]);

  console.log(getFormattedDate());

  return (
    <div className="sections__container">
      <article className="sections__articleOne">
        <h2>Tus Pedidos</h2>
      </article>
      <section className="filterOrders__sectionOne">
        <div className="filterOrders__boxFilters">
          <h3>
            Tus pedidos de{' '}
            {date === getFormattedDate() ? 'Hoy' : date}
          </h3>
          <h4>Filtrar Pedidos</h4>
          <FilterOrders
            setdate={setdate}
            date={date}
            setstatusOrder={setstatusOrder}
            getFormattedDate={getFormattedDate}
            statusOrder={statusOrder}
          />
          <span>Todal de pedidos: {allOrders?.results}</span>
          <TableOrders
            allOrders={allOrders}
            crud={crud}
            setCrud={setCrud}
            setselectOrder={setselectOrder}
          />
          <UpdateOrder
            selectOrder={selectOrder}
            crud={crud}
            setCrud={setCrud}
          />
        </div>
      </section>
    </div>
  );
};

export default YourOrders;
