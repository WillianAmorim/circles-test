import './App.css';
import { useEffect } from 'react';

function App() {

  //UseEffect executa handleclick cada vez que um clique é feito
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = (event) => {
    
  }


  return (
    <div>
      <nav>
        <h1>Clique em qualquer lugar para adicionar um novo elemento</h1>
      </nav>
      <section></section>
    </div>

  );
}

export default App;