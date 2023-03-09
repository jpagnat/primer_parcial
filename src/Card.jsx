import './Card.css'

function Card(props) {

  return (
    <div className='card'>
      <h2>Inscripción exitosa!</h2>
      <p>{props.ficha.name}, ya te encontras inscripto en: {props.ficha.materia}</p>
    </div>
  );
}

export default Card;
