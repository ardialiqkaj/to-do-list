import * as React from "react";
import styled from 'styled-components';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';

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

function TodoAdd() {
  return (
    <div>
        <div>
            <ListButton>All</ListButton>
            <ListButton>Completed</ListButton>
            <ListButton>Incompleted</ListButton>
        </div>
        <div>
            <Task>
                <TaskDesc><AiOutlineCheckCircle size={18}/>&nbsp;Sample task</TaskDesc>
                <TaskEdit>Edit</TaskEdit>
                <TaskDel><RiDeleteBinLine size={22}/></TaskDel>
            </Task>
        </div>
    </div>
  );
}

export default TodoAdd;