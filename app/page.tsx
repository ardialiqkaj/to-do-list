'use client';

import React from 'react';
import styled from 'styled-components';
import { create } from 'zustand';
import TodoAdd from './components/ToDoAdd';
import ToDoList from './components/ToDoList';

const Content = styled.div`
  margin: 40px;
  @media screen and (max-width: 680px) {
      margin: 10px;
  }
`;

export default function Home() {
  return (
    <main>
      <Content>
        <TodoAdd/>
        <ToDoList/>
      </Content>
    </main>
  )
}
