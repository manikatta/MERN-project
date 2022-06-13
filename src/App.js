import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import Home from "./components/home";
import Navbar from "./components/navbar";
import Register from "./components/Register";
import Edit from "./components/edit";
import Details from "./components/details";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     
     <Router>
        <Switch>
         

         <Route exact path='/'>
           <Home/>
         </Route>

         <Route exact path='/register'>
           <Register/>
         </Route>

         <Route exact path='/edit/:id'>
           <Edit/>
         </Route>

         <Route exact path='/view/:id'>
           <Details/>
         </Route>
          
        </Switch>

     </Router>
    </div>
  );
}

export default App;
