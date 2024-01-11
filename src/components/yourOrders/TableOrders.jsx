import React, { useState } from 'react';
import './yourOrderStyle/tableOrders.css';

const TableOrders = ({
  allOrders,
  crud,
  setCrud,
  setselectOrder,
}) => {
  const getStatusLabel = (order) => {
    let backgroundColor, label;

    switch (order.statusOrder) {
      case 'onTheWay':
        backgroundColor = 'var(--body-yeloow)';
        label = 'Por Entregar';
        break;
      case 'delivered':
        backgroundColor = '#069d27';
        label = 'Entregado';
        break;
      case 'cancel':
        backgroundColor = 'var(--body-red)';
        label = 'Cancelado';
        break;
      default:
        return null;
    }

    return (
      <td
        onClick={() => {
          setselectOrder(order), setCrud(`updateOrder${order.id}`);
        }}
        style={{
          backgroundColor,
          padding: '8px',
          color: '#fff',
          textAlign: 'center',
          fontWeight: '600',
          cursor: 'pointer',
        }}
      >
        {label}
      </td>
    );
  };
  const sortedOrders = allOrders?.clientOrders?.sort((a, b) => {
    // Parsea las horas a objetos Date y compara para ordenar
    const dateA = new Date(`1970-01-01 ${a.hour}`);
    const dateB = new Date(`1970-01-01 ${b.hour}`);
    return dateB - dateA;
  });

  return (
    <table className="tableOrders__contianer">
      <thead>
        <tr>
          <th>N°</th>
          <th>Fecha y Hora</th>
          <th>Datos del Cliente</th>
          <th>Datos del Pedido</th>
          <th>Delivery</th>
          <th>Mensaje</th>
          <th>Total</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {sortedOrders?.map((order, index) => (
          <tr key={order.id}>
            <td>{sortedOrders.length - index}</td>
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
                    cantidad: {product.numberOrder} , Precio Unitario:
                    s/{product.unitPrice}, SubTotal: s/
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
            <td style={{ maxWidth: '200px' }}>{order.message}</td>
            <td>s/{order?.total}</td>
            {getStatusLabel(order)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableOrders;
