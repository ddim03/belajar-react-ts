// passing mouse event to props

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  id: number;
};

export default function Button({ handleClick, id }: ButtonProps) {
  return (
    <button type="button" onClick={(event) => handleClick(event, id)}>
      Click Me
    </button>
  );
}
