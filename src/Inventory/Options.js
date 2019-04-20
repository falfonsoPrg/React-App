import React from 'react'
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import Modal from './Modal'

function SelectPage() {
    return(
      <div>
        <select className="browser-default custom-select">
          <option>Escoja la Bodega</option>
          <option value="1">Bodega 1</option>
        </select>
        <MDBBtn color="indigo">Cambiar Bodega</MDBBtn>
      </div>
    )
}

function Options() {
    return(
        <div>
                <br />
                <MDBRow>
                    <MDBCol><SelectPage /></MDBCol>
                    <Modal color="indigo" name="Elementos" options={{ first:"Agregar", second:"Eliminar", third:"Modificar" }} app={ {first: <Options />} }/>
                    <Modal color="indigo" name="Registrar Movimientos" options={{ first:"Entrada", second:"Salida", third:"Translado" }}/>
                </MDBRow>
        </div>
    )
}

export default Options