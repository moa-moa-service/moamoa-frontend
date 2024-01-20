import React from 'react'
import AddressSetup from './LoginPage.main.AddressSetup'

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
       <AddressSetup />
    )
}

export default LoginPageComponent
