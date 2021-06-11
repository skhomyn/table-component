import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";

const Table = ({ theadData, tbodyData, customClass } : { theadData: any, tbodyData: any, customClass: any }) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {theadData.map( ({h} : {h: any}) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map( ({item} : {item: any}) => {
                    return <TableRow key={item} data={item} />;
                })}
            </tbody>
        </table>
    );
};

export default Table;