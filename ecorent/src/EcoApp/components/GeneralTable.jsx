import { Table } from "flowbite-react";
import { useSelector } from "react-redux";

export const GeneralTable = ({ headers, storeName }) => {
  const onClick = () => {
    alert("hola");
  };

  const storeElement = useSelector((state) => state[storeName]);
  const data = storeElement[storeName];

  return (
    <div className="container overflow-x-auto mx-auto">
      <Table striped>
        <Table.Head>
          {headers.map((header) => (
            <Table.HeadCell key={header}>{header}</Table.HeadCell>
          ))}
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {/* Renderizar filas de tabla según tus datos */}
          {data.map((user) => (
            <Table.Row key={user.cedula}>
              {/* Renderizar celdas de tabla según las propiedades del usuario */}
              {Object.values(user).map((value, index) => (
                <Table.Cell key={index}>{value}</Table.Cell>
              ))}
              <Table.Cell>
                <button
                  className="font-medium text-cyan-600 "
                >
                  Editar
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};