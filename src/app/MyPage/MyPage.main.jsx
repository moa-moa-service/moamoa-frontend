import React from 'react'
import NickNamePage from './MyPage.main.NickNamePage'
import NickNamePage2 from './MyPage.main.NickNamePage2'

const MyPageComponent = () => {
    // const [step, setStep] = useState(0)
    // 0 - LoginWelcome
    // 1 - Basic Information

    return (
        /*
        <LoginPageContainer>
            (
                if (step === 0) {
                    <LoginWelcome />
                } else if (step === 1) {
                    <BasicInformation />
                }
            )
        </LoginPageContainer>
        */
       <>
        <NickNamePage />
       </>
    )
}

export default MyPageComponent
