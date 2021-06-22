import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #48434d;
`;

export const StyledNav = styled.nav`

    ul {
        background: #e3ddda;
        display: flex;
        justify-content: space-around;
        list-style: none;

        a {
            text-decoration: none;
            padding: 1em;
            font-size: 1.3em;
        }
    }
`;