import styled from "styled-components";

export const InfoContainer = styled.div`
    background-color: #FFFFFF;
    width: 430px;
    height: 390px;
    margin-top: -130px;
    border-top-left-radius : 13px;
    border-top-right-radius: 13px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    box-sizing: border-box;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
`

export const HomeIndicator = styled.hr`
    width: 88px;
    border: 2px solid #CDCDCD;
    margin: 10px auto;
    border-radius: 3px;
`

export const UserInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled.div`
    width: 100%;
    height: 50px;
    margin-top: 15px;
    display: flex;
`

export const UserIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #D9D9D9;
`

export const UserText = styled.div`
    width: 90px;
    height: 50px;
    margin-left: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
`

export const UserNickname = styled.div`
    color: #2B4760;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
`

export const UserAddress = styled.div`
    color: #888888 ;
    font-size: 12px;
    font-weight: 200;
    margin-top: 5px;
`

export const DoneIcon = styled.div`
    width: 60px;
    height: 20px;
    background-color: #F85A5A;
    color: #FFFFFF;
    font-size: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

export const ProductName = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    color: #000000;
`

export const ProductInfoContainer = styled.div`
    width: 100%;
    height: 113px;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

export const ProductInfo = styled.div`
    width: 45%;
    height: 57px;
`

export const ProductInfoTitle = styled.div`
    color: #888888;
    font-weight: 500;
    font-size: 13px;
    margin-bottom: 8px;
`

export const ProductInfoValue = styled.div`
    font-size: 25px;
    ${(props) => 
        props.type === 'Done'
        ? `
            color: #FF424D ;
            font-weight: 600 ;
        ` : `
            color:  #2B4760;
            font-weight: 400;
        `
    }
`

export const Line = styled.hr`
    margin: 10px 0 15px 0;
    border: 0.5px solid rgb(228, 228, 228);
`

export const addressText = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #2B4760;
    margin-bottom: 8px;
`

export const addressDetailText = styled.div`
    font-size: 10px;
    color: #BEBEBE ;
`

export const ProductDetailText = styled.div`
    color: #888888 ;
    font-size: 11px;
    margin-bottom: 100px;
`

