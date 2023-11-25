import {
  NavbarApp,
  UserOptions,
  GeneralTable,
  UserForm,
  CrudBtsn,
} from "../components/";

export const UsersPage = () => {
  return (
    <>
      <NavbarApp />
      <UserOptions />
      <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 ">
        <div className="col-span-full sm:col-span-4">
          <UserForm />
        </div>
        <div className="col-span-full sm:col-span-2">
          <CrudBtsn />
        </div>
      </div>

      <GeneralTable />
    </>
  );
};
