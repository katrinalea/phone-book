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
  const mappedArray = props.peopleArray.sort((a, b) =>
    a.secondName.localeCompare(b.secondName)
  );
  return (
    <>
      <table>
        <thead>
          <tr>
            <th> Name</th>
            <th> Second Name</th>
            <th> Phone Number</th>
          </tr>
          {mappedArray.map((item, index) => (
            <tr key={index}>
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
