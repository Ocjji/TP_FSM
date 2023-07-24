import styled from 'styled-components'

export const StyledPositionColor = styled.em`
    color: ${props => {
        switch (props.text) {
            case 'FW': return '#BC0F0F';
            case 'MF': return '#469719';
            case 'DF': return '#498CFF';
            case 'GK': return '#FFAE44';
            default: return 'inherit';
        }
    }};
`;