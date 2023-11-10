export default function Card({...props}) {
  return (
    <div className="card">
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="https://unsplash.com/photos/a-close-up-of-a-cat-with-its-tongue-out-lZBp6bjzPfA" className="btn btn-primary" target="_blank">Go somewhere</a>
      </div>
    </div>
  );
}
