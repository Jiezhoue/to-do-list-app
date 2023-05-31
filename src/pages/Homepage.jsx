import ListDisplay from "../components/ListDisplay";
import ListForm from "../components/ListForm";

export default function Homepage () {

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <ListForm />
      <ListDisplay />
    </div>
  )
}