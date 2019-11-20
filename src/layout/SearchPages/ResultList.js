import React, { Component } from 'react'
import Result from './Result';
import { Table } from 'reactstrap';
export default class ResultList extends Component {
    render() {
        var list = this.props.result.map((data, key) =>{
            return (
                <Result data={data} key={key} />
            )
        });
        
        return (
            <Table hover>
                        <thead>
                            <tr>
                                <th>Otsikko:</th>
                                <th>Nimimerkki:</th>
                                <th>Aika:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                            
                        </tbody>
                    </Table>
        )
    }
}
