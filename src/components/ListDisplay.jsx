
import "./ListDisplay.css"
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
    <div className="card d-flex flex-column justify-content-center align-items-center bg-secondary">
      <ul className="card-body d-flex flex-column gap-2 list-group">
          {console.log(localList.dueDate)}
          {console.log(localList.created_date)}
          <li className="list-group-item">
          <h3 className="card-title ">{localList.title}</h3>
          <p className="card-text">{localList.content}</p>
          </li>

          <li className="list-group-item">
          <lable className="form-check-label me-2">Completed</lable>
          <input class="form-check-input" type='checkbox' disabled="true" checked={localList.isFinish} value={Boolean(localList.isFinish)}/>
          </li>
         
          <li className="list-group-item">
            <label className="me-3">Created Date</label>
            <input type='date' disabled="true" value={`${new Date(localList.create_date).getFullYear()}-${(new Date(localList.create_date).getMonth() + 1).toString().padStart(2, '0')}-${new Date(localList.create_date).getDate().toString().padStart(2, '0')}`}></input>
          </li>
          <li className="list-group-item">
            <label className="me-3">Due Date</label>
            <input type="date" disabled="true" value={`${new Date(localList.dueDate).getFullYear()}-${(new Date(localList.dueDate).getMonth() + 1).toString().padStart(2, '0')}-${new Date(localList.dueDate).getDate().toString().padStart(2, '0')}`}></input>
          </li>
          <button className="btn btn-danger" onClick={()=>listDispatch({type: 'delete', id: id})}>Delete</button>

      </ul>

    </div>
  )
}