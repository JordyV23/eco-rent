import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export const FormInput = ({ id, label, type, func }) => {
  const valor = useSelector((state) => state.usuarios);

  const dispatch = useDispatch();
  return (
    <div className="col-span-full sm:col-span-3">
      <label htmlFor="cedula" className="text-sm">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={label}
        value={valor[id]}
        onChange={(e) => dispatch( func(e.target.value) )}
        className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
      />
    </div>
  );
};
