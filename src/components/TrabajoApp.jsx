import React from "react";
import { empleados } from "../data/empleados";

const TrabajoApp = () => {
  console.log(empleados);
  return (
    <div className="container   d-flex justify-content-center ">
      <div className="row">
        <div className="col">
          <h1>Trabajadores</h1>

          {empleados.map((empleados) => (
            <div className="card mb-3 shadow-lg" key={empleados.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={empleados.pic}
                    className=" rounded-start"
                    alt={empleados.title}
                  ></img>
                </div>
                <div className="col-md-8 d-flex align-items-end ">
                  <div className="card-body ">
                    <h5 className="card-title">{empleados.fullName} </h5>
                    <p className="card-text mt-5 mensaje">
                      {empleados.title}
                      <span className="float-end borde">
                        Rango: {empleados.department}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrabajoApp;
