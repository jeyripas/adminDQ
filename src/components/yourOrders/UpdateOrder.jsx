import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import config from '../../utils/getToken';

const UpdateOrder = ({ crud, setCrud, selectOrder }) => {
  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/orders/${
      selectOrder?.id
    }`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('El estado de la orden se edito exitosamente');
        setCrud('');
      })
      .catch((err) => {
        toast.error('por favor seleccione un estado');
      });
    reset();
  };

  return (
    <div
      className={`crud__container  ${
        crud === `updateOrder${selectOrder?.id}`
          ? ''
          : 'closeCrud__container'
      }`}
    >
      <i
        onClick={() => {
          setCrud('');
        }}
        className="bx bxs-x-circle"
      ></i>
      <form className="crud__form" onSubmit={handleSubmit(submit)}>
        <h3>Cambiar el estado del Pedido N° {selectOrder?.id}</h3>

        <div className="crud__div">
          <label htmlFor="statusOrder">Estado de la Orden:</label>
          <select
            name="statusOrder"
            id="statusOrder"
            {...register('statusOrder')}
          >
            <option value="0">seleccionar estado </option>
            <option value="onTheWay">Por Entregar</option>
            <option value="delivered">Entregado</option>
            <option value="cancel">Cancelado</option>
          </select>
        </div>

        <button type="submit" className="crud__button">
          Cambiar el Estado
        </button>
      </form>
    </div>
  );
};

export default UpdateOrder;
