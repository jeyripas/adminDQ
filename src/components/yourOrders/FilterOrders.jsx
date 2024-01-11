import React from 'react';
import './yourOrderStyle/filterOrders.css';

const FilterOrders = ({
  date,
  setdate,
  setstatusOrder,
  getFormattedDate,
}) => {
  const formatToYYYYMMDD = (inputDate) => {
    const [day, month, year] = inputDate.split('-');
    return `${year}-${month}-${day}`;
  };

  const onChangeDate = (e) => {
    const selectedDate = e?.target?.value;
    setdate(formatToYYYYMMDD(selectedDate));
  };

  const deleteFilters = () => {
    setdate(getFormattedDate()), setstatusOrder('onTheWay');
  };
  return (
    <article className="filterOrders__contianer">
      <div>
        <label htmlFor="date">Fecha:</label>
        <input
          id="date"
          type="date"
          onChange={onChangeDate}
          value={formatToYYYYMMDD(date)}
        />
      </div>
      <div>
        <label htmlFor="statusOrder"> Estado del Pedido:</label>
        <select
          name="statusOrder"
          id="statusOrder"
          onChange={(e) => setstatusOrder(e.target.value)}
        >
          <option value="onTheWay">Por Entregar</option>
          <option value="todos">Todos</option>
          <option value="delivered">Entregados</option>
          <option value="cancel">Cancelados</option>
        </select>
      </div>

      <p onClick={() => deleteFilters()}>Borrar Filtros</p>
    </article>
  );
};

export default FilterOrders;
