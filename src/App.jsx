import { useState } from "react";
import Card from './Card';
import Error from './Error';
import './App.css';


function App() {
  const [nombre, setNombre] = useState('');
  const [materia, setMateria] = useState('');
  const [fichaAlumno, setFichaAlumno] = useState({
    name: '',
    materia: ''
  });
  const [inscripcion, setInscripcion] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeNombre = (e) => {
    const inputValue = e.target.value.trimStart();
    setNombre(inputValue);
  };

  const handleChangeMateria = (e) => {
    const inputValue = e.target.value.trimStart();
    setMateria(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (nombre.length > 3 && materia.length > 6) {
      //Si pasa las validaciones, cambio los estados del mensaje a mostrar:
      setInscripcion(true);
      setError(false);

      //Genero un objeto con los datos del alumno:
      setFichaAlumno({name: nombre, materia: materia});

      //Reseteo los inputs:
      setNombre('');
      setMateria('');
    } else {
      setError(true);
      setInscripcion(false);
    }
  }

  return (
    <>
    <div className="App">
      <h1>Registrate a tu materia</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Nombre:</label>
        <input className="inputName" type="text" value={nombre} onChange={handleChangeNombre}/>
        </div>
        <div>
        <label>Materia:</label>
        <input type="text" value={materia} onChange={handleChangeMateria}/>
        </div>
        <button>ENVIAR</button>
      </form>
    </div>

    {
      inscripcion && <Card ficha={fichaAlumno}/>
    }
    {
      error && <Error/>
    }
    </>
  );
}

export default App;
