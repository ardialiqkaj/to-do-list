import * as React from "react";
import styled from 'styled-components';
import { useState } from 'react';

const Modal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px) grayscale(30%) brightness(70%);
`;

const ModalContainer = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

const FirstModalRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalRow = styled.div`
  display: flex;
  align-items: center;
`;

const ModalRowDiv = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonCancel = styled.button`
  margin: 3px;
  border: 2px solid #ababab;
  height: 40px;
  flex: 1;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
`;

const ButtonSave = styled.button`
  margin: 3px;
  border: none;
  height: 40px;
  flex: 1;
  border-radius: 8px;
  font-size: 16px;
  background-color: #1bc47d;
  color: white;
`;

const TextInput = styled.input`
  height: 25px;
  width: 100%;
  margin-left: 5px;
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: #6e6e6e;
`;

const CheckForm = styled.form`
  font-size: 12px;
  color: #6e6e6e;
  display: flex;
  align-items: center;
`;

const UpdateModal = () => {
    
    return (
        <Modal>
            <ModalContainer>
                <h3>Edit Task</h3>
                <FirstModalRow>
                    <ModalRowDiv>
                        <Paragraph>ID:</Paragraph>
                        <Paragraph>1</Paragraph>
                    </ModalRowDiv>
                    <ModalRowDiv>
                        <Paragraph>Completed?</Paragraph>
                        <CheckForm>
                            <input type="checkbox" id="Yes" name="Yes" value="Yes"></input>
                            <label>Yes</label>
                        </CheckForm>
                    </ModalRowDiv>
                </FirstModalRow>
                <ModalRow>
                    <Paragraph>Text:</Paragraph>
                    <TextInput type="text" placeholder="Type new text here..."></TextInput>
                </ModalRow>
                <ModalRow>
                    <ButtonCancel>Cancel</ButtonCancel>
                    <ButtonSave>Save</ButtonSave>
                </ModalRow>
            </ModalContainer>
        </Modal>
    );
}

export default UpdateModal;