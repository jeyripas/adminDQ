import React from 'react';
import { Link } from 'react-router-dom';
import DeleteSection from './crudSection/DeleteSection';
import UpdateSection from './crudSection/UpdateSection';

const CardSection = ({ section, setCrud, crud }) => {
  return (
    <div className="cardSection__div">
      <span></span>
      <img
        src={section.sectionProductImg}
        alt="pizzas Don Quezo"
        className="cardSection__container-imgbackground"
      />
      <i
        className="bx bxs-edit-alt icon__editProductImg"
        onClick={() => {
          setCrud(`updateSectionImg${section.id}`);
        }}
      ></i>
      <Link
        to={`/seccion/${section.id}`}
        className="cardSection__link"
      >
        <img
          src={section?.sectionIcon}
          alt=""
          className="cardSection__container-icon"
        />
        <h3>{section.name}</h3>
      </Link>
      <div className="cardSection__updateDelete">
        <p
          onClick={() => {
            setCrud(`updateSection${section.id}`);
          }}
        >
          Editar
        </p>

        <p
          onClick={() => {
            setCrud(`deleteSection${section.id}`);
          }}
        >
          Eliminar
        </p>
      </div>
    </div>
  );
};

export default CardSection;
