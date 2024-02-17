import { useNavigate } from 'react-router-dom';
import * as itemS from './styled/MenuNav.main.style'

import Home from '../../../public/MenuNav/Icon_home.png';
import Search from '../../../public/MenuNav/Icon_search.png';
import Mypage from '../../../public/MenuNav/Icon_mypage.png';
import Recruitment from '../../../public/MenuNav/Icon_plus.png';
import Mytown from '../../../public/MenuNav/Icon_mytown.png';
import C_home from '../../../public/MenuNav/C_Icon_home.png';
import C_mypage from '../../../public/MenuNav/C_Icon_mypage.png';
import { useEffect, useState } from 'react';

function MenuNav() {
    const [currentCategory, setCurrentCategory] = useState('/');

    const currentURL = window.location.href;
    const pathParts = currentURL.split("/");
    const category = '/' + pathParts[pathParts.length - 1];

    useEffect(()=>{
        setCurrentCategory(category);
    }, [category])

    const navigate = useNavigate();

    const handleCategoryClick = (path) => {
        navigate(path);
    };

    const menuTexts = ['홈', '검색하기', '모집하기', '우리동네', '마이페이지'];
    const menuPaths = ['/', '/search', '/recruitment', '/mytown', '/mypage'];
    const menuIcon = [Home, Search, Recruitment, Mytown, Mypage]
    const iconSources = {
        '/': C_home,
        '/mypage': C_mypage
    };

    return (
        <>
            <itemS.MenuNavWrapper>
                <itemS.MenuIconListContainer>
                    {menuTexts.map((text, index) => (
                        <itemS.MenuIconContainer key={index} onClick={() => handleCategoryClick(menuPaths[index])}>
                            {
                                currentCategory === menuPaths[index] ? (
                                    <>
                                        <itemS.MenuIconImgWrapper type='current'>
                                            <itemS.MenuIconImg src={iconSources[currentCategory]} />
                                        </itemS.MenuIconImgWrapper>
                                        <itemS.MenuIconText type='current'>{text}</itemS.MenuIconText>
                                    </>
                                ) : (
                                    <>
                                        <itemS.MenuIconImgWrapper>
                                            <itemS.MenuIconImg src={menuIcon[index]} />
                                        </itemS.MenuIconImgWrapper>
                                        <itemS.MenuIconText>{text}</itemS.MenuIconText>
                                    </>
                                )
                            }
                        </itemS.MenuIconContainer>
                    ))}
                </itemS.MenuIconListContainer>
            </itemS.MenuNavWrapper>
        </>
    );
}

export default MenuNav;
