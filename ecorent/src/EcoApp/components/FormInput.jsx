import React from "react";

export const FormInput = ({ id, label, type, registerFunction }) => {
  return (
    <div className="col-span-full sm:col-span-3">
      <label htmlFor="cedula" className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={label}
        {...registerFunction}
        className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
      />
    </div>
  );
};
