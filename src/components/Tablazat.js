import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import { ApiContext } from '../context/ApiContext';
import TablaSor from './TablaSor';

function Tablazat() {
    const { dogaList } = useContext(ApiContext);
  return (
    <Table striped>
    <thead>
      <tr>
        <th>Szakdolgozat címe</th>
        <th>Készítők neve</th>
        <th>GitHub Link</th>
        <th>Szakdolgozat elérhetősége</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {dogaList.map((szakdoga) => {
        return <TablaSor szakdoga={szakdoga} key={szakdoga.szakdoga_id} />;
      })}
    </tbody>
  </Table>
  )
}

export default Tablazat
