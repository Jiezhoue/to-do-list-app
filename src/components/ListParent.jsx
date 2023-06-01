import { useState } from "react"
import ListDisplay from "./ListDisplay"
import ListForm from "./ListForm"

export default function ListParent (props) {

  const {id} = props;

  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
      {editMode ? <ListForm id={id} changeMode={toggleEditMode}/> : <ListDisplay id={id}/>}
      <button onClick={toggleEditMode}>Edit</button>
    </div>
  )
}