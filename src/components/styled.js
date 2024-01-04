import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  
`;
export const ModalStyled1 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: blue;
  height: 50px;
  width: 200px;
  border: 3px solid yellow;
  font-weight: 600;
  &:active {
      opacity: 0.8;
  }
`;

export const ModalStyled2 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: blue;
  height: 50px;
  width: 200px;
  border: 3px solid red;
  font-weight: 600;
  &:active {
      opacity: 0.8;
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: #ffffff;
  width: 500px;
  height: 300px;
  padding: 15px;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: flex-end;
  align-items: flex-end; 
`;

export const ButtonStyleModal2 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: blue;
  height: 50px;
  width: 200px;
  border: 3px solid yellow;
  font-weight: 600;
`;

export const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  position: relative;
  overflow: hidden;
  margin-top: 50px;
`;

export const Child = styled.div`
  overflow: visible;
`;

export const ButtonContainer1 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: rgb(0, 0, 0);
  height: 50px;
  width: 200px;
  border: 3px solid rgb(85, 239, 196);
  background-color: rgb(255, 255, 255);
  font-weight: 600;

`;

export const ButtonContainer2 = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: pink;
  height: 50px;
  width: 200px;
  border: 3px solid rgb(250, 177, 160);
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  
`;

export const ButtonMediumContainer1 = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 45px;
    width: 130px;
    &:active {
      opacity: 0.8;
  }
`;
export const ButtonSmallContainer1 = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    &:active {
      opacity: 0.8;
  }
`;

export const ButtonMediumContainer2 = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(0, 0, 0);
    height: 45px;
    width: 130px;
    &:hover {
    background-color: #c0392b;
  }
`;
export const ButtonSmallContainer2 = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
    &:hover {
    background-color: #c0392b;
  }
`;

export const ButtonActive = styled.div`
  &:active {
      opacity: 0.8;
  }
`;
export const CloseButton = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 50%;
  font-size: 16px;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: #c0392b;
  }
`;