import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Chats from "./pages/Chats";

const App = () => {
  return (
    <div>App
      <Route path="/" Component={Homepage}/>
      <Route path="/chats" Component={Chats}/>
        
    </div>
  )
}

export default App