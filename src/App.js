import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import RegisterForm from './components/RegisterForm';


function App() {

  return (
    <div className="App">
      <RegisterForm/>
      <hr/>
      <hr/>
      <Todo/>
    
    
    </div>
  );
}

export default App;
