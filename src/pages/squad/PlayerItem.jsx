import React from 'react';
import { useDispatch } from "react-redux";
import { onAddPosition,onViewPlayerDetail } from "../../store/modules/playerInfoSlice";
const PlayerItem = ({ item }) => {
    const { id, name, position, backno, img } = item;
    const dispatch = useDispatch();
    return (
        <li onClick={() => dispatch(onViewPlayerDetail(item.backno))}>
            <img src={`./images/player/${img}`} alt="" />
            <p>
                <span> No. {backno}</span>
                <strong> {name} </strong>
                <span> {position} </span>
            </p>
        </li>
    );
};

export default PlayerItem;