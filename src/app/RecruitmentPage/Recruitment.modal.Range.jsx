import * as itemS from './styled/Recruitment.modal.style';
import { useState } from 'react';

function Range(props) {
    const {onSelectPeople} = props;
    const [people, setPeople] = useState(0);

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
                    <itemS.ModalText type='bold'>상품 수량</itemS.ModalText>
                </itemS.Wrapper>
                <itemS.RangeWrapper>
                    <itemS.Range
                        type="range"
                        min="0"
                        max="10"
                        value={people}
                        onChange={handleChange}
                    />
                    <itemS.ModalTextWrapper>
                        <itemS.ModalText type='bold'>{people}개</itemS.ModalText>
                    </itemS.ModalTextWrapper>
                </itemS.RangeWrapper>
            </itemS.Background>
        </>
    )
}

export default Range;
