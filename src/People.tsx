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
        <th> Name</th>

        {mappedArray.map((item, index) => (
          <td key={index}>{item.name}</td>
        ))}

        <th> Second Name</th>
        {mappedArray.map((item, index) => (
          <td key={index}>{item.secondName}</td>
        ))}
        <th> Phone Number</th>
        {mappedArray.map((item, index) => (
          <td key={index}>{item.number}</td>
        ))}
      </table>
    </>
  );
}
