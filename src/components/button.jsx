import React from 'react';
import { SlArrowRight, SlBell } from "react-icons/sl";
import { ButtonActive,ButtonContainer1,ButtonContainer2,ButtonMediumContainer1,ButtonSmallContainer1,ButtonMediumContainer2,ButtonSmallContainer2 } from './styled';
function Button() {
    const handleButtonClick = () => {
        const userInput = window.prompt('어렵나요?');
        console.log(userInput);
    };
    return (
        <div>
            <h1>Button</h1>
            <div>
                {/* 버튼 클릭시 alert창 뜸 */}
                <ButtonContainer1 onClick={() => alert('버튼을 만들어보세요')}>Large Primary Button<SlArrowRight /></ButtonContainer1>
                <ButtonMediumContainer1>Meidum</ButtonMediumContainer1>
                <ButtonSmallContainer1>Small</ButtonSmallContainer1>
            </div>
            <div>
                {/* 버튼 클릭시 handleButtonClick호출 */}
                <ButtonContainer2 onClick={handleButtonClick}>Large Negative Button<SlBell /></ButtonContainer2>
                <ButtonMediumContainer2>Meidum</ButtonMediumContainer2>
                <ButtonSmallContainer2>Small</ButtonSmallContainer2>
            </div>
        </div>

    )
}

export default Button