import './App.css';
import Postagem from './components/Postagem';

function App() {
  return (
    <div className="App">
      <Postagem titulo="Bem vindo ao FIAP Blog" conteudo="Este é o conteúdo da postagem" />      
    </div>
  );
}

export default App;
