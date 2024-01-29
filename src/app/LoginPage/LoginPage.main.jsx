import React from 'react'
// import BasicInformation from './LoginPage.main.BasicInformation'
import Welcome from './LoginPage.main.Welcome'

const LoginPageComponent = () => {
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
       <Welcome />
    )
}

export default LoginPageComponent
