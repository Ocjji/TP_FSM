import React from 'react';
import { PlayPositionStyle } from "../../styled/PlayGroundStyle";
import { useDispatch } from "react-redux";
import { onSelectPosition } from "../../store/modules/playerInfoSlice";

const PlayerPositionNull = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <PlayPositionStyle style={{ paddingTop: "20px" }} className={item.positionNo} onClick={() => dispatch(onSelectPosition(item.id))} >
                <img src="./images/Squad/emptyPlayer.png" alt="" />
                <p>
                    <span> </span>
                    <strong>  </strong>
                    <span>  </span>
                </p>
            </PlayPositionStyle >
        </div>
    );
};

export default PlayerPositionNull;