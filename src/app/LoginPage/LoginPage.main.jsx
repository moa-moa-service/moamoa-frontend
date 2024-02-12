import React, { useState } from 'react';
import Welcome from './LoginPage.main.Welcome';
import BasicInformation from './LoginPage.main.BasicInformation';
import AddressSetup from './LoginPage.main.AddressSetup';

const LoginPageComponent = () => {
    const [step, setStep] = useState(0);
    // 0 - Welcome
    // 1 - Basic Information
    // 2 - Address Setup

    const handleNextStep = () => {
        setStep(step + 1) // 다음 단계로 이동
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <Welcome onNextStep={handleNextStep} />
            case 1:
                return <BasicInformation onNextStep={handleNextStep} />
            default:
                return <AddressSetup onNextStep={handleNextStep} />
        }
    }

    return (
       renderStep()
    )
};

export default LoginPageComponent;