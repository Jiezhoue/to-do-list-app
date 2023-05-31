import { useState } from "react"
import { useListDispatch } from "../contexts/ListContext"

export default function ListForm(props) {

  const [localListData, setLocalListData] = useState({})
  const listDispatch = useListDispatch();

  const changeTitle = (event) => {
    setLocalListData({
      ...localListData,
      title: event.target.value
    })
  }

  const changeContent = (event) => {
    setLocalListData({
      ...localListData,
      content: event.target.value
    })
  }

  return (
    <div className="list-form">
      <form>
        <label>Title: </label>
        <input type="text" value={localListData.title} onChange={changeTitle}></input>
        <label>Content</label>
        <input type="text" value={localListData.content} onChange={changeContent}></input>
      </form>
      {console.log(localListData)}
      <button onClick={()=>listDispatch({type: 'add', data: localListData})}>Submit</button>
    </div>
  )
}