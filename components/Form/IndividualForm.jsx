import React from 'react';
import { useForm } from "react-hook-form";

const IndividualForm = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div className="row g-3">
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  {...register("Name")}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Jhon Doe"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="phone">Telefono</label>
                <input
                  {...register("phone")}
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="01718069307"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="email">Correo</label>
                <input
                  {...register("email")}
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="mail@xxxx.com"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="date">Disponibilidad</label>
                <input
                  {...register("date")}
                  type="date"
                  className="form-control"
                  id="date"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="time">Hora Para Llamada</label>
                <input
                  {...register("time")}
                  type="time"
                  className="form-control"
                  id="time"
                />
              </div>
            </div>
          </div>          
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group">
                <label htmlFor="details">Explicacion Detallada</label>
                <textarea
                  {...register("details")}
                  className="form-control"
                  id="details"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-12">
                <button className="btn btn-primary">Enviar</button>
            </div>
          </div>
        </form>
      </>
    );
};

export default IndividualForm;