import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateDelivery from '../components/deliveries/crudDelivery/CreateDelivery';
import CardDelivery from '../components/deliveries/CardDelivery';
import './pagesStyle/deliveries.css';
import UpdateDelivery from '../components/deliveries/crudDelivery/UpdateDelivery';
import DeleteDelivery from '../components/deliveries/crudDelivery/DeleteDelivery';

const Deliveries = () => {
  const [crud, setCrud] = useState('');
  const [allDeliveries, setallDeliveries] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/delivery`;

    axios
      .get(url)
      .then((res) => setallDeliveries(res.data))
      .catch((err) => console.log(err));
  }, [crud]);

  return (
    <section className="sections__container">
      <article className="sections__articleOne">
        <h2>Zonas de Reparto</h2>{' '}
        <p onClick={() => setCrud('createZone')}>Crear Zona</p>
        <CreateDelivery setCrud={setCrud} crud={crud} />
      </article>
      <article className="sections__articleTwo">
        {allDeliveries?.deliveries.map((delivery) => (
          <div className="cardDelivery__container" key={delivery.id}>
            <CardDelivery
              delivery={delivery}
              setCrud={setCrud}
              crud={crud}
            />
            <DeleteDelivery
              delivery={delivery}
              setCrud={setCrud}
              crud={crud}
            />
            <UpdateDelivery
              delivery={delivery}
              setCrud={setCrud}
              crud={crud}
            />
          </div>
        ))}
      </article>
    </section>
  );
};

export default Deliveries;
