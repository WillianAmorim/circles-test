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

  const remakeCircles = () => {
    const divs = document.querySelectorAll('.div-circles')
    
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = 'block'
    }
  }

  const undoCircles = () => {
    const divs = document.querySelectorAll('.div-circles')
    
    for (let i = 0; i < divs.length; i++) {
      divs[i].style.display = 'none'
    }
  }

  const createCircles = (event) => {
    const section = document.querySelector('section')
    const novoElemento = document.createElement("div");
    novoElemento.classList.add('div-circles')

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
    const buttonUndo = document.querySelector('#button-undo')
    const buttonRemake = document.querySelector('#button-remake')
    const buttonClear = document.querySelector('#button-clear')
    const h1 = document.querySelector('h1')

    if((event.target === nav) || (event.target === h1)) {
      alert('Por favor, clicar no quadro branco !')

    } else if (event.target === buttonUndo){
      undoCircles()

    } else if (event.target === buttonRemake){
      remakeCircles()

    } else if (event.target === buttonClear) {
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
          <button id='button-undo' onClick={undoCircles}>Desfazer</button>
          <button id='button-remake' onClick={remakeCircles}>Refazer</button>
          <button id='button-clear' onClick={clearCircles}>Limpar</button>
        </div>
      </nav>
      <section></section>
    </div>

  );
}

export default App;