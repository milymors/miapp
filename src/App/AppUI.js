import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoCreateButton } from '../TodoCreateButton';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { TodoEmpty } from '../TodoEmpty';
import {Modal} from '../Modal';


function AppUI() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);


  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

            <TodoList>
              {error && <TodoError error={error}/> /*Mostramos un mensaje en caso de que ocurra algún error*/}
              {loading && <TodoLoading />/*Mostramos un mensaje de cargando, cuando la aplicación está cargando lo sdatos*/}
              {(!loading && !searchedTodos.length) && <TodoEmpty /> /* Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
              
              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
                
            </TodoList>

                {!!openModal && (
                  <Modal>
                    <TodoForm/>
                  </Modal>
                )}
                
      
      <TodoCreateButton 
      setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };