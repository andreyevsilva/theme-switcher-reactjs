import styled from 'styled-components';

export const Container = styled.footer`
    position:absolute;
    bottom:0;
    width:100%;
    
    display:flex;
    align-items:center;
    justify-content:center;

    height:60px;
    padding: 0 30px;

    margin-top:auto;

    background:${props => props.theme.colors.primary};
    color:${props => props.theme.colors.text};
`;


export const Text = styled.p`
  color:${props => props.theme.colors.text}
`;