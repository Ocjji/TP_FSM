import React from 'react';
import { StyledPositionColor } from './../../styled/positionColorStyled';
import { useDispatch } from 'react-redux';
import { isSelectPlayer } from './../../store/modules/playerInfoSlice';

const PlayerInfoItem = ({ item }) => {
    const { id, backno, img, name, birth, height, weight, teamNameKor, position } = item
    const dispatch = useDispatch()
    const hasHttp = img.includes('http');
    console.log(hasHttp);
    return (
        <li onClick={() => dispatch(isSelectPlayer(item))}>
            <div className='playerImg'>
                {
                    hasHttp ? <img src={img} alt="" /> : <img src={`./images/player/${img}`} alt="" />
                }
            </div>
            <div className='playerBasic'>
                <strong>{name}</strong>
                <StyledPositionColor text={position}>{position}</StyledPositionColor>
                <span>{birth}</span>
                <span>{height}cm / {weight}kg</span>
                <span>{teamNameKor}</span>
            </div>
            <div className='playerBackno'>
                <p>{backno}</p>
            </div>
        </li>
    );
};

export default PlayerInfoItem;