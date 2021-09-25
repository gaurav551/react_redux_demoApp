import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import RegisterForm from './components/RegisterForm';
import FormWithValidation from './components/FormWithValidation';


function App() {

  return (
    <div className="App">
      <RegisterForm/>
      <hr/>
      <FormWithValidation/>
      <hr/>
      <Todo/>
    
    
    </div>
  );
}

export default App;
