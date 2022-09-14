import styled from "styled-components";

export const StatisticItem = styled.li`
    color:${p => p.theme.colors.muted};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.s};
    :not(:last-child){
        margin-bottom:${p => p.theme.space[2]}px;
    }
`