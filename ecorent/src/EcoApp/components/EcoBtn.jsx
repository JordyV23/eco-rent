import React from "react";

export const EcoBtn = ({text,action}) => {
  return (
    <button className="w-full rounded-xl bg-light-accent p-3 text-white font-bold" onClick={action}>
      {text}
    </button>
  );
};
