import * as itemS from './styled/Recruitment.modal.style';
import Category from './Recruitment.modal.Category';
import Range from './Recruitment.modal.Range';
import Period from './Recruitment.modal.Period';
// import Period from '../SearchPage/SearchPage.search.filter.period'
import React, { useState } from 'react';

function RecruitmentModal(props) {
    const {onCategory} = props;
    const {onPeople} = props;
    const {onPeriod} = props;
    const {onDate} = props;
    
    const [isType] = useState(props.data);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedPeople, setSelectedPeople] = useState();
    const [selectedPeriod, setSelectedPeriod] = useState();
    const [selectedDate, setSelectedDate] = useState();

    const handleSelected = (type, selectedValue) => {
        if (type === 'category') {
            setSelectedCategory(selectedValue);
        } else if (type === 'people') {
            setSelectedPeople(selectedValue);
        } else if (type === 'date') {
            setSelectedPeriod(selectedValue.daysDifference);

            // 날짜 문자열 생성
            const dateString = selectedValue.selectedDate;

            // Date 객체로 변환
            const selectedDate = new Date(dateString);
            const offset = new Date().getTimezoneOffset() * 60000;

            const date = new Date(selectedDate - offset);
            
            // 원하는 형식으로 날짜를 문자열로 변환
            const formattedDate = date.toISOString().slice(0, 10) + "T00:00:00.000Z";

            setSelectedDate(formattedDate); 

        }
    };

    const submitBtn = () => {
        if (selectedCategory) {
            onCategory(selectedCategory);
        }
        if (selectedPeople) {
            onPeople(selectedPeople);
        }
        if (selectedPeriod && selectedDate) {
            onPeriod(selectedPeriod);
            onDate(selectedDate);
        }
    }

    return (
        <>
            <itemS.ModalWrapper type={isType}>
                {isType === 'category' && (
                    <>
                        <Category onSelectCategory={(value) => handleSelected(isType, value)} />
                    </>
                )}
                {isType === 'date' && (
                    <>
                        < Period onSelectPeriod={(value) => handleSelected(isType, value)} />
                    </>
                )}
                {isType === 'people' && (
                    <>
                        <Range onSelectPeople={(value) => handleSelected(isType, value)} />
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
