import Author from "../components/Author";
import { useLoaderData } from "react-router-dom";

function Index(props: any) {
  const allAuthors: any = useLoaderData();

  return (
    <div className="index">
      <h1>Index here</h1>
      {allAuthors.map((author, i) => (
        <Author author={author} key={i} />
      ))}
    </div>
  );
}

export default Index;
