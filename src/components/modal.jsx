import React, { useState, useRef } from 'react';
import { CloseButton, ModalContainer, ModalStyled1, ModalStyled2, BtnWrapper, ModalContent, ModalButtonContainer } from './styled';
import "../App.css";

function Modal() {
    // 첫 번째 모달 상태 및 두 번째 모달 상태를 관리
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen_second, setModalOpen_second] = useState(false);

    // 모달 배경을 나타내는 ref를 생성
    const modalBackground = useRef();


    // 배경 클릭 이벤트 처리 함수
    const handleBackgroundClick = (event) => {
        console.log("handleBackgroundClick called");
        console.log("Event target:", event.target);
        console.log("Modal Background current:", modalBackground.current);

        // 배경을 클릭하면 두 번째 모달을 닫음
        if (event.target === modalBackground.current) {
            setModalOpen_second(false);
        }
    };

    return (
        <>
            <h1>Modal</h1>
            {/* 모달 열기 버튼들 */}
            <BtnWrapper>
                <ModalStyled1 onClick={() => setModalOpen(true)}>
                    open modal
                </ModalStyled1>
                <ModalStyled2 onClick={() => setModalOpen_second(true)}>
                    open modal2
                </ModalStyled2>
            </BtnWrapper>

            {/* 첫 번째 모달 */}
            {modalOpen && (
                <ModalContainer>
                    <ModalContent>
                        <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
                        <ModalButtonContainer>
                            <button onClick={() => setModalOpen(false)}>
                                닫기
                            </button>
                            <button>
                                확인
                            </button>
                        </ModalButtonContainer>
                    </ModalContent>
                </ModalContainer>
            )}

            {/* 두 번째 모달 */}
            {modalOpen_second && (

                <ModalContainer
                    ref={modalBackground} // 배경 ref 연결
                    onClick={handleBackgroundClick} // 배경 클릭 이벤트 핸들러 연결
                >
                    <ModalContent>
                        <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
                        <ModalButtonContainer>
                            <CloseButton onClick={() => setModalOpen_second(false)}>
                                X
                            </CloseButton>
                        </ModalButtonContainer>
                    </ModalContent>
                </ModalContainer>
            )}
        </>
    );
}

export default Modal;
