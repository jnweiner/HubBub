import styled from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #294059;
  color: #f5f5f5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  z-index: 10;
  position: fixed;
  padding: 10px;
  height: 45vh;
  width: 75%;
  bottom: 0;
  left: 65%;
  transform: translate(-60%);
  box-shadow: 0 0 10px gray;
`;

const ModalHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #e1ad01;
`;

const CloseArrow = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
  margin-right: 10px;
`;

const StyledInput = styled.input`
  font-family: 'Krub', sans-serif;
  margin: 10px 0;
  height: 10%;
  width: 100%;
`;

const StyledTextarea = styled.textarea`
  font-family: 'Krub', sans-serif;
  min-height: 30%;
  max-height: 40%;
  min-width: 100%;
  max-width: 100%;
  margin: 10px 0;
`;

const SubmitContainer = styled.span`
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  background-color: #e1ad01;
  border: 1px solid #e1ad01;
  border-radius: 5px;
  padding: 5px;
  font-weight: 600;
  font-size: 15px;
`;

const ModalActivatedOverlay = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(220, 220, 220, .3);
  z-index: 5;
`;

const ModalActivatedFooter = styled.div`
  height: 50vh;
`;

export {
  ModalContainer,
  ModalHeader,
  CloseArrow,
  StyledForm,
  SubmitContainer,
  SubmitButton,
  StyledInput,
  StyledTextarea,
  ModalActivatedOverlay,
  ModalActivatedFooter
};