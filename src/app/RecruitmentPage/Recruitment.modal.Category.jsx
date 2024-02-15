import * as itemS from './styled/Recruitment.modal.style';
import { useState } from 'react';

const categories = [
    { id: 1, name: '생활가전' },
    { id: 2, name: '생활/주방' },
    { id: 3, name: '디지털기기' },
    { id: 4, name: '가구/인테리어' },
    { id: 5, name: '의류' },
    { id: 6, name: '유아동' },
    { id: 7, name: '식품' },
    { id: 8, name: '뷰티/미용' },
    { id: 9, name: '반려동물용품' },
    { id: 10, name: '도서' },
    { id: 11, name: '문구' },
    { id: 12, name: '식물' },
    { id: 13, name: '티켓' },
    { id: 14, name: '게임' },
    { id: 15, name: '음반' }
];

function Category(props) {
    const {onSelectCategory} = props;
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        onSelectCategory(value);
    };

    return (
        <>
            <itemS.Background onClick={(e) => {
                e.stopPropagation();
            }}>
                <itemS.Wrapper>
                    <itemS.ModalText type='bold'>카테고리</itemS.ModalText>
                </itemS.Wrapper>
                <itemS.CheckboxContainer>
                    {categories.map(category => (
                        <itemS.CheckboxWrapper key={category.id}>
                            <itemS.ModalInput 
                                type="radio" 
                                name="category" 
                                value={category.id} 
                                checked={selectedOption === category} 
                                onChange={() => handleOptionChange(category)} 
                            />
                            <itemS.ModalText>{category.name}</itemS.ModalText>
                        </itemS.CheckboxWrapper>
                    ))}
                </itemS.CheckboxContainer>
            </itemS.Background>
        </>
    );
}

export default Category;
