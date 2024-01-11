import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../utils/getToken';

const ClientOrders = ({ dataClient }) => {
  const [clientDataOrder, setClientDataOrder] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (dataClient) {
      const url = `${import.meta.env.VITE_URL_API}/orders/oneClient/${
        dataClient?.id
      }?page=${currentPage}`;

      axios
        .get(url, config)
        .then((res) => {
          setClientDataOrder(res.data);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [dataClient, currentPage]);

  console.log(clientDataOrder);
  return (
    <div className="clientOrders__container">
      <table className="tableClients__contianer">
        <thead>
          <tr>
            <th>Fecha y Hora</th>
            <th>Datos del Cliente</th>
            <th>Datos del Pedido</th>
            <th>Delivery</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {clientDataOrder?.clientOrders?.map((order) => (
            <tr key={order.id}>
              <td>
                <ul>
                  <li>{order.date}</li>
                  <li>{order.hour}</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Nombre: {order.name}</li>
                  <li>Correo: {order.email}</li>
                  <li>Celular: {order.phoneNumber}</li>
                </ul>
              </td>
              <td>
                {order.orders.map((product) => (
                  <ul
                    style={{
                      paddingBottom: '5px',
                      borderBottom: '1px solid #ccc',
                    }}
                    key={product.id}
                  >
                    <li style={{ fontWeight: '600' }}>
                      cantidad: {product.numberOrder} , Precio
                      Unitario: s/{product.unitPrice}, SubTotal: s/
                      {product.totalPrice}
                    </li>
                    <li>
                      pedido: {product.name} {product.option}{' '}
                      {product.extras.map((extra) => extra.name)}
                    </li>
                  </ul>
                ))}
              </td>
              <td>
                <ul>
                  <li>Dirrecion: {order.address}</li>
                  <li>Referencia: {order.reference}</li>
                  <li>{order.deliveryName}</li>
                  <li>precio:s/{order.deliveryPrice}</li>
                </ul>
              </td>
              <td>s/{order?.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
            { length: clientDataOrder?.totalPages },
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
                currentPage < clientDataOrder?.totalPages
                  ? currentPage + 1
                  : currentPage
              )
            }
          ></i>
        </div>
      </section>
    </div>
  );
};

export default ClientOrders;
