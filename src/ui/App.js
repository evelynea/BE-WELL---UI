import "./App.css";
import { Route, Routes } from "react-router-dom";
import '../ui/landing/landing'
import Landing from "../ui/landing/landing";
import Idea from "./components/idea/idea";
import News from "./news/news";

function App() {
  return (

   <Routes>
    <Route path="/" element={ <Landing/> }/>
    <Route path="/idea" element={ <Idea/> }/>
    <Route path ="/news" element = {<News/>}/>
   </Routes>




  );
}

export default App;
