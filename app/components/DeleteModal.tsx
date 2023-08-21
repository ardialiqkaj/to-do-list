import React from "react";
import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

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
  width: 20%;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
`;

const DeleteIcon = styled.div`
  background-color: #ffc7c7;
  width: 20px;
  color: #ff4747;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
`;

const DeleteBg = styled.div`
  background-color: #ffe8e8;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 50%;
`;

const Paragraph = styled.p`
  font-size: 12px;
  color: #6e6e6e;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
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

const ButtonDel = styled.button`
  margin: 3px;
  border: none;
  height: 40px;
  flex: 1;
  border-radius: 8px;
  font-size: 16px;
  background-color: #ff4747;
  color: white;
`;

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal>
      <ModalContainer>
        <DeleteBg>
          <DeleteIcon>
            <RiDeleteBinLine size={18} />
          </DeleteIcon>
        </DeleteBg>
        <h3>Delete Task</h3>
        <Paragraph>
          Are you sure you want to delete this task? This action can't be
          undone!
        </Paragraph>
        <Buttons>
          <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
          <ButtonDel onClick={onDelete}>Delete</ButtonDel>
        </Buttons>
      </ModalContainer>
    </Modal>
  );
};

export default DeleteModal;
