import React from 'react';
import { StyledPositionColor } from './../../styled/positionColorStyled';
import { useDispatch, useSelector } from 'react-redux';
import { isSelectPlayer } from './../../store/modules/playerInfoSlice';

const PlayerInfoItem = ({ item }) => {
    const { id, img, name, birth, height, weight, teamNameKor, position } = item
    const dispatch = useDispatch()

    return (
        <li onClick={() => dispatch(isSelectPlayer(item))}>
            <div className='playerImg'><img src={`./images/player/${img}`} alt="" /></div>
            <div className='playerBasic'>
                <strong>{name}</strong>
                <StyledPositionColor text={position}>{position}</StyledPositionColor>
                <span>{birth}</span>
                <span>{height}cm / {weight}kg</span>
                <span>{teamNameKor}</span>
            </div>
        </li>
    );
};

export default PlayerInfoItem;