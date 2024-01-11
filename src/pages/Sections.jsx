import React, { useEffect, useState } from 'react';
import './pagesStyle/section.css';
import axios from 'axios';
import CreateSection from '../components/sections/crudSection/CreateSection';
import CardSection from '../components/sections/CardSection';
import DeleteSection from '../components/sections/crudSection/DeleteSection';
import UpdateSection from '../components/sections/crudSection/UpdateSection';
import UpdateSectionImg from '../components/sections/crudSection/UpdateSectionImg';

const sections = () => {
  const [crud, setCrud] = useState('');
  const [allSections, setallSections] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/section-product`;

    axios
      .get(url)
      .then((res) => setallSections(res.data))
      .catch((err) => console.log(err));
  }, [crud]);

  return (
    <div className="sections__container">
      <article className="sections__articleOne">
        <h2>Secciones</h2>{' '}
        <p onClick={() => setCrud('createSection')}>Crear Sección</p>
        <CreateSection setCrud={setCrud} crud={crud} />
      </article>
      <article className="sections__articleTwo">
        {allSections?.sectionProducts.map((section) => (
          <div className="cardSection__container" key={section.id}>
            <CardSection
              section={section}
              setCrud={setCrud}
              crud={crud}
            />
            <DeleteSection
              section={section}
              setCrud={setCrud}
              crud={crud}
            />
            <UpdateSection
              section={section}
              setCrud={setCrud}
              crud={crud}
            />
            <UpdateSectionImg
              section={section}
              setCrud={setCrud}
              crud={crud}
            />
          </div>
        ))}
      </article>
    </div>
  );
};

export default sections;
