import React from "react";
export default function Table(props) {
    const tableItems = props.state.people.map((item, index) =>
    <div key = {index}>
        <th>{item.name}</th>
        <th>{item.select}</th>
        <th>{ item.radioGroup.no ? "-": item.radioGroup.yes ? '+': null }</th>
    </div>
  );
    return <div>
    <table>
    <tbody>
    <tr>
        <div>
            <th>Name</th>
            <th>Position</th>
            <th>Contractor?</th>
        </div>
        
    </tr>
    <tr>
    {tableItems}
    </tr>
    </tbody>
    </table>
    </div>
}