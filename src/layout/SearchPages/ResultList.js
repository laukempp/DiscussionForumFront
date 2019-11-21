import React, { Component } from 'react'
import Result from './Result';
export default class ResultList extends Component {
    render() {
        var list = this.props.result.map((data, key) =>{
            return (
                <Result data={data} key={key} />
            )
        });
        
        return (
            <table>
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
                    </table>
        )
    }
}
