import React from 'react';
import { PlayPositionStyle } from "../../styled/PlayGroundStyle";
import { useDispatch } from "react-redux";
import { onSelectPosition } from "../../store/modules/playerSlice";

const PlayerPositionNull = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <PlayPositionStyle className={item.positionNo} onClick={() => dispatch(onSelectPosition(item.id))} >
                <img src="./images/PlayerImg/empty.png" alt="" />
                <p>
                    <span> No. </span>
                    <strong>  </strong>
                    <span>  </span>
                </p>
            </PlayPositionStyle >
        </div>
    );
};

export default PlayerPositionNull;