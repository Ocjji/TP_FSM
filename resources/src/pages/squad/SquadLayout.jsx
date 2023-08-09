import React, { useEffect } from 'react';
import { PlayGroundStyle, SquadWrap } from "../../styled/PlayGroundStyle";
import PlayerPosition from "./PlayerPosition";
import PlayerPositionNull from "./PlayerPositionNull";
import { useDispatch, useSelector } from "react-redux";
import PlayerList from "./PlayerList";
import { getPlayerData, offPopupPlayerList } from "../../store/modules/playerInfoSlice";
import PlayerInfoCal from "./PlayerInfoCal";

const SquadLayout = () => {
    const { currentSetData, selectPosition, loading } = useSelector(state => state.playerInfo);
    const dispatch = useDispatch();
    window.scrollY
    useEffect(() => {
        if (loading && localStorage.getItem('playerData') == null) dispatch(getPlayerData())
        else {
            JSON.parse(localStorage.getItem('playerData'));
        }
    }, [loading])
    return (
        <SquadWrap className="squadWrap">
            <h2 className='h2bg'>Squad Maker</h2>
            {
                selectPosition &&
                <div className="playlistPopupBG" onClick={() => dispatch(offPopupPlayerList())}></div>
            }
            <PlayerList />
            <div className="inner">
                <PlayGroundStyle className="playGround">
                    {
                        currentSetData.map(item => item.backno !== null ?
                            <PlayerPosition key={item.id} item={item} />
                            :
                            <PlayerPositionNull key={item.id} item={item} />)
                    }
                </PlayGroundStyle>
                <PlayerInfoCal />
            </div>
        </SquadWrap>
    );
};

export default SquadLayout;