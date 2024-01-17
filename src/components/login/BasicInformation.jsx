import React from 'react'
import { BasicInformationPageContainer } from './BasicInformation.styles.js'

const BasicInformation = () => {

    return (
        <div className="background">
          <div className="wrapper">
            <form action="">
              <h1>내정보</h1>
              <div className="search">닉네임</div>
              <div className="input-box">
                <input type="text" className="input" required />
              </div>
              <div className="search">한글, 영어, 숫자로만 구성할 수 있어요</div>
              <div className="search">우리 동네 설정</div>
              <div className="input-box">
                <input
                  type="password"
                  className="input"
                  required
                />
              </div>
              <div className="search">우리 동네를 설정해주세요!</div>
              <button type="submit" className="btn">확인</button>
            </form>
          </div>
        </div>
      );
    }
    

export default BasicInformation