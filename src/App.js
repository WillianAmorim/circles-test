import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [circles, setCircles] = useState([]);

  //UseEffect executa handleclick cada vez que um clique é feito
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const createCircles = (event) => {
    const section = document.querySelector('section')
    const novoElemento = document.createElement("div");
    novoElemento.style.position = "absolute";
    
    novoElemento.style.left = event.clientX + "px";
    novoElemento.style.top = event.clientY + "px";
    novoElemento.style.width = '50px'
    novoElemento.style.height = '50px'
    novoElemento.style.backgroundColor = 'black'
    novoElemento.style.borderRadius = '25px'
    section.appendChild(novoElemento);

    setCircles(prevCircles => [...prevCircles, novoElemento]);
  }

  const handleClick = (event) => {
    createCircles(event)
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