// basic type : string, number boolean

type GreetingsProps = {
  name: string;
  massageCount?: number;
  isLoged: boolean;
};

export default function Greetings({
  name,
  massageCount = 0,
  isLoged,
}: GreetingsProps) {
  return (
    <div>
      <h1>
        {isLoged
          ? `Hallo, ${name}. You have ${massageCount} unread massage. `
          : "Welcome guest"}
      </h1>
    </div>
  );
}
