import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext';
import "./Component.css";

function TablaSor(props) {
  const { deleteAdat, setDogaList } = useContext(ApiContext);
  return (
    <>
       <tr>
        <td>{props.szakdoga.szakdoga_nev}</td>
        <td>{props.szakdoga.tagokneve}</td>
        <td>{props.szakdoga.githublink}</td>
        <td>{props.szakdoga.oldallink}</td>
        <td>🖋️ <button className='torles' onClick={()=>{deleteAdat(`/szakdogas/${props.szakdoga.szakdoga_id}`, setDogaList)}}>❌</button></td>
      </tr> 
    </>
  )
}

export default TablaSor