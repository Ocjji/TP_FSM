import React from 'react';
import { useDispatch } from "react-redux";
import { onAdd } from "../../store/modules/playerSlice";
const PlayerItem = ({ item }) => {
    const { pid, name, position, p_no, img } = item;
    const dispatch = useDispatch();
    return (
        <li onClick={() => dispatch(onAdd(item.p_no))}>
            <img src={img} alt="" />
            <p>
                <span> No. {p_no}</span>
                <strong> {name} </strong>
                <span> {position} </span>
            </p>
        </li >
    );
};

export default PlayerItem;