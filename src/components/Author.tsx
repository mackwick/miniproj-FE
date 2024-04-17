import { Link } from "react-router-dom";

type AuthorProps = {
  firstName: string;
  lastName: string;
  id: number;
};

function Author({ author }: AuthorProps) {
  return (
    <Link to={`/${author.id}`}>
      <h1>
        {author.firstName} {author.lastName}
      </h1>
    </Link>
  );
}

export default Author;
