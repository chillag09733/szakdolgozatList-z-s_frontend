import { createContext, useEffect, useState } from "react";
import { MyAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [dogaList, setDogaList] = useState([]);

  function getAdat(vegpont) {
   MyAxios
      .get(vegpont)
      .then(function (response) {
        console.log(response.data);
        setDogaList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  function postAdat(vegpont, adat) {
    MyAxios
      .post(vegpont, adat)
     
      .then(function (response) {
        console.log(response.data);
        getAdat("/szakdogas", setDogaList);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
      });
  }

  function putAdat(vegpont, data) {
    MyAxios
      .put(vegpont, data)
      .then(function (response) {
        console.log(response);
        getAdat("/szakdogas", setDogaList);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  function deleteAdat(vegpont, data) {
    MyAxios
      .delete(vegpont, data)
      .then(function (response) {
        console.log(response);
        getAdat("/szakdogas", setDogaList);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  useEffect(() => {
    getAdat("/szakdogas");
  }, []);

  return (
    <ApiContext.Provider value={{ dogaList, postAdat, deleteAdat, setDogaList }}>{children}</ApiContext.Provider>
  );
};
