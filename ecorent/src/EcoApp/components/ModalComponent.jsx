import React from "react";
import { useSelector } from "react-redux";
import { SearchTable } from "./SearchTable";

export const ModalComponent = ({headers,keyField, event, storeName,filter1,filter2}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [coincidencias, setCoincidencias] = React.useState([]);

  const store = useSelector((state) => state[storeName]);

  // let coincidencias = [];

  const buscar = (value) => {
    // console.log(store[storeName][0][filter1]);
    // return
    // console.log(value);
    // console.log(usuarios);

    let val = store[storeName].filter(
      (obj) => obj[filter1].includes(value) || obj[filter2].includes(value)
    );

    setCoincidencias(val);
  };

  // useEffect( () => {}, [coincidencias] )

  return (
    <>
      <button
        className="w-full rounded-xl p-3 text-white font-bold bg-light-accent hover:-translate-y-1 hover:scale-100 hover:bg-red-800 duration-300"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Buscar
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Búsqueda</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <input
                    id="input"
                    type="text"
                    placeholder="Ingrese la cedula del usuario"
                    // value={valor[id] != null ? valor[id] : ""}
                    onChange={(e) => buscar(e.target.value)}
                    className="w-full rounded-md focus:ring border-gray-700 text-gray-900"
                  />

                  <SearchTable data={coincidencias}  headers={headers} keyField={keyField} event={event} showModal={setShowModal} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
