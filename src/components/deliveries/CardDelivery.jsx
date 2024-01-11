import React from 'react';

const CardDelivery = ({ delivery, setCrud }) => {
  return (
    <div className="cardDelivery__div">
      <article>
        <h3>{delivery.name}</h3>
        <p>{delivery.description}</p>
        <span>s/{delivery.price}</span>
      </article>
      <iframe
        src={delivery.linkMap}
        width="100%"
        height="100%"
      ></iframe>
      <div className="cardSection__updateDelete">
        <p
          onClick={() => {
            setCrud(`updateDelivey${delivery.id}`);
          }}
        >
          Editar
        </p>

        <p
          onClick={() => {
            setCrud(`deleteDelivery${delivery.id}`);
          }}
        >
          Eliminar
        </p>
      </div>
    </div>
  );
};

export default CardDelivery;
