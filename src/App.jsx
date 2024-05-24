import { Route, Routes } from "react-router-dom";
import Todo from "./components/todo/Todo";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/todo" element={<Todo />}/>
      </Routes>

    </div>
  );
};

export default App;
