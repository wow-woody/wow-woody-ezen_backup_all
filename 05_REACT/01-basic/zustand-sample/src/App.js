import './App.css';
import Counter from './component/Counter';
import Toggle from './component/Toggle';
import TextInput from './component/TextInput';
import TodoTest from './component/TodoTest';

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <Toggle />
      <br />
      <br />
      <TextInput />
      <br />
      <br />
      <TodoTest />
    </div>
  );
}

export default App;
