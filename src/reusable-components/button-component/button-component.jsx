import '../../App';

function Button(props) {
  console.log(props,'props')
  return (
    <div >
      <button className={`btn rounded-pill px-5 fs-5 ${props.color}`} >{props.text}</button>
    </div>
  );
}

export default Button;
