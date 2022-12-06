import { useState } from "react";

interface person {
  name: string;
  secondName: string;
  number: string;
}

interface Iprops {
  handlePerson: (person: person[]) => void;
}

export default function Inputs(props: Iprops): JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [peopleArray, setPeopleArray] = useState<person[]>([]);

  const personObj = Object();

  const handleSubmit = () => {
    personObj.name = firstName;
    personObj.secondName = secondName;
    personObj.number = phoneNumber;
    setPeopleArray([...peopleArray, personObj]);
    console.log(peopleArray);
    props.handlePerson(peopleArray);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p> Please fill out the following input sections</p>
        <p> First name:</p>
        <input
          id="name"
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br></br>
        <p> Second name:</p>
        <input
          id="name"
          type="text"
          placeholder="Second Name"
          onChange={(e) => setSecondName(e.target.value)}
        />
        <br />
        <p> Phone Number:</p>
        <input
          id="name"
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          {" "}
          submit{" "}
        </button>
      </form>

      <p> {firstName}</p>
    </>
  );
}
