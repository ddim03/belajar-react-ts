// passing children react component to props

type OscarProps = {
  children: React.ReactNode;
};

export default function Oscar({ children }: OscarProps) {
  return <div>{children}</div>;
}
