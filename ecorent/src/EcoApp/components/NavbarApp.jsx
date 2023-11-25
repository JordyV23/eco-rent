import { Navbar } from "flowbite-react";

export const NavbarApp = () => {
  return (
    <Navbar
      fluid
      className="bg-light-accent p-6 sticky top-0 z-50"
    >
      <Navbar.Brand>
        <img alt="Economylogo" className="mr-3 h-6 sm:h-9" src="/ecorent.svg" />
      </Navbar.Brand>

      <Navbar.Collapse className="text-white">
        <Navbar.Link
          className="text-white p-2 text-base"
          href="/gpto/home"
        >
          <p>Cerrar Sesión</p>
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
};
