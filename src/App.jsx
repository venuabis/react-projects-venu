
import { Msg } from "./Msg";
import "./styles.css";
import { UserList } from "./UserList";

// Component = Logic + UI
export default function App() {
  // Logic Starts

  // Logic End
  return (
    <div className="App">
      {/* <MsgList /> */}
      <UserList />
    </div>
  );
}

function MsgList() {
  const names = ["Abhishek", "Murkesh", "Veera", "Vicky", "Latha"];

  // Array of Strings -> Array of JSX (Transform)
  return (
    <div>
      {names.map((nm) => (
        <Msg name={nm} />
      ))}
    </div>
  );
}


