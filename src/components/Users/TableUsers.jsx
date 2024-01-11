import React, { useEffect, useState } from 'react';

const TableUsers = ({ allUsers, setSelectUser, setCrud }) => {
  return (
    <div className="clientOrders__container">
      <table className="tableClients__contianer">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre y Apellido</th>
            <th>DNI</th>
            <th>Celular</th>
            <th>Dirreción</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.userImg} alt="" />
              </td>
              <td>
                {user.name} {user.lastName}
              </td>
              <td>{user.dni}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.address}</td>
              <td>
                <p
                  onClick={() => {
                    setSelectUser(user);
                    setCrud('updateUser');
                  }}
                >
                  editar
                </p>
              </td>
              <td>
                <a
                  onClick={() => {
                    setSelectUser(user);
                    setCrud('deleteUser');
                  }}
                >
                  eliminar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsers;
