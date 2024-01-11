import React from 'react';
import { Link } from 'react-router-dom';

const TableClients = ({ allClients }) => {
  return (
    <table className="tableClients__contianer">
      <thead>
        <tr>
          <th>Perfil</th>
          <th>Nombre y Apellido</th>
          <th>Email</th>
          <th>Dni</th>
          <th>Celular</th>
          <th>Cumpleaños</th>
          <th>Ver Mas</th>
        </tr>
      </thead>
      <tbody>
        {allClients?.clients.map((client) => (
          <tr key={client.id}>
            <td>
              <img src={client.clientImg} alt="" />
            </td>
            <td>
              {client.name} {client.lastName}
            </td>
            <td>{client.email}</td>
            <td>{client.dni}</td>
            <td>{client.phoneNumber}</td>
            <td>{client.date}</td>
            <td>
              <Link to={`/data-client/${client.id}`}>Ver mas</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableClients;
