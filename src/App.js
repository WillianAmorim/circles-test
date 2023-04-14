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

  const clearCircles = () => {
    const section = document.querySelector('section');
    section.innerHTML = '';
    setCircles([])
  }

  const createCircles = (event) => {
    const section = document.querySelector('section')
    const novoElemento = document.createElement("div");

    const style = {
      position: "absolute",
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      width: "20px",
      height: "20px",
      backgroundColor: "black",
      borderRadius: "10px",
    };

    Object.assign(novoElemento.style, style);

    section.appendChild(novoElemento);

    setCircles(prevCircles => [...prevCircles, novoElemento]);
  }

  const handleClick = (event) => {
    const nav = document.querySelector('nav')
    const buttonClear = document.querySelector('#button-clear')

    if(event.target === nav) {
      alert('Por favor, clicar no quadro branco !')
    } else if (event.target === buttonClear){
      clearCircles()
    } else {
      createCircles(event)
    }
  }


  return (
    <div>
      <nav>
        <h1>Clique em qualquer lugar para adicionar um novo elemento</h1>
        <div>
          <button id='button-clear' onClick={clearCircles}>Desfazer</button>
        </div>
      </nav>
      <section></section>
    </div>

  );
}

export default App;