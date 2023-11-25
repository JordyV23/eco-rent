import { Link } from "react-router-dom";

export const LinkComponent = ({ text, link }) => {
  return (
    <>
      <Link
        to={link}
        className="hvr-grow items-center p-2 text-txt-light rounded-lg text-white text-xl font-semibold"
      >
        <span className="ml-3 whitespace-nowrap">{text}</span>
      </Link>
    </>
  );
};
