import Author from "../components/Author";
import { Form, useLoaderData } from "react-router-dom";

function Index(props: any) {
  const allAuthors: any = useLoaderData();

  return (
    <div className="index">
      <h1>Index here</h1>
      {allAuthors.map((author, i) => (
        <Author author={author} key={i} />
      ))}
      <hr />
      <Form action="/create" method="post">
        <label htmlFor="firstName">
          <input type="text" name="firstName" id="firstName" />
        </label>
        <label htmlFor="lastName">
          <input type="text" name="lastName" id="lastName" />
        </label>
        <button>Add Author</button>
      </Form>
    </div>
  );
}

export default Index;
