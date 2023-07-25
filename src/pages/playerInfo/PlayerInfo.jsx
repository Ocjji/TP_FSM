import React, { memo, useEffect, useState } from 'react';
import { PlayerInfoBar, PlayerInfoPopupBg, PlayerInfoWrap, PlayerList } from './../../styled/PlayerInfoStyles';
import { getPlayerData } from './../../store/modules/playerInfoSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import GKPlayerInfoPopup from './GKPlayerInfoPopup';
import PlayerInfoPopup from './PlayerInfoPopup';
import EditGKPlayerInfoItem from './../addPlayerData/EditGKPlayerInfoItem';
import EditPlayerInfoItem from './../addPlayerData/EditPlayerInfoItem';
import PlayerInfoItem from './PlayerInfoItem';
import PlayerSearch from './PlayerSearch';

const PlayerInfo = memo(() => {
    const { playerData, loading, selectedItem, playerEditMode } = useSelector(state => state.playerInfo)
    const { searchPlayerName } = useSelector(state => state.playerInfo)
    const [data, setData] = useState(playerData)
    const dispatch = useDispatch()
    const [liNum, setLiNum] = useState(1)
    console.log(playerData);
    useEffect(() => {
        if (loading && localStorage.getItem('playerData') == null) dispatch(getPlayerData())
        else {
            JSON.parse(localStorage.getItem('playerData'));
        }
    }, [loading])

    useEffect(() => {
        setData(searchPlayerName
            ? playerData.filter(item => item.name.includes(searchPlayerName))
            : playerData)
    }, [playerData, searchPlayerName])


    const onFilterData = (e, num) => {
        const value = e.target.textContent
        console.log(value);
        if (value === "ALL PLAYERS") {
            setData(
                searchPlayerName
                    ? playerData.filter(item => item.name.includes(searchPlayerName))
                    : playerData)
        }
        else {
            setData(
                searchPlayerName
                    ? playerData.filter(item => item.name.includes(searchPlayerName) && item.position === value)
                    : playerData.filter(item => item.position === value)
            )
        }
        setLiNum(num)
    }
    const navigate = useNavigate()
    const goPage = () => {
        navigate('/addPlayer')
    }

    return (
        <PlayerInfoWrap>
            {selectedItem && <PlayerInfoPopupBg></PlayerInfoPopupBg>}
            <h2>선수명단</h2>
            <div className="inner">
                <PlayerInfoBar>
                    <ul>
                        <li onClick={(e) => onFilterData(e, 1)} className={liNum === 1 ? "on" : ""}>ALL PLAYERS</li>
                        <li onClick={(e) => onFilterData(e, 2)} className={liNum === 2 ? "on" : ""}>FW</li>
                        <li onClick={(e) => onFilterData(e, 3)} className={liNum === 3 ? "on" : ""}>MF</li>
                        <li onClick={(e) => onFilterData(e, 4)} className={liNum === 4 ? "on" : ""}>DF</li>
                        <li onClick={(e) => onFilterData(e, 5)} className={liNum === 5 ? "on" : ""}>GK</li>
                    </ul>
                    <PlayerSearch />
                </PlayerInfoBar>
                <PlayerList >
                    {
                        data && data.map((item, index) => (
                            <PlayerInfoItem key={index} item={item} />
                        ))
                    }
                    <li onClick={goPage} className='addPlayerBox'>
                        선수추가
                    </li>
                </PlayerList>
                {
                    // selectedItem && !playerEditMode && selectedItem.position === "GK" ? <GKPlayerInfoPopup /> : <PlayerInfoPopup />
                    selectedItem && !playerEditMode ? selectedItem.position === "GK" ? <GKPlayerInfoPopup /> : <PlayerInfoPopup /> : ""
                }
                {
                    selectedItem && playerEditMode ? selectedItem.position === "GK" ? <EditGKPlayerInfoItem /> : <EditPlayerInfoItem /> : ""
                }
            </div>
        </PlayerInfoWrap >
    );
});

export default PlayerInfo;