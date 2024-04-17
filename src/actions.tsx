import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

//CREATE
export const createAction = async ({ request }: any) => {
  const formData = await request.formData();

  const newAuthor = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };

  await fetch(`${URL}/api/authors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAuthor),
  });
  return redirect("/");
};

//UPDATE
export const updateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const id: number = parseInt(params.id);

  const updatedAuthor = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };

  await fetch(`${URL}/api/authors/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedAuthor),
  });
  return redirect(`/${id}`);
};

//DELETE
export const deleteAction = async ({ params }: any) => {
  const id: number = parseInt(params.id);
  await fetch(`${URL}/api/authors${id}`, {
    method: "DELETE",
  });
  return redirect("/");
};
