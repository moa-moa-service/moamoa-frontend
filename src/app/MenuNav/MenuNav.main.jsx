import * as itemS from './styled/MenuNav.main.style'

function MenuNav() {
    const menuTexts = ['홈', '우리동네',  '모집하기', '채팅', '마이페이지'];

    return (
        <>
            <itemS.MenuNavWrapper>
                <itemS.MenuIconListContainer>
                    {menuTexts.map((text, index) => (
                        <itemS.MenuIconContainer key={index}>
                            <itemS.MenuIconImgWrapper>
                            </itemS.MenuIconImgWrapper>
                            <itemS.MenuIconText>{text}</itemS.MenuIconText>
                        </itemS.MenuIconContainer>
                    ))}
                </itemS.MenuIconListContainer>
            </itemS.MenuNavWrapper>
        </>
    );
}

export default MenuNav