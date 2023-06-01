import { useEffect, useState } from "react";
import { useListData, useListDispatch } from "../contexts/ListContext"

export default function ListDisplay(props) {

  const {id} = props

  const allListData = useListData();
  const listDispatch = useListDispatch();
  const [localList, setLocalList] = useState({})


  useEffect(()=> {
      const result = allListData.find((list)=>list.id === id)
      setLocalList(result)
  },[id, allListData])

  return (
    <div className="list-display">
      <ul>
          {console.log(localList.dueDate)}
          {console.log(localList.created_date)}
          <h3>{localList.title}</h3>
          <p>{localList.content}</p>
          <lable>Completed</lable>
          <input type='checkbox' disabled="true" checked={localList.isFinish} value={Boolean(localList.isFinish)}/>
          {/* <label>Created Date</label>
          <input type='date' value={new Date(localList.create_date).toISOString().split("T")[0]}></input> */}
          <label>Created Date</label>
          <input type='date' disabled="true" value={`${new Date(localList.create_date).getFullYear()}-${(new Date(localList.create_date).getMonth() + 1).toString().padStart(2, '0')}-${new Date(localList.create_date).getDate().toString().padStart(2, '0')}`}></input>
          <label>Due Date</label>
          <input type="date" disabled="true" value={`${new Date(localList.dueDate).getFullYear()}-${(new Date(localList.dueDate).getMonth() + 1).toString().padStart(2, '0')}-${new Date(localList.dueDate).getDate().toString().padStart(2, '0')}`}></input>
          
          <button onClick={()=>listDispatch({type: 'delete', id: id})}>Delete</button>

      </ul>

    </div>
  )
}