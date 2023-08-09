import React from 'react';

const GameScheduleList = ({item}) => {
    const {desc, country1, country1Img, country2,country2Img,date,time,country1Score,country2Score} = item

    return (
        <li>
            <div className='dateBox'>
                <p>{date}</p>
                <span>{time}</span>
                <strong>{desc}</strong>
            </div>
            <div className='score'>
                <div className='imgbox'>
                    <img src={country1Img} alt={country1} />
                </div>
                <strong>{country1}</strong>
                <p>
                    <em style={{color: country1==='한국'?'#000':'#999'}}>{country1Score}</em>
                    <span>vs</span>
                    <em style={{color: country2==='한국'?'#000':'#999'}}>{country2Score}</em>
                </p>
                <strong>{country2}</strong>
                <div className='imgbox'>
                    <img src={country2Img} alt={country2} />
                </div>
            </div>
        </li>
    );
};

export default GameScheduleList;