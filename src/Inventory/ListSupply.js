import React from 'react'
import { MDBDataTable } from 'mdbreact'
import data from './data-example.js'
import ModalModify from './ModalModify'

function ListSupply() {
    AddModifyButtom()
    function AddModifyButtom () {
        data.columns[9] = {label: "Modificar", field:"modify"}
        for (var i in data.rows) {
              data.rows[i]['modify'] = <ModalModify />
        }
    }

    return(
        <div>
        <MDBDataTable
            striped
            bordered
            hover 
            small
            data={data}
        />
        </div>
    )
}

export default ListSupply