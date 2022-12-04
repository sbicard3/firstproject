
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Todo from './MyComponents/Todo';
import Footer from './MyComponents/Footer';
function App() {
  return (
<>
<Header title="My Todos List"/>
<Todos/>
<Todo/>
<Footer/>
</>
  );
}

export default App;
