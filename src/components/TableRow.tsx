import React from "react";

const TableRow = ({data} : {data: any}) => {
    return (
        <tr>
            {data.map( ({item} : {item: any}) => {
                console.log('item ', item)
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;