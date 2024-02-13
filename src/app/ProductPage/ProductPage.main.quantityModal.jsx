import { useState } from "react";
import client from "../../client"
import * as itemS from "./styled/ProductPage.main.selectModalComponent.style"

function QuantityModal({openQuantityModalHandler, id, openCompleteModalHandler}) {

    const joinHandle = async() => {
        const auth = import.meta.env.VITE_AUTH ;
    
        try{
            // const response = await client(auth).post(`/posts/${id}/join`) ;
            openQuantityModalHandler() ;
            openCompleteModalHandler() ;
            // console.log("성공" + response) ;
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
                    <itemS.TextInput placeholder="상품 개수 입력 필드"></itemS.TextInput>
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