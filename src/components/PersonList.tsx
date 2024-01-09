// basic type : passing array of object to props

type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

export default function PersonList({ names }: PersonListProps) {
  return (
    <>
      <div> List Name : </div>
      <ul>
        {names.map((name) => (
          <li key={name.firstName}>
            {name.firstName} {name.lastName}
          </li>
        ))}
      </ul>
    </>
  );
}
