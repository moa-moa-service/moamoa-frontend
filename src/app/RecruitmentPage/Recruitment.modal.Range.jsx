import * as itemS from './styled/Recruitment.modal.style';
import { useState } from 'react';

function Range(props) {
    const {onSelectPeople} = props;
    const [people, setPeople] = useState(1);

    const handleChange = (event) => {
        setPeople(event.target.value);
        onSelectPeople(event.target.value);
    };

    return (
        <>
            <itemS.Background onClick={(e) => {
                e.stopPropagation();
            }}>
                <itemS.Wrapper>
                    <itemS.ModalText type='bold'>모집 인원</itemS.ModalText>
                </itemS.Wrapper>
                <itemS.RangeWrapper>
                    <itemS.Range
                        type="range"
                        min="1"
                        max="10"
                        value={people}
                        onChange={handleChange}
                    />
                    <itemS.ModalTextWrapper>
                        <itemS.ModalText type='bold'>{people}명</itemS.ModalText>
                    </itemS.ModalTextWrapper>
                </itemS.RangeWrapper>
            </itemS.Background>
        </>
    )
}

export default Range;
