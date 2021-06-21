import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    color:${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary};
`;