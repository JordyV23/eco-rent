import React from "react";
import { FormInput } from "./FormInput";
import { useForm } from "react-hook-form";

export const CrudForm = ({ fields,onSubmit }) => {
  //***Hook para manejo de formulario***//
  const { register, handleSubmit } = useForm();


  return (
    <>
      <section className="p-4  text-gray-50">
        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)} 
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {fields.map((field) => (
                <FormInput
                  id={field.name}
                  label={field.label}
                  type={field.type}
                  key={field.name}
                  registerFunction={{...register(field.name)}}
                />
              ))}
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};
