import * as React from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsPlusCircle } from "react-icons/bs";
import useStore, { Item } from "../store";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const ListButton = styled.button`
  color: #424242;
  background-color: ${(props) => (props.active ? "#ededed" : "white")};
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
  background-color: ${(props) => (props.done ? "#e3faf0" : "white")};
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

const DoneInputBox = styled.div`
  display: flex;
  border: 2px solid #b4b4b4;
  border-radius: 5px;
  height: 50px;
  margin: 8px;
  padding-left: 2px;
  padding-right: 2px;
`;

const EditingInput = styled.input`
  border: 2px solid #b4b4b4;
  height: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

const NoItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
`;

const NoItemP = styled.p`
  color: #8f8f8f;
`;

function ItemAdd() {
  const items = useStore((state) => state.items);
  const toggleItem = useStore((state) => state.toggleItem);
  const updateItem = useStore((state) => state.updateItem);
  const removeItem = useStore((state) => state.removeItem);

  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [editedText, setEditedText] = useState<string>("");

  const startEditing = (id: number, text: string) => {
    setEditingItemId(id);
    setEditedText(text);
  };

  const cancelEditing = () => {
    setEditingItemId(null);
    setEditedText("");
  };

  const saveEditedItem = (id: number) => {
    if (editedText.trim() !== "") {
      updateItem(id, editedText);
    }
    setEditingItemId(null);
    setEditedText("");
  };

  // State for managing the modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState<number | null>(null);

  // State for filtering
  const [filter, setFilter] = useState<"All" | "Completed" | "Not Completed">(
    "All"
  );
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Completed" | "Not Completed"
  >("All");

  const filteredItems = items.filter((item) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Completed") {
      return item.done;
    } else {
      return !item.done;
    }
  });

  const openDeleteModal = (id: number) => {
    setDeletingItemId(id);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeletingItemId(null);
    setIsDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    if (deletingItemId !== null) {
      removeItem(deletingItemId);
      closeDeleteModal();
    }
  };

  return (
    <div>
      <div>
        <ListButton
          active={activeFilter === "All"}
          onClick={() => {
            setFilter("All");
            setActiveFilter("All");
          }}
        >
          All
        </ListButton>
        <ListButton
          active={activeFilter === "Completed"}
          onClick={() => {
            setFilter("Completed");
            setActiveFilter("Completed");
          }}
        >
          Completed
        </ListButton>
        <ListButton
          active={activeFilter === "Not Completed"}
          onClick={() => {
            setFilter("Not Completed");
            setActiveFilter("Not Completed");
          }}
        >
          Incompleted
        </ListButton>
      </div>
      <div>
        {filteredItems.length === 0 ? (
          <NoItemDiv>
            <p>You don't have any tasks</p>
            <BsPlusCircle size={80} style={{ color: "#8f8f8f" }}/>
            <NoItemP>Create Task</NoItemP>
          </NoItemDiv>
        ) : (
          filteredItems.map((item) => (
            <Task key={item.id}>
              {editingItemId === item.id ? (
                <>
                  <TaskDesc done={item.done}>
                    <AiOutlineCheckCircle size={18} style={{ color: item.done ? "green" : "black" }}/>
                    <EditingInput
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                    />
                  </TaskDesc>
                  <DoneInputBox>
                    <p>Done</p>
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => toggleItem(item.id)}
                    />
                  </DoneInputBox>
                  <TaskEdit onClick={() => saveEditedItem(item.id)}>
                    Edit
                  </TaskEdit>
                  <TaskDel onClick={cancelEditing}>Cancel</TaskDel>
                </>
              ) : (
                <>
                  <TaskDesc done={item.done}>
                    <AiOutlineCheckCircle size={18} style={{ color: item.done ? "green" : "black" }}/>
                    &nbsp;{item.text}
                  </TaskDesc>
                  <TaskEdit onClick={() => startEditing(item.id, item.text)}>
                    Edit
                  </TaskEdit>
                  <TaskDel onClick={() => openDeleteModal(item.id)}>
                    <RiDeleteBinLine size={18} />
                  </TaskDel>
                  <DeleteModal
                    isOpen={isDeleteModalOpen}
                    onClose={closeDeleteModal}
                    onDelete={confirmDelete}
                  />
                </>
              )}
            </Task>
          ))
        )}
      </div>
    </div>
  );
}

export default ItemAdd;
