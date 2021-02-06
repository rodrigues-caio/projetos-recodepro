import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const [inputFrutas, setInputFrutas] = useState('');
  const [inputTitulo, setInputTitulo] = useState('');

  // Redux
  const frutas = useSelector((state) => state.frutasReducer.frutas);
  const titulo = useSelector((state) => state.tituloReducer.titulo);
  const dispatch = useDispatch();

  function adicionarFruta(e) {
    e.preventDefault();

    const fruta = {
      nome: inputFrutas,
    };

    dispatch({ type: 'ADICIONAR', value: fruta });
  }

  function alterarTitulo(event) {
    event.preventDefault();

    dispatch({ type: 'ALTERAR', value: inputTitulo });
  }

  return (
    <div>
      <form onSubmit={alterarTitulo} action=''>
        <label>Titulo</label>
        <input
          type='text'
          value={inputTitulo}
          onChange={(e) => setInputTitulo(e.target.value)}
        />
        <button type='submit'>Trocar</button>
      </form>

      {titulo}
      <form onSubmit={adicionarFruta} action=''>
        <input
          type='text'
          placeholder='Digite uma fruta'
          value={inputFrutas}
          onChange={(e) => setInputFrutas(e.target.value)}
        />

        <button type='submit'>Enviar</button>
      </form>

      {frutas.map((fruta, key) => {
        return <li key={key}>{fruta.nome}</li>;
      })}
    </div>
  );
};

export default App;
