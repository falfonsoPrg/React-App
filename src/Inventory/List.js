import React from 'react'
import { MDBDataTable} from 'mdbreact'
import data from './data-example.js'

function List() {
    return(
        <MDBDataTable
            striped
            bordered
            hover 
            small
            data={data}
        />
    )
}

export default List