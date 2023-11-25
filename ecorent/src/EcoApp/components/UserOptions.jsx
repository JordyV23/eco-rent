import { Link } from "react-router-dom";
import { LinkComponent } from "./LinkComponent";

export const UserOptions = () => {
  return (
    <>
      <div className="container mx-auto mt-8 text-center">
        <LinkComponent ink={"users"} text={"Usuarios"} />
        <LinkComponent ink={"vehicles"} text={"Vehiculos"} />
        <LinkComponent ink={"rental"} text={"Alquileres"} />
      </div>
    </>
  );
};
