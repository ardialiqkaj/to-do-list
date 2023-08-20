import * as React from "react";
import styled from 'styled-components';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {RiDeleteBinLine} from 'react-icons/ri';
import useStore from "../store";
import DeleteModal from './DeleteModal';
import UpdateModal from './UpdateModal';


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

function ItemAdd() {
  const store = useStore((state) => state);

  const { items, removeItem } = useStore();
  const [selectedItemId, setSelectedItemId] = React.useState(null);

  const openDeleteModal = (itemId) => {
    setSelectedItemId(itemId);
  };

  const closeDeleteModal = () => {
    setSelectedItemId(null);
  };


  return (
    <div>
        <div>
            <ListButton>All</ListButton>
            <ListButton>Completed</ListButton>
            <ListButton>Incompleted</ListButton>
        </div>
        <div>
        {store.items.map((item) => (
        <Task key={item.id}>
          <TaskDesc><AiOutlineCheckCircle size={18}/>
            &nbsp;{item.text}
          </TaskDesc>
          <TaskEdit>Edit</TaskEdit>
          <TaskDel onClick={() => openDeleteModal(item.id)}><RiDeleteBinLine size={18}/></TaskDel>
          {selectedItemId !== null && (
          <DeleteModal
            onClose={closeDeleteModal}
            onDelete={() => {
              removeItem(selectedItemId);
              closeDeleteModal();
            }}
          />
          )}
        </Task>
        ))}
        </div>
    </div>
  );
}

export default ItemAdd;