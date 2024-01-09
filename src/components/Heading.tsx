// passing a children string to props

type HeadingProps = {
  children: string;
};

export default function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>;
}
