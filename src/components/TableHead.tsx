import React from "react";

const TableHeadItem = ({ item } : {item: any}) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};

export default TableHeadItem;