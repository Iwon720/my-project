import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
}

.blm {
    background-color:${({ theme }) => theme.input} !important;
}

.modal-content{
    background-color:${({ theme }) => theme.body} !important;
}
`