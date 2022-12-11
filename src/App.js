import { BrowserRouter,Routes,Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";
import './Global.css'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<Read/>}></Route>
      <Route exact path="/create" element={<Create/>}></Route>
      <Route exact path="/update" element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
