import React from "react";
import { userFields } from "../utils";
import { FormInput } from "./FormInput";

export const CrudForm = () => {
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
              {userFields.map((field) => (
                <FormInput
                  id={field.name}
                  label={field.label}
                  type={field.type}
                  key={field.name}
                />
              ))}
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};
