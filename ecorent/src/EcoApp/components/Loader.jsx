import React from "react";
import { Bars, CirclesWithBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-20">
        <Bars
          height="80"
          width="80"
          color="#D30C15"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};
