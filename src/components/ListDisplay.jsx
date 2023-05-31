import { useListData, useListDispatch } from "../contexts/ListContext"

export default function ListDisplay(props) {

  const allListData = useListData();
  const listDispatch = useListDispatch();

  function convertDate(date) {
    const d = new Date(date);
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return d.toLocaleString('en-US', options)
  }

  return (
    <div className="list-display">
      <h1>To Do List</h1>
      <ul>
        {allListData.map((list)=><li key={list.id}>
          <h3>{list.title}</h3>
          <p>{list.content}</p>
          <p>{convertDate(list.create_date)}</p>
          <button>Edit</button>
          <button onClick={()=>listDispatch({type: 'delete', id: list.id})}>Delete</button>
        </li>)}
      </ul>

    </div>
  )
}