import * as itemS from '../RecruitmentPage/styled/Recruitment.modal.style'

function ChangeStateModal(props) {
    const id = props.id;

    console.log(id);
    console.log(props.possibility);
    return (
        <>
            <itemS.Background onClick={(e) => {
                e.stopPropagation();
            }}>
                <itemS.ModalWrapper type='state'>
                    <itemS.Wrapper>
                        <itemS.ModalText type='bold'>상태 변경</itemS.ModalText>
                        <itemS.ModalBtns type='recruitment'>
                            <itemS.ModalBtn type='state'>모집 중</itemS.ModalBtn>
                            <itemS.ModalBtn>모집 완료</itemS.ModalBtn>
                        </itemS.ModalBtns>
                        <itemS.ModalBtns type='state'>
                            <itemS.ModalBtn type='cancel'>취소</itemS.ModalBtn>
                            <itemS.ModalBtn>선택 완료</itemS.ModalBtn>
                        </itemS.ModalBtns>
                    </itemS.Wrapper>
                </itemS.ModalWrapper>
            </itemS.Background>
        </>
    )
}

export default ChangeStateModal;