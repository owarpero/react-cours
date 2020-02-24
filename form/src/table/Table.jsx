import React from "react";

export default function Table(props) {
    const tableItems = props.state.people.map((item) =>
    <tr key = {item.id}>
        <th>{item.name}</th>
        <th>{item.select}</th>
        <th>{item.contractor ? "+":  '-'}</th>
        <th>
            <input type="button" value="X" onClick={item.deleteItem}/>
            <input type="button" value="Edit" onClick={item.editItem}/>
        </th>
    </tr>
  );
    return (
    <div>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Contractor?</th>
                    <th></th>
                </tr>
                {tableItems}
            </tbody>
        </table>
    </div>)
}