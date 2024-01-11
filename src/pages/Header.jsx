import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './pagesStyle/header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const userDataJSON = localStorage.getItem('userData');
  const navigate = useNavigate();
  const userData = JSON.parse(userDataJSON);
  const location = useLocation();
  const [url, setUrl] = useState('/');

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <header className="header__container">
      <section className="header__section">
        <img src={userData?.user?.userImg} alt="" />
        <h3>
          {userData?.user?.name} {userData?.user?.lastName}
        </h3>
      </section>
      <ul className="header__ul">
        <li>
          <Link
            to="/"
            style={url === '/' ? { color: 'var(--body-red)' } : {}}
          >
            Tus Pedidos
          </Link>
        </li>

        <li>
          <Link
            to="/secciones"
            style={
              url === '/secciones' ? { color: 'var(--body-red)' } : {}
            }
          >
            Secciones
          </Link>
        </li>
        <li>
          <Link
            to="/your-clients"
            style={
              url === '/your-clients'
                ? { color: 'var(--body-red)' }
                : {}
            }
          >
            Tus Clientes
          </Link>
        </li>
        <li>
          <Link
            to="/deliveries"
            style={
              url === '/deliveries'
                ? { color: 'var(--body-red)' }
                : {}
            }
          >
            Zonas de reparto
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            style={
              url === '/users' ? { color: 'var(--body-red)' } : {}
            }
          >
            Usuarios
          </Link>
        </li>

        <li
          onClick={() => {
            localStorage.clear();
            navigate('/');
          }}
        >
          Cerrar Sesion
        </li>
      </ul>
    </header>
  );
};

export default Header;
