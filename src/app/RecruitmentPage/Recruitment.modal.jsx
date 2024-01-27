import * as itemS from './styled/Recruitment.modal.style'

import React, { useState } from 'react';

function RecruitmentModal(props) {
    const initialType = props.data; // 초기값 설정
    const [isType] = useState(initialType);

    return (
        <>
            <itemS.ModalWrapper type={isType}>
                {isType === 'category' && (
                    <>
                        <itemS.Background>
                            <itemS.Wrapper>
                                <itemS.ModalText type='bold'>카테고리</itemS.ModalText>
                            </itemS.Wrapper>
                            <itemS.CheckboxContainer>
                                <itemS.CheckboxWrapper>
                                    <itemS.ModalInput name='생활가전' value='생활가전' />
                                    <itemS.ModalText>생활가전</itemS.ModalText>
                                </itemS.CheckboxWrapper>
                                <itemS.CheckboxWrapper>
                                    <itemS.ModalInput name='가구/인테리어' value='가구/인테리어'></itemS.ModalInput>
                                    <itemS.ModalText>가구/인테리어</itemS.ModalText>
                                </itemS.CheckboxWrapper>
                                <itemS.CheckboxWrapper>
                                    <itemS.ModalInput name='유아동' value='유아동'></itemS.ModalInput>
                                    <itemS.ModalText>유아동</itemS.ModalText>
                                </itemS.CheckboxWrapper>
                                <itemS.CheckboxWrapper>
                                    <itemS.ModalInput name='생활/주방' value='생활/주방'></itemS.ModalInput>
                                    <itemS.ModalText>생활/주방</itemS.ModalText>
                                </itemS.CheckboxWrapper>
                                <itemS.CheckboxWrapper>
                                    <itemS.ModalInput name='스포츠/레저' value='스포츠/레저'></itemS.ModalInput>
                                    <itemS.ModalText>스포츠/레저</itemS.ModalText>
                                </itemS.CheckboxWrapper>
                            </itemS.CheckboxContainer>
                        </itemS.Background>
                    </>
                )}
                {isType === 'date' && (
                    <>
                        <itemS.Background>
                            <itemS.Wrapper>
                                <itemS.ModalText type='bold'>모집 기간</itemS.ModalText>
                            </itemS.Wrapper>
                            <itemS.RangeWrapper>
                                <itemS.Range></itemS.Range>
                            </itemS.RangeWrapper>
                        </itemS.Background>
                    </>
                )}
                {isType === 'people' && (
                    <>
                        <itemS.Background>
                            <itemS.Wrapper>
                                <itemS.ModalText type='bold'>모집 인원</itemS.ModalText>
                            </itemS.Wrapper>
                            <itemS.RangeWrapper>
                                <itemS.Range></itemS.Range>
                            </itemS.RangeWrapper>
                        </itemS.Background>
                    </>
                )}
                <itemS.ModalBtns>
                    <itemS.ModalBtn type='cancel'>취소</itemS.ModalBtn>
                    <itemS.ModalBtn type='submit'>선택 완료</itemS.ModalBtn>
                </itemS.ModalBtns>
            </itemS.ModalWrapper>
        </>
    )
}

export default RecruitmentModal