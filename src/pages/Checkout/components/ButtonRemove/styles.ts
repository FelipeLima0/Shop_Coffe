import styled from "styled-components";
import { pixToRem } from "../../../../utils/pixToRem";

export const ButtonRemoveContainer = styled.button`
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    font-family: 160%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: ${pixToRem(91)};
    gap: .4rem;
    background: ${props => props.theme["base-button"]};
    border-radius: 6px;

    img {
        width: ${pixToRem(16)};
    }
`