import styled from "styled-components";
import { pixToRem } from "../../utils/pixToRem";

export const SucessContainer = styled.div`
    display: flex;
    margin-top: ${pixToRem(80)};
`

export const LeftContainer = styled.div`

`

export const TitleSucess = styled.div`
    padding-bottom: ${pixToRem(40)};
`

export const TitleH1 = styled.h1`
    color: ${props => props.theme["yellow-dark"]};
    font-family: "Baloo 2", cursive;
    font-size: 32px;
    line-height: bold;
`

export const TitleP = styled.p`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-weight: 130%;
    color: ${props => props.theme["base-subtitle"]};
`

export const ContainerInfo = styled.div`
    width: ${pixToRem(526)};
    height: ${pixToRem(270)};
    border: 1px solid ${props => props.theme["yellow-dark"]};
    border-radius: 6px 36px 6px 36px;
    padding: ${pixToRem(40)};
    
        
`

export const BaseInfo = styled.span`
    display: flex;
    margin-bottom: ${pixToRem(32)};
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 130%;
    color: ${props => props.theme["base-text"]};
    align-items: start;
    gap: ${pixToRem(12)};
    
    
    
    th {
        padding-right: 4rem   ;
    }
`

export const LocalInfo = styled(BaseInfo)`
    display: flex;
    width: ${pixToRem(354)};
`

export const TimeInfo = styled(BaseInfo)`
    display: flex;
`

export const CifraInfo = styled(BaseInfo)`
    display: flex;
` 

export const RightContainer = styled.div`
    width: ${pixToRem(492)};
    height: ${pixToRem(293)};
    margin-top: 9rem;
    margin-left: ${pixToRem(102)};
    
`