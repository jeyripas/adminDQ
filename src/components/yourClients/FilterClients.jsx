import React from 'react';

const FilterClients = ({
  dni,
  name,
  phone,
  setdni,
  setname,
  setphone,
  setSearch,
  search,
}) => {
  return (
    <form className="filterClients__container">
      <div>
        <label htmlFor="dni">dni:</label>
        <input
          id="dni"
          type="text"
          onChange={(e) => setdni(e.target.value)}
          value={dni}
        />
      </div>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="phone">Celular:</label>
        <input
          id="phone"
          type="number"
          onChange={(e) => setphone(e.target.value)}
          value={phone}
        />
      </div>
      <button onClick={() => setSearch(!search)}>Buscar</button>
    </form>
  );
};

export default FilterClients;
