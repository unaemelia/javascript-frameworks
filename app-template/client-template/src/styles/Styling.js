import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    padding: 1em 7em;
    background: #fffbf9;
    color: #3f3a46;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #3f3a46;
`;

export const StyledNav = styled.nav`
    ul {
        background: #1abc9c;
        display: flex;
        justify-content: space-around;
        list-style: none;
        a {
            text-decoration: none;
            padding: 1em;
            font-size: 1.3em;
            color: #3f3a46;
        }
    }
`;

export const Button = styled.button`
    color: #3f3a46;
    background: #defcf6;
    border: 2px solid #3f3a46;
    font-size: 1em;
    margin: 1em;
    padding: 0.2em 0.8em;
    border-radius: 5px;
    &:hover {
        background-color: #95aba6;
        cursor: pointer;
    }
`;