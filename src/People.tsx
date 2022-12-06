import "./book.css";
interface IProps {
  peopleArray: person[];
}
interface person {
  name: string;
  secondName: string;
  number: string;
}

export default function People(props: IProps): JSX.Element {
  // copy the array, bad practice to mutate a prop with sort
  const mappedArray = [...props.peopleArray].sort((a, b) =>
    a.secondName.localeCompare(b.secondName)
  );
  return (
    <>
      <table className = "table">
        <thead>
          <tr>
          <th>Phone Book</th>
          </tr>
          <tr>
            <th>Person ID</th>
            <th> Name</th>
            <th> Second Name</th>
            <th> Phone Number</th>
          </tr>
          {mappedArray.map((item, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.secondName}</td>
              <td>{item.number}</td>
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}
