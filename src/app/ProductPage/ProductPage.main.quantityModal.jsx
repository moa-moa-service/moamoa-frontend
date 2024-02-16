import { useState } from "react";
import client from "../../client"
import * as itemS from "./styled/ProductPage.main.selectModalComponent.style"

function QuantityModal({openQuantityModalHandler, id, openCompleteModalHandler}) {

    const [quantityInput, setQuantityInput] = useState('') ;

    const inputHandle = (e) => {
        setQuantityInput(e.target.value) ;
    }

    const joinHandle = async() => {
        const auth = import.meta.env.VITE_AUTH ;
    
        if(!quantityInput || isNaN(quantityInput)) {
            console.log("수량이 입력되지 않았습니다.")
            return ;
        }

        try{
            const response = await client(auth).post(`/posts/${id}/join`, {
                amount : parseInt(quantityInput) ,
            }, {
                headers : {
                    "Content-Type" : "application/json" ,
                }
            }) ;
            openQuantityModalHandler() ;
            openCompleteModalHandler() ;
        } catch (error) {
            console.error("실패" + error) ;
        }
    }

    return(
        <>
            <itemS.SelectModalContainer>
                <itemS.SelectModal onClick={(e) => e.stopPropagation()}>
                    <itemS.Icon>
                        <img src="../../../public/ProductPage/shopping_cart.png" alt="장바구니" />
                    </itemS.Icon>
                    <itemS.InfoTitle>상품 수량을 선택해주세요!</itemS.InfoTitle>
                    <itemS.TextInput placeholder="상품 개수 입력 필드" onChange={inputHandle}></itemS.TextInput>
                    <itemS.BtnContainer>
                        <itemS.CheckBtn onClick={openQuantityModalHandler}>취소</itemS.CheckBtn>
                        <itemS.CheckBtn color="red" onClick={joinHandle}>확인</itemS.CheckBtn>
                    </itemS.BtnContainer>
                </itemS.SelectModal>
            </itemS.SelectModalContainer>
        </>
    )
}

export default QuantityModal