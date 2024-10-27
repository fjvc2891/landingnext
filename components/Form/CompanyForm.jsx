import React from "react";
import { useForm } from "react-hook-form";

const CompanyForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="row g-3">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="name">Iuris Lex V&C</label>
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
              <label htmlFor="email">Correo</label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                id="email"
                placeholder="mail@gmail.com"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="date">Fecha Reunion</label>
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
              <label htmlFor="time">Hora Llamada</label>
              <input
                {...register("time")}
                type="time"
                className="form-control"
                id="time"
              />
            </div>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Tipo Compañia</label>
              <select
                {...register("company_type")}
                className="form-control"
                id="exampleFormControlSelect1"
              >
                <option>Select Company Type</option>
                <option value="software">Software</option>
                <option value="bank">Bank</option>
                <option value="school">School</option>
              </select>
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

export default CompanyForm;
