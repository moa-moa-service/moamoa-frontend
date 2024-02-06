import styled from 'styled-components'

const RecruitingContainer= styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    min-width: 600px;
`

const RecruitingHeaderContainer= styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
`

const RecruitingHeaderWrapper = styled.div`
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

const RecruitingBackButton = styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
    cursor: pointer;
`

const RecruitingHeaderTitle = styled.div`
    font-weight: 600;
    text-align: center;
    color: #FFF;
    font-family: Inter;
    font-size: 19.569px;
    font-style: normal;
    line-height: 25.382px; /* 129.707% */
    letter-spacing: -0.577px;
`

const RecruitingMapWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #2B4760;
`

const RecruitingBottomWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: transparent;
`;

const RecruitingProfileImage = styled.div`
    background-color: #B7B7B7;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    stroke-width: 5px;
    stroke: #FFF;
    z-index: 1;
`;

const RecruitingBottomSheetWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 580px; 
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 15px 15px 0 0;
    gap: 5px;
`;

const RecruitingProfileImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 33px;
`;


const RecruitingBottomNickNameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 15px 15px 0 0;
    gap: 5px;
    align-items: center;
`
const RecruitingBottomNickNameTitle = styled.div`
    color: #000000;
    text-align: left;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.382px; /* 76.915% */
    letter-spacing: -0.577px;
`
const RecruitingBottomLocationTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    color: #7D7D7D;
    text-align: center;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.382px; /* 126.91% */
    letter-spacing: -0.577px;
`

const RecruitingBottomMainContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 5px;
`
// const RecruitingFixedBottomWrapper = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     width: 100%;
//     padding: 30px 0;
//     background-color: #ffffff;
//     border-radius: 15px 15px 0 0;
//     gap: 5px;
//     border: 1px solid #000000;
// `

// const RecruitingFixedBottomButtonWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     width: 95%;
//     gap: 5px;


//     > button {
//         display: inline-flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         border: none;
//         background: transparent;
//         cursor: pointer;
//     }

//     > div {
//         display: inline-flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: center;
//         color: #000;
//         text-align: center;
//         font-family: Inter;
//         font-size: 11.351px;
//         font-style: normal;
//         font-weight: 600;
//         line-height: 20.305px; /* 178.879% */
//         letter-spacing: -0.461px;
//     }

// `

const RecruitingTabbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    gap: 141px;
    flex-grow: 1;
    width: 100%;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-around;


    &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left : 0;
    width: 100%;
    border: 1px solid #efefef;
    border-radius: 50%;
    border-bottom: 2px solid #efefef;
    z-index: 5;
}
`

const RecruitingTabbar = styled.div`
    color: #888;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.382px; /* 158.637% */
    letter-spacing: -0.577px;
    // width: 193px;
    // height: 7px;
    flex-shrink: 0;
    cursor: pointer;
    border-radius: 15px;

    &.active {
    border-bottom: 2px solid #222222; 
    z-index: 10;
}
`

const RecruitingItemWholeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
    padding: 30px 0;
    background-color: #ffffff;
    border-radius: 15px;
    gap: 5px;
    // border: 1px solid #000000;
    cursor: pointer;
`

const RecruitingItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px 25px;
    background-color: #ffffff;
    border-radius: 15px;
    gap: 22px;
    // border: 1px solid #000000;
    cursor: pointer;
`

const RecruitingItemPhotoWrapper = styled.div`
    display: flex;
    width: 110px;
    height: 110px;
`

const RecruitingItemPhoto = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #D9D9D9;
    border-radius: 15px;
`
const RecruitingItemDefaultThumbnail = styled.div`
    display: flex;
`



const RecruitingItemDetailWrapper = styled.div`
`

const RecruitingItemDetail = styled.div`
`
const RecruitingItemDetailTitle = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.382px; /* 141.011% */
    letter-spacing: -0.577px;
`

const RecruitingItemDetailContent = styled.div`
    color: #888;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.382px; /* 181.3% */
    letter-spacing: -0.577px;
`

const RecruitingItemDetailPrice = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 25.382px; /* 141.011% */
    letter-spacing: -0.577px;
`

const active_content  = styled.div`
    display: block;
`

export {
    RecruitingContainer,
    RecruitingHeaderContainer,
    RecruitingHeaderWrapper,
    RecruitingBackButton,
    RecruitingHeaderTitle,
    RecruitingBottomWrapper,
    RecruitingProfileImageWrapper,
    RecruitingProfileImage,
    RecruitingBottomSheetWrapper,
    RecruitingBottomNickNameWrapper,
    RecruitingBottomNickNameTitle,
    RecruitingBottomLocationTitle,
    RecruitingBottomMainContentWrapper,
    RecruitingMapWrapper,
    RecruitingTabbarWrapper,
    RecruitingTabbar,
    RecruitingItemWholeWrapper,
    RecruitingItemWrapper,
    RecruitingItemPhotoWrapper,
    RecruitingItemPhoto,
    RecruitingItemDefaultThumbnail,
    RecruitingItemDetailWrapper,
    RecruitingItemDetail,
    RecruitingItemDetailTitle,
    RecruitingItemDetailContent,
    RecruitingItemDetailPrice,
    active_content
};