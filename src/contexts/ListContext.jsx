import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

const initialListData = [
  { id: 1, 
    title: "Create a to do list app", 
    content: "Install react app first....",
    isFinish: true,
    dueDate: new Date().setDate(new Date().getDate() + 1),
    create_date: Date.now()
  }
]

const listReducer = (previousState, instructions) => {
  let stateEditable = [...previousState];
  switch(instructions.type) {
    case 'setup':
      stateEditable = instructions.localStorage;
      return stateEditable
    case 'add':
      return [...stateEditable, instructions.newList]
    case 'update':
      console.log('update');
      let index = stateEditable.findIndex((list)=>list.id === instructions.updatedList.id)
      stateEditable[index]= instructions.updatedList
      return stateEditable;
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

  const [persistentList, setPersistentList] = useLocalStorage('lists', listData)


  useEffect(()=> {
    listDispatch({type: 'setup', localStorage: persistentList})
    // eslint-disable-next-line
  },[])

  useEffect(() => {
    console.log("save to local storage")
    setPersistentList(listData)
    // eslint-disable-next-line
  },[listData])

  return (
    <ListDataContext.Provider value={listData}>
      <ListDispatchContext.Provider value={listDispatch}>
        {props.children}
      </ListDispatchContext.Provider>
    </ListDataContext.Provider>
  )
}