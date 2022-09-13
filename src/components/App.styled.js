import styled from "styled-components";

export const FeedbackWrapper = styled.section`
    width: 450px;    
    margin-top: ${p => p.theme.space[3]}px; 
    margin-bottom: ${p => p.theme.space[3]}px;   
    box-shadow: ${p => p.theme.shadows.card};
    background-color: ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii.normal};
    padding:${p => p.theme.space[4]}px;
    margin-left: auto;
    margin-right: auto;
`