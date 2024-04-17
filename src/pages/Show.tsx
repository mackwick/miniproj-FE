import { Link, useLoaderData, Form } from "react-router-dom";

function Show() {
  const anAuthor: any = useLoaderData();
  const id: number = anAuthor.id;

  return (
    <div className="show">
      ß<h1>{anAuthor.firstName}</h1>
      <h1>{anAuthor.lastName}</h1>
      <Link to="/">
        <button>Go Back</button>
      </Link>
      <hr />
      <Form action={`/update/${id}`} method="put">
        <label htmlFor="firstName">
          <input
            type="text"
            name="firstName"
            id="firstName"
            defaultValue={anAuthor.firstName}
          />
        </label>
        <label htmlFor="lastName">
          <input
            type="text"
            name="lastName"
            id="lastName"
            defaultValue={anAuthor.lastName}
          />
        </label>
        <button>Update Author</button>
      </Form>
      <Form action={`/delete/${id}`} method="post">
        <button>Delete Author</button>
      </Form>
    </div>
  );
}

export default Show;
