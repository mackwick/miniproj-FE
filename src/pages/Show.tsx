import { Link, useLoaderData } from "react-router-dom";

function Show(props: any) {
  const anAuthor: any = useLoaderData();

  return (
    <div className="show">
      <h1>{anAuthor.firstName}</h1>
      <h1>{anAuthor.lastName}</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default Show;
