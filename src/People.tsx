interface IProps {
  peopleArray: person[];
}
interface person {
  name: string;
  secondName: string;
  number: string;
}

export default function People(props: IProps): JSX.Element {
  return (
    <>
      {props.peopleArray.map((item, index) => {
        return (
          <div key={index}>
            <th> Name</th>
            <td>{item.name}</td>

            <th> Second Name</th>
            <td>{item.secondName}</td>

            <th> Phone Number</th>
            <td>{item.number}</td>
          </div>
        );
      })}
    </>
  );
}
