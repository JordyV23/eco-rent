import React from "react";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";

/**
 * Componente funcional que representa un formulario CRUD genérico.
 * Utiliza el hook useForm de react-hook-form para el manejo del formulario.
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {Array} props.fields - Array de objetos que describe los campos del formulario.
 * @param {Function} props.onSubmit - Función a ejecutar al enviar el formulario.
 * @example
 * Ejemplo de uso del componente en un contenedor principal.
 * <CrudForm
 *   fields={[{ name: "firstName", label: "Nombre", type: "text" }, ...]}
 *   onSubmit={(data) => console.log(data)}
 * />
 */
export const CrudForm = ({ fields, onSubmit }) => {
  // Hook para el manejo del formulario
  const { register, handleSubmit } = useForm();

  return (
    <>
      {/* Sección del formulario */}
      <section className="p-4  text-gray-50">
        {/* Formulario */}
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          {/* Conjunto de campos del formulario */}
          <fieldset className="grid gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Mapeo de los campos del formulario */}
              {fields.map((field) => (
                <FormInput
                  id={field.name}
                  label={field.label}
                  type={field.type}
                  key={field.name}
                  registerFunction={{ ...register(field.name) }}
                />
              ))}
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};
