import styled from 'styled-components'

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    background-color: #ffffff;
    width: 100%;
    height: 100vh;
    padding: 0;
`

const WelcomeContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 27px;
`

const WelcomeLogoWrapper = styled.div`
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: #000000;
`

const WelcomeLogoTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #2b4760;
    font-weight: 600;

    strong {
        font-size: 32px;
        color: #ff424d;
    }
`

const WelcomeFooterWrapper = styled.div`
    position: absolute;
    bottom: 50px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const WelcomeFooterTitleWrapper = styled.div`
    text-align: center;
    margin-bottom: 6px;
`

const WelcomeFooterTitle = styled.div`
    color: #939393;
    font-size: 15px;
    font-weight: 100;
`
const WelcomeFooterContentWrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WelcomeFooterContentLogoWrapper = styled.button`
padding: 0;
margin: 0;
background-color: transparent;
line-height: 0;
border: none;

`

const WelcomeFooterContentLogo = styled.img`
    width: 207px;
`

export {
    WelcomeContainer,
    WelcomeContentWrapper,
    WelcomeLogoWrapper,
    WelcomeLogoTitle,
    WelcomeFooterWrapper,
    WelcomeFooterTitleWrapper,
    WelcomeFooterTitle,
    WelcomeFooterContentWrapper,
    WelcomeFooterContentLogoWrapper,
    WelcomeFooterContentLogo
}