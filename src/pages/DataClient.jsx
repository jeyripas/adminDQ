import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './pagesStyle/dataClient.css';
import ClientOrders from '../components/dataClient/ClientOrders';

const DataClient = () => {
  const { id } = useParams();
  const [dataClient, setDataClient] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/client/${id}`;

    axios
      .get(url)
      .then((res) => {
        setDataClient(res.data.client);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log(dataClient);

  return (
    <div className="dataClient__container">
      <section className="dataClient__sectionOne">
        <img src={dataClient?.clientImg} alt="" />
        <article>
          <h3>Datos del Cliente {dataClient?.name}</h3>
          <ul>
            <li>
              Nombre y Apellido: {dataClient?.name}{' '}
              {dataClient?.lastName}
            </li>
            <li>Correo: {dataClient?.email}</li>
            <li>DNI: {dataClient?.dni}</li>
            <li>Celular: {dataClient?.phoneNumber}</li>
            <li>
              Total de Pedidos: {dataClient?.clientOrders?.length}
            </li>
          </ul>
        </article>
      </section>
      <ClientOrders dataClient={dataClient} />
    </div>
  );
};

export default DataClient;
