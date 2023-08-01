import React from 'react';
import { PlayGroundStyle, SquadWrap } from "../../styled/PlayGroundStyle";
import PlayerPosition from "./PlayerPosition";
import PlayerPositionNull from "./PlayerPositionNull";
import { useSelector } from "react-redux";
import PlayerList from "./PlayerList";

const SquadLayout = () => {
    const { currentSetData } = useSelector(state => state.playerInfo);
    return (
        <SquadWrap className="squadWrap">
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
            <PlayerList />
        </SquadWrap>
    );
};

export default SquadLayout;