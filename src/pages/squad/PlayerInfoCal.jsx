import React, { useEffect, useState } from 'react';
import { PlayerInfoCalStyle } from "../../styled/PlayGroundStyle";
import { useSelector } from "react-redux";

const PlayerInfoCal = () => {
    const { currentSetData, playerData } = useSelector(state => state.playerInfo);
    const [avgHeight, setHeight] = useState(0);
    const [avgWeight, setWeight] = useState(0);
    const [avgAge, setAge] = useState(0);

    let convertData = currentSetData.filter(item => item.backno !== null);
    convertData = convertData.map(item => playerData.find(player => player.backno === item.backno));

    console.log(convertData);

    useEffect(() => {
        const playerNum = convertData.length;
        if (playerNum !== 0) {
            setHeight((convertData.reduce((acc, cur) =>
                acc + cur.height, 0) / playerNum).toFixed(0));

            setWeight((convertData.reduce((acc, cur) =>
                acc + cur.weight, 0) / playerNum).toFixed(0));

            setAge((convertData.reduce((acc, cur) =>
                acc + Number(2023 - cur.birth.substr(0, 4) + 1), 0) / playerNum).toFixed(0));
        }
    }, [currentSetData]);

    return (
        <PlayerInfoCalStyle className="playerInfoCalculator">
            <div className="cal-wrap">
                <p><strong>평균 신장</strong> <span>{avgHeight}</span></p>
                <p><strong>평균 몸무게</strong> <span>{avgWeight}</span></p>
                <p><strong>평균 나이</strong> <span>{avgAge}</span></p>
            </div>
        </PlayerInfoCalStyle>
    );
};

export default PlayerInfoCal;