import React, { useEffect, useState } from 'react';
import './pagesStyle/Configuration.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import config from '../utils/getToken';
import { toast } from 'react-toastify';
const Configuration = () => {
  const { register, handleSubmit, reset } = useForm();
  const [crud, setCrud] = useState();
  const [openingHoure, setOpeningHoure] = useState();
  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/openingHours/1`;

    axios
      .get(url, config)
      .then((res) => setOpeningHoure(res.data.openingHoure))
      .catch((err) => console.log(err));
  }, [crud]);

  const submit = (data) => {
    const url = `${import.meta.env.VITE_URL_API}/openingHours/1`;

    axios
      .patch(url, data, config)
      .then((res) => {
        toast.success('EL horario de atencion se edito exitosamente');
        setCrud('');
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Hubo un error al editar el horario de atencion');
      });
  };

  console.log(openingHoure);
  function convertirHoraAMPM(hora24) {
    if (hora24) {
      var hora = hora24?.split(':');
      var horaNum = parseInt(hora[0]);
      var minutos = hora[1];
      var ampm = horaNum >= 12 ? 'pm' : 'am';
      horaNum = horaNum % 12;
      horaNum = horaNum ? horaNum : 12;
      var horaAMPM = horaNum + ':' + minutos + ' ' + ampm;
      return horaAMPM;
    }
  }

  return (
    <div className="Configuration_container">
      <article className="Configuration_article">
        <h1>Configuraciones</h1>
      </article>

      <section className="Configuration_sectionOne">
        <article className="Configuration_sectionOne_article">
          <h2>Horario de Atención</h2>
          <div>
            <p>
              {convertirHoraAMPM(openingHoure?.startTime)} a{' '}
              {convertirHoraAMPM(openingHoure?.endTime)}
            </p>
            <button
              type="button"
              onClick={() => setCrud('updateHoure')}
            >
              Editar Horario
            </button>
          </div>
        </article>
      </section>

      {crud === 'updateHoure' && (
        <div className="crud__container">
          <i
            onClick={() => {
              setCrud('');
              reset();
            }}
            className="bx bxs-x-circle"
          ></i>
          <form
            className="crud__form"
            onSubmit={handleSubmit(submit)}
          >
            <h3>Editar el horario de atención</h3>

            <div className="crud__div">
              <label htmlFor="startTime">Hora de Inicio:</label>
              <input
                {...register('startTime')}
                id="startTime"
                type="time"
                defaultValue={openingHoure.startTime}
                required
              />
            </div>
            <div className="crud__div">
              <label htmlFor="endTime">Hora de Salida:</label>
              <input
                {...register('endTime')}
                id="endTime"
                type="time"
                defaultValue={openingHoure.endTime}
                required
              />
            </div>

            <button type="submit" className="crud__button">
              Guardar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Configuration;
