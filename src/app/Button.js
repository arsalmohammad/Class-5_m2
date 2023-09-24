export default function Button(props) {
  return (
    <div>
      <input
        placeholder="Add todo"
        onChange={(event) => props.setText(event.target.value)}
        value={props.text}
      />
      <button onClick={props.onAdd}>Add</button>
    </div>
  );
}
