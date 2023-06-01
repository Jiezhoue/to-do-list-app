import ListDisplay from "../components/ListDisplay";
import ListForm from "../components/ListForm";
import ListParent from "../components/ListParent";
import { useListData } from "../contexts/ListContext";

export default function Homepage () {

  const listData = useListData();

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <ListForm />
      <h1>Todo List</h1>

      {listData.map((list)=><div key={list.id}>
        <ListParent id={list.id} />
      </div>)}
    </div>
  )
}