"use client";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default function Home() {
  const [codigo, setCodigo] = useState("");

  const initialValues = {
    nombre: " ",
    apellido: " ",
    cedula: " ",
    departamento: " ",
    ciudad: " ",
    celular: " ",
    email: " ",
    habeasData: false,
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Requerido"),
    apellido: Yup.string().required("Requerido"),
    cedula: Yup.number().required("Requerido"),
    departamento: Yup.string().required("Requerido"),
    ciudad: Yup.string().required("Requerido"),
    celular: Yup.number().required("Requerido"),
    email: Yup.string().email("Email inválido").required("Requerido"),
    habeasData: Yup.boolean().oneOf([true], "Debes aceptar los términos"),
  });

  const generateCode = () =>
    Math.random().toString(36).substr(2, 8).toUpperCase();

  const handleSubmit = () => {
    setCodigo(generateCode());
  };

  return (
    <div className="container">
  <h1>Registro para el Sorteo</h1>
  {!codigo ? (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <div className="form-group">
            <label>Nombre</label>
            <Field className="input-field" name="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <Field className="input-field" name="apellido" placeholder="Ingresa tu apellido" />
          </div>
          <div className="form-group">
            <label>Cédula</label>
            <Field className="input-field" name="cedula" type="number" placeholder="Ingresa tu cédula" />
          </div>
          <div className="form-group">
            <label>Departamento</label>
            <Field className="select-field" as="select" name="departamento">
              <option value="">Seleccione...</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Antioquia">Antioquia</option>
            </Field>
          </div>
          <div className="form-group">
            <label>Ciudad</label>
            <Field className="select-field" as="select" name="ciudad">
              <option value="">Seleccione...</option>
              <option value="Bogotá">Bogotá</option>
              <option value="Medellín">Medellín</option>
            </Field>
          </div>
          <div className="form-group">
            <label>Celular</label>
            <Field className="input-field" name="celular" type="number" placeholder="Ingresa tu celular" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Field className="input-field" name="email" type="email" placeholder="Ingresa tu email" />
          </div>
          <div className="form-group">
            <label>
              <Field type="checkbox" name="habeasData" />
              Autorizo el tratamiento de mis datos.
            </label>
          </div>
          <button className="submit-button" type="submit">Registrar</button>
        </Form>
      )}
    </Formik>
  ) : (
    <div className="completion-message">
      <h2>Registro completado</h2>
      <p>Su código de participación es: {codigo}</p>
    </div>
  )}
</div>

  );
}
