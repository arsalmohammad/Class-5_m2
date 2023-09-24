export default function List(props) {
  return (
    <ul>
      <li></li>

      {props.list.map((value, index) => (
        <li key={value + index}>
            {value}<button onClick={() => props.onDelete(index)}>Delete</button></li>
      ))}
    </ul>
  );
}
