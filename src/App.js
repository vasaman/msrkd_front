import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import AddStudentForm from './components/studentform.component';
import Leaderboard from './components/leaderboard.component';


function App() {
  return (
    <div className="App">
     <h1> 
       <span>
         Students Portal
       </span>
     </h1>
     <Link to={"/leaderboard"}>
        Leaderboard
     </Link>
      <Link to={"/addstudent"}>
        Add New Student
      </Link>

     <div className="container mt-3">
        <Switch>
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/addstudent" component={AddStudentForm} />
        </Switch>
     </div>
    </div>

  );
}

export default App;
