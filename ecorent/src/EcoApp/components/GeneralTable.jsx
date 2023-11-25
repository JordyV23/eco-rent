import { Table } from 'flowbite-react';

export const GeneralTable = () => {
  return (
    <div className="container overflow-x-auto mx-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Cedula</Table.HeadCell>
          <Table.HeadCell>Nombre</Table.HeadCell>
          <Table.HeadCell>Apellidos</Table.HeadCell>
          <Table.HeadCell>Fecha de Nacimiento</Table.HeadCell>
          <Table.HeadCell>Correo</Table.HeadCell>
          <Table.HeadCell>Contraseña</Table.HeadCell>
          <Table.HeadCell>Rol</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'117000929'}
            </Table.Cell>
            <Table.Cell>Cynthia</Table.Cell>
            <Table.Cell>Martinez Alvarez</Table.Cell>
            <Table.Cell>1998-01-31</Table.Cell>
            <Table.Cell>****</Table.Cell>
            <Table.Cell>cynthia@gmail.com</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}
