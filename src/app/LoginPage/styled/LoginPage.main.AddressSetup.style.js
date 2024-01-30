import styled from 'styled-components'

const AddressSetupContainer= styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-width: 600px;
`

const AddressSetupHeaderContainer= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

const AddressSetupHeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    background-color: #2B4760;
    border-radius: 0 0 15px 15px;
`

const AddressSetupBackButton = styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    padding: 15px 20px;
    color: #ffffff;
    background-color: #FF424D;
    border-radius: 15px;
    cursor: pointer;
`

const AddressSetupHeaderTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
`

const AddressSetupMapWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #efefef;
`

const AddressSetupBottomWrapper= styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    background-color: transparent;
`

const AddressSetupCurrentLocationWrapper = styled.div`
    background-color: #FF424D;
    border-radius: 100%;
    width: 80px;
    height: 80px;
`

const AddressSetupBottomSheetWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 15px 15px 0 0;
    gap: 5px;
`

export {
    AddressSetupContainer,
    AddressSetupHeaderContainer,
    AddressSetupHeaderWrapper,
    AddressSetupBackButton,
    AddressSetupHeaderTitle,
    AddressSetupMapWrapper,
    AddressSetupBottomWrapper,
    AddressSetupCurrentLocationWrapper,
    AddressSetupBottomSheetWrapper
}