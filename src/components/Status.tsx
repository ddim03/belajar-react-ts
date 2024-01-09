// basic type : passing a union to props

type StatusProps = {
  status: "loading" | "success" | "error";
};

export default function Status({ status }: StatusProps) {
  let massage =
    status == "loading"
      ? "Loading..."
      : status == "success"
      ? "Data fetched successfully"
      : "Error fetching data";
  return <h2>{massage}</h2>;
}
