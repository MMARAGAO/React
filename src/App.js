import './App.css';
import Cabecalho from'./components/Cabecalho.js';
import MenuLateral from'./components/MenuLateral.js';
import Menu from'./components/Menu.js';

function App() {
  
  return (
  <> 
<Cabecalho/>
<div className="wrapper">
<MenuLateral/>
<MenuLateral/>
<Menu/>
</div>
  </>
  );
}

export default App;
