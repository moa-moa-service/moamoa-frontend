import * as itemS from './styled/Recruitment.modal.style';
import Category from './Recruitment.modal.Category';
import Range from './Recruitment.modal.Range';
import Period from '.././SearchPage/SearchPage.search.filter.period';
import React, { useState } from 'react';

function RecruitmentModal(props) {
    const {onCategory} = props;
    const {onPeople} = props;
    const initialType = props.data; // 초기값 설정
    const [isType] = useState(initialType);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedPeople, setSelectedPeople] = useState();

    const handleSelected = (type, selectedValue) => {
        if (type === 'category') {
            setSelectedCategory(selectedValue);
        } else if (type === 'people') {
            setSelectedPeople(selectedValue);
        }
    };

    const submitBtn = () => {
        if (selectedCategory) {
            onCategory(selectedCategory);
        }
        if (selectedPeople) {
            onPeople(selectedPeople);
        }
    }

    return (
        <>
            <itemS.ModalWrapper type={isType}>
                {isType === 'category' && (
                    <>
                        <Category onSelectCategory={(value) => handleSelected(isType, value)}/>
                    </>
                )}
                {isType === 'date' && (
                    <>
                        < Period />
                    </>
                )}
                {isType === 'people' && (
                    <>
                        <Range onSelectPeople={(value) => handleSelected(isType, value)}/>
                    </>
                )}
                <itemS.ModalBtns>
                    <itemS.ModalBtn type='cancel'>취소</itemS.ModalBtn>
                    <itemS.ModalBtn type='submit' onClick={submitBtn}>선택 완료</itemS.ModalBtn>
                </itemS.ModalBtns>
            </itemS.ModalWrapper>
        </>
    )
}

export default RecruitmentModal;
