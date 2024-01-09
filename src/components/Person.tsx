// basic type : passing an object to props

type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export default function Person({ name }: PersonProps) {
  return (
    <div>
      <h4>
        Name : {name.firstName} {name.lastName}
      </h4>
    </div>
  );
}
