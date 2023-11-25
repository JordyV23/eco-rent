import React from "react";

export const UserForm = () => {
  return (
    <>
      <section className="p-4  text-gray-50">
        <form
          noValidate
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
         
          <fieldset className="grid gap-6 p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="cedula" className="text-sm">
                  Cédula
                </label>
                <input
                  id="cedula"
                  type="text"
                  placeholder="Cédula"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="fechaNacimiento" className="text-sm">
                  Fecha de Nacimiento
                </label>
                <input
                  id="fechaNacimiento"
                  type="date"
                  placeholder="Nombre"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Nombre
                </label>
                <input
                  id="firstname"
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="apellidos" className="text-sm">
                  Apellidos
                </label>
                <input
                  id="apellidos"
                  type="text"
                  placeholder="Apellidos"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Correo
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="rol" className="text-sm">
                  Rol
                </label>
                <input
                  id="rol"
                  type="text"
                  placeholder="Rol"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};
