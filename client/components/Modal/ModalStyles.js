import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 0;
  margin-right: 10px;
`;

const RequiredSpan = styled.span`
  font-weight: 600;
  color: #ea5455;
`;

const StyledInput = styled.input`
  font-family: 'Krub', sans-serif;
  margin: 10px 0;
  height: 10%;
  width: 100%;
  border: ${props => props.showRequired ? '1px solid #ea5455' : null}
`;

const StyledTextarea = styled.textarea`
  font-family: 'Krub', sans-serif;
  min-height: 30%;
  max-height: 40%;
  min-width: 100%;
  max-width: 100%;
  margin: 10px 0;
  border: ${props => props.showRequired ? '1px solid #ea5455' : null}
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
  RequiredSpan,
  StyledForm,
  StyledInput,
  StyledTextarea,
  ModalActivatedOverlay,
  ModalActivatedFooter
};