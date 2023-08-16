'use client';

import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  margin: 40px;
  @media screen and (max-width: 680px) {
      margin: 10px;
  }
`;

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

const ListButton = styled.button`
  color: #424242;
  background-color: white;
  text-align: center;
  border: 2px solid #b4b4b4;
  height: 50px;
  width: 120px;
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

const Task = styled.div`
  display: flex;
`;

const TaskDesc = styled.p`
  display: flex;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  flex: 10;
  margin: 8px;
  border: 2px solid #b4b4b4;
  height: 50px;
  border-radius: 5px;
  font-size: 16px;
`;

const TaskEdit = styled.button`
  flex: 2;
  margin: 8px;
  border: 2px solid #b4b4b4;
  height: 54px;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
`;

const TaskDel = styled.button`
  flex: 1;
  margin: 8px;
  border: none;
  height: 54px;
  border-radius: 5px;
  font-size: 16px;
  background-color: #ff4747;
  color: white;
`;

export default function Home() {
  return (
    <main>
      
      <Content>
        <FirstColumn>
          <Input type="text"></Input>
          <CreateButton>Create</CreateButton>
        </FirstColumn>
        <div>
          <ListButton>All</ListButton>
          <ListButton>Completed</ListButton>
          <ListButton>Incompleted</ListButton>
        </div>
        <div>
        <Task>
          <TaskDesc>Sample task</TaskDesc>
          <TaskEdit>Edit</TaskEdit>
          <TaskDel>Delete</TaskDel>
        </Task>
        <Task>
          <TaskDesc>Sample task</TaskDesc>
          <TaskEdit>Edit</TaskEdit>
          <TaskDel>Delete</TaskDel>
        </Task>
        </div>
      </Content>
    </main>
  )
}
