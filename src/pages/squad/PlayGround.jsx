// 페이지 미적용 파일입니다.

import React from 'react';
import PlayerPosition from "./PlayerPosition";
import { PlayGroundStyle, SquadWrap } from "../../styled/PlayGroundStyle";
import { useSelector } from "react-redux";
import PlayerPositionNull from "./PlayerPositionNull";
import PlayerList from "./PlayerList";


const PlayGround = () => {
    const { currentSetData } = useSelector(state => state.playerR);
    return (
        <SquadWrap className="squadWrap">
            <PlayGroundStyle className="playground">
                {
                    currentSetData.map(item => item.no !== null ?
                        <PlayerPosition key={item.id} item={item} />
                        :
                        <PlayerPositionNull key={item.id} item={item} />)
                }

            </PlayGroundStyle>
            <PlayerList />
        </SquadWrap>
    );
};

export default PlayGround;