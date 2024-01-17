import styled from 'styled-components'

const AddressSetupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    background-color: #ffffff;
    width: 100%;
    height: 100vh;
    padding: 0;
`

const AddressSetupContentWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50vh;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;   
`

const AddressSetupLogoWrapper = styled.div`
    width: 50%; 
    height: 100%; 
`

const AddressSetupLogo = styled.div`
    width: 100px; 
    height: 100px; 
    background-color: #000000; 
    border-radius: 50%; 
`

const AddressSetupLogoTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 10px;
    align-items: center;
`

const AddressSetupLogoTitle = styled.h1`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    text-align: center;
`

const AddressSetupFooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;

    > button {
        width: 100%;
        padding: 20px 0;
        text-align: center;
        border: transparent;
        background-color: #FFFF00;
        color: #000000;
        font-weight: bold;
        font-size: 14px;
        border-radius: 8px;
`

const AddressSetupFooterTitleWrapper = styled.div`
    display: flex;
`;

const AddressSetupFooterTitle = styled.div`
    font-size: 10px;
    color: #000000;
    align-items: center;
    text-align: center;
`

const AddressSetupFooterContentLogoWrapper = styled.div`
    display: flex;
`

const AddressSetupFooterContentLogo = styled.div`
    align-items: flex-start;
`

export {
    AddressSetupContainer,
    AddressSetupContentWrapper,
    AddressSetupLogoWrapper,
    AddressSetupLogo,
    AddressSetupLogoTitleWrapper,
    AddressSetupLogoTitle,
    AddressSetupFooterWrapper,
    AddressSetupFooterTitleWrapper,
    AddressSetupFooterTitle,
    AddressSetupFooterContentLogoWrapper,
    AddressSetupFooterContentLogo,
}