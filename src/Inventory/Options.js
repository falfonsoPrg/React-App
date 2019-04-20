import React from 'react'
import { MDBBtn, MDBRow, MDBCol, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

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

function DropdownPage (props) {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="indigo">
        {props.name}
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem onClick={props.handleAppChange} name={props.opciones.first}>{props.opciones.first}</MDBDropdownItem>
        <MDBDropdownItem onClick={props.handleAppChange} name={props.opciones.second}>{props.opciones.second}</MDBDropdownItem>
        <MDBDropdownItem onClick={props.handleAppChange} name={props.opciones.third}>{props.opciones.third}</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  )
}


function Options(props) {
    return(
        <div>
              <br />
                <MDBRow>
                    <MDBCol><SelectPage /></MDBCol>
                    <DropdownPage color="indigo" name="Elementos" opciones={{ first:"Agregar", second:"Eliminar", third:"Modificar" }} handleAppChange={props.handleAppChange}/>
                    <DropdownPage color="indigo" name="Registrar Movimientos" opciones={{ first:"Entrada", second:"Salida", third:"Translado" }} handleAppChange={props.handleAppChange}/>
                </MDBRow>
        </div>
    )
}

export default Options