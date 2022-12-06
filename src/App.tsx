import Inputs from "./inputs";
import { useState } from "react";
import People from "./People";

interface person {
  name: string;
  secondName: string;
  number: string;
}
function App(): JSX.Element {
  const [peopleArray, setPeopleArray] = useState<person[]>([]);

  function handleInfo(array: person[]) {
    setPeopleArray(array);
  }

  return (
    <>
      <Inputs handlePerson={handleInfo} />
      <People peopleArray={peopleArray} />
    </>
  );
}

export default App;
