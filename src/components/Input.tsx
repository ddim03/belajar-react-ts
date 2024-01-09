// passing change event to props
type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ handleChange }: InputProps) {
  // define function
  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(event);
  //   };
  return <input type="text" onChange={handleChange} />;
}
