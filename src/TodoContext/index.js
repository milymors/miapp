import React from "react";
import { useLocalStorage } from "./useLocalStorage";

/*const defaultTodos = [
  {text:'Ingles', completed:false},
  {text:'Visión Empresarial', completed:false},
  {text:'Tópicos Selectos de Sistemas Computacionales', completed:false},
  {text:'Metodología de la Investigación', completed:true},
  {text:'Aplicaciones de Inteligencia Artificial', completed:true},
  {text:'Administración de Proyectos de Tecnología', completed:true},
];*/

const TodoContext = React.createContext();

function TodoProvider(props){
    // Desestructuramos los nuevos datos de nuestro custom hook
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

    return (
        <TodoContext.Provider value={{
            //EstadosDeCarga
            loading,
            error,
            //TodoCounter
            totalTodos,
            completedTodos,
            //TodoSearch
            searchValue,
            setSearchValue,
            //TodoList
            searchedTodos,
            //TodoItem
            addTodo,
            completeTodo,
            deleteTodo,
            //Modal
            openModal,
            setOpenModal,
            //TodoCreateButton
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}