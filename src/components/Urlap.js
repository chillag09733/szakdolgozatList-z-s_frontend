import React, { useContext, useState } from "react";
import { ApiContext } from "../context/ApiContext";

function Urlap() {

const { postAdat } = useContext(ApiContext);
  const [adat, setAdat] = useState({
    szakdoga_nev: "",
    tagokneve: "",
    oldallink: "",
    githublink: "",
  });

  function kuldesKezeles(event) {
    event.preventDefault();
    postAdat("szakdogas", adat);
  }

  function handleChange(event) {
    const segedValtozo = { ...adat };
    segedValtozo[event.target.id] = event.target.value;
    setAdat({ ...segedValtozo });
  }

  return (
    <div>
      <form onSubmit={kuldesKezeles}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Szakdolgozat címe
          </label>
          <input
            type="text"
            className="form-control"
            id="szakdoga_nev"
            aria-describedby="nev help"
            value={adat.szakdoga_nev}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Készítők neve
          </label>
          <input
            type="text"
            className="form-control"
            id="tagokneve"
            aria-describedby="tagok help"
            value={adat.tagokneve}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Az oldal elérhetősége:
          </label>
          <input
            type="text"
            className="form-control"
            id="oldallink"
            aria-describedby="oldallink help"
            value={adat.oldallink}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            GitHub elérhetőség
          </label>
          <input
            type="text"
            className="form-control"
            id="githublink"
            aria-describedby="github help"
            value={adat.githublink}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Új
        </button>
      </form>
    </div>
  );
}

export default Urlap;
