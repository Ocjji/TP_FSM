import styled from 'styled-components'

export const PlayerListStyle = styled.ul`
    padding: 20px;
    border: 1px solid #000;
    display: flex;

    li {
        width: 150px;
        height: 200px;
        border: 1px solid #000;
        text-align: center;
        padding-top: 20px;
        box-sizing: border-box;
        margin: 5px;
        img{
            width: 100px;
            height: 100px;
            border: 1px solid #000;
            margin: 0 auto;
        }
    }
`;