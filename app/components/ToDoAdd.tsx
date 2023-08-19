import * as React from "react";
import styled from 'styled-components';

const FirstColumn = styled.div`
  display: flex;
  justify-content: center;
`;

const CreateButton = styled.button`
  color: white;
  text-align: center;
  background-color: #1bc47d;
  border: none;
  height: 54px;
  flex: 1;
  border-radius: 5px;
  margin: 8px;
  font-size: 16px;
`;

const Input = styled.input`
  color: #6e6e6e;
  background-color: white;
  border: 2px solid #b4b4b4;
  height: 50px;
  flex: 5;
  border-radius: 5px;
  margin: 8px;
`;

function TodoAdd() {
  return (
    <FirstColumn>
    <Input type="text"></Input>
    <CreateButton>Create</CreateButton>
  </FirstColumn>
  );
}

export default TodoAdd;