import { useNavigate } from 'react-router-dom';
import * as itemS from './styled/MenuNav.main.style'

function MenuNav() {
    const navigate = useNavigate();

    const handleCategoryClick = (path) => {
        navigate(path);
    };

    const menuTexts = ['홈', '검색하기',  '모집하기', '우리동네', '마이페이지'];
    const menuPaths = ['/', '/search', '/recruitment', '/mytown', '/mypage'];

    return (
        <>
            <itemS.MenuNavWrapper>
                <itemS.MenuIconListContainer>
                    {menuTexts.map((text, index) => (
                        <itemS.MenuIconContainer key={index} onClick={() => handleCategoryClick(menuPaths[index])}>
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

export default MenuNav;
