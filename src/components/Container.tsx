// passing styles to props

type ContainerProps = {
  styles: React.CSSProperties;
};

export default function Container({ styles }: ContainerProps) {
  return <div style={styles}>Component with styles props</div>;
}
