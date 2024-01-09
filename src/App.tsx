import Button from "./components/Button";
import Container from "./components/Container";
import Greetings from "./components/Greetings";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

export default function App() {
  const person = {
    firstName: "Dimas Gilang",
    lastName: "Dwi Aji",
  };

  const nameList = [
    {
      firstName: "Dimas",
      lastName: "Gilang",
    },
    {
      firstName: "Sandhika",
      lastName: "Galih",
    },
    {
      firstName: "David",
      lastName: "Ramadhan",
    },
  ];
  return (
    <>
      <Greetings name="Dimas" massageCount={3} isLoged={true} />
      <Person name={person} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo</Heading>
      </Oscar>
      <Greetings name="Gilang" isLoged={true} />
      <Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
        id={1}
      />
      <Input handleChange={(event) => console.log(event)} />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          marginTop: "10px",
        }}
      />
    </>
  );
}
