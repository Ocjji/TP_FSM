import React from 'react';
import { useDispatch } from "react-redux";
import { onAddPosition, onViewPlayerDetail } from "../../store/modules/playerInfoSlice";
const PlayerItem = ({ item }) => {
    const { id, name, position, backno, img } = item;
    const dispatch = useDispatch();
    const hasHttp = img.includes('http');
    console.log(hasHttp);
    return (
        <li onClick={() => dispatch(onViewPlayerDetail(item.backno))}>
            {
                hasHttp ? <img src={img} alt="" /> : <img src={`./images/player/${img}`} alt="" className="imgHover" />
            }
            <p>
                <span> No. <em>{backno}</em></span>
                <strong> {name} </strong>
                {/* <span> {position} </span> */}
            </p>
        </li>
    );
};

export default PlayerItem;