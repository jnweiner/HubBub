import React, { useState } from 'react';
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
  height: 40vh;
  width: 80%;
  bottom: 0;
  right: 25px;
`;

const ModalHeader = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  padding-bottom: 10px;
  border-bottom: 1px solid #f5f5f5;
`;

const CloseArrow = styled.span`
  font-size: 18px;
  cursor: pointer;
`;

const NewTopicModal = ({ toggleModal }) => {
  return (
    <ModalContainer>
      <ModalHeader>
        <span>Start a new topic</span>
        <CloseArrow onClick={() => toggleModal(null)}><i className="fas fa-chevron-down"></i></CloseArrow>
      </ModalHeader>
    </ModalContainer>
  );
};

export default NewTopicModal;

// const title = req.body.title;
// const text = req.body.text;
// const interest_id = req.params.interestId;
// const city_id = req.params.cityId;
// const user_id = req.body.userId;