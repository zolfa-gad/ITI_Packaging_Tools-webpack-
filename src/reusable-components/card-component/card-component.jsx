
import './card-component.css'

function Card(props) {
  return (
    <div className="Card">
      <div
        className={`card shadow rounded-0 card-body ${props.color} text-light d-flex justify-content-center align-items-center`}
      >
        <h2 className=" fs-3 ">{props.text}</h2>
        <div className=" border-3 border-bottom border-light w-25 p-2 "></div>
      </div>
    </div>
  );
}

export default Card;
