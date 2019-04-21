import React from 'react'
import { MDBDataTable } from 'mdbreact'
import data from './data-example.js'
import ModalModify from './ModalModify'

function ListSupply() {
    
    var aux = []
    AddModifyButtom()
    function AddModifyButtom () {
        aux = data
        aux.columns[9] = {label: "Modificar", field:"modify"}
        for (var i in aux.rows) {
            aux.rows[i]['modify'] = <ModalModify />
        }
    }

    return(
        <div>
        <MDBDataTable
            striped
            bordered
            hover 
            small
            data={aux}
        />
        </div>
    )
}

export default ListSupply