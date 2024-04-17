import { Link } from "react-router-dom";

function Author({ author }: any) {
  return (
    <Link to={`/${author.id}`}>
      <h1>
        {author.firstName} {author.lastName}
      </h1>
    </Link>
  );
}

export default Author;
