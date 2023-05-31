import { createContext, useContext, useReducer } from "react";

const initialListData = [
  { id: 1, 
    title: "Create a to do list app", 
    content: "Install react app first....",
    isFinish: false,
    create_date: Date.now()
  }
]

const listReducer = (previousState, instructions) => {
  let stateEditable = [...previousState];
  switch(instructions.type) {
    case 'add':
      const newList = {};
      newList.id = previousState.length + 1
      newList.title = instructions.data.title;
      newList.content = instructions.data.content
      newList.isFinish = false;
      newList.create_date = Date.now();
      return [...stateEditable, newList]
    case 'update':
      console.log('update');
      break;
    case 'delete':
      return stateEditable.filter((list)=>list.id !== instructions.id)
    default:
      return previousState;
  }
}

export const ListDataContext = createContext(null);
export const ListDispatchContext = createContext(null);

export function useListData() {
  return useContext(ListDataContext)
}

export function useListDispatch() {
  return useContext(ListDispatchContext)
}

export default function ListProvider(props) {
  const [listData, listDispatch] = useReducer(listReducer, initialListData)

  return (
    <ListDataContext.Provider value={listData}>
      <ListDispatchContext.Provider value={listDispatch}>
        {props.children}
      </ListDispatchContext.Provider>
    </ListDataContext.Provider>
  )
}