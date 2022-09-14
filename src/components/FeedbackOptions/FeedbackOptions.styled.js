import styled from "styled-components";

export const FeedbackButton = styled.button`
    min-width: ${p => p.theme.space[6]}px;
    font-size: ${p => p.theme.fontSizes.s};    
    padding:${p => p.theme.space[2]}px;
    outline: none;
    border: none;
    border-radius: ${p => p.theme.radii.normal};
    :hover {
        color:${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
    }   
`

export const FeedbackOptionsItem = styled.li`
    :not(:last-child){
            margin-right: ${p => p.theme.space[3]}px;
        }
`