import styled from 'styled-components';

const BasicInformationPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%; 
    height: 100vh;
`;

const Heading = styled.h1`
    font-size: 40px;
    text-align: left;
    margin-bottom: 10px;
`;

const InputBox = styled.div`
    width: 100%;
    height: 50px;
    border: none;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid white;
`;

const Button = styled.button`
    width: 100%;
    height: 50px;
    background-color: gray;
    color: black;
    border-radius: 15px;
    margin: 0px 0px 20px 0px;
`;

const Search = styled.div`
    width: 100%;
    height: 50px;
    color: white;
`;

export {
    BasicInformationPageContainer,
    Heading,
    InputBox,
    Input,
    Button,
    Search
};