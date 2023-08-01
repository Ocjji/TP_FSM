import React from 'react';
import { PlayGroundStyle, SquadWrap } from "../../styled/PlayGroundStyle";
import PlayerPosition from "./PlayerPosition";
import PlayerPositionNull from "./PlayerPositionNull";
import { useDispatch, useSelector } from "react-redux";
import PlayerList from "./PlayerList";
import { offPopupPlayerList } from "../../store/modules/playerInfoSlice";
import PlayerInfoCal from "./PlayerInfoCal";

const SquadLayout = () => {
    const { currentSetData, selectPosition } = useSelector(state => state.playerInfo);
    const dispatch = useDispatch();
    return (
        <SquadWrap className="squadWrap">
            {
                selectPosition &&
                <div className="playlistPopupBG" onClick={() => dispatch(offPopupPlayerList())}></div>
            }
            <PlayerList />
            <PlayerInfoCal />
            <div className="inner">
                <PlayGroundStyle className="playGround">
                    {
                        currentSetData.map(item => item.backno !== null ?
                            <PlayerPosition key={item.id} item={item} />
                            :
                            <PlayerPositionNull key={item.id} item={item} />)
                    }
                </PlayGroundStyle>
            </div>
        </SquadWrap>
    );
};

export default SquadLayout;