import { useEffect, useState } from "react"
import { useListData, useListDispatch } from "../contexts/ListContext"

export default function ListForm(props) {

  const {id, changeMode} = props

  const listData = useListData();
  const listDispatch = useListDispatch();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isFinish, setIsFinish] = useState(false);
  const [dueDate, setDueDate] = useState(new Date(Date.now() + (3600 * 1000 * 24)));
  const [createdDate, setCreateDate] = useState(Date.now())

  useEffect(()=> {
    let tempNote = listData.find((note)=> note.id === id);
    if(tempNote){
      setTitle(tempNote.title);
      setContent(tempNote.content);
      setIsFinish(tempNote.isCompleted);
      setDueDate(tempNote.dueDate)
      setCreateDate(tempNote.createdAtDate)
    }

  },[listData, id])


  function saveLocalList () {
    let tempList = {
      id: id || Date.now(),
      title: title,
      content: content,
      isFinish: isFinish,
      dueDate: dueDate,
      create_date: Date.now()
    }

    if(id){
      listDispatch({type: 'update', updatedList: tempList})
      changeMode()
    }else{
      listDispatch({type:'add', newList: tempList})
    }

    setTitle("")
    setContent("")
    setIsFinish(false)
  }

  return (
    <div className="card d-flex flex-column justify-content-center align-items-center bg-secondary">
    <div className="card-body d-flex flex-column gap-2 list-group text-body-primary">
      <form>
          <label className="me-3">Title: </label>
          <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}></input>
          <label className="me-3">Content: </label>
          <input type="text" value={content} onChange={(event)=>setContent(event.target.value)}></input>
          <label>Is completed</label>
          <input type="checkbox" value={Boolean(isFinish)} onChange={()=>{
            
          setIsFinish(!isFinish)
          }}></input>
          <label>Due Date: </label>
          <input type="date" value={new Date(dueDate).toISOString().split("T")[0]} onChange={(event)=>
          {setDueDate(event.target.value)
          }}/>
          {/* <label>Created Date</label>
          <input type></input> */}
        </form>

        <button onClick={saveLocalList}>Submit</button>
    </div>

    </div>
  )
}