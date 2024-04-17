const URL: string = import.meta.env.VITE_BASE_URL;

//INDEX LOADER
export const indexLoader = async () => {
  const response = await fetch(`${URL}/api/authors`);
  const allAuthors = await response.json();
  return allAuthors;
};

//SHOW LOADER
export const showLoader = async ({ params }: any) => {
  const response = await fetch(`${URL}/api/authors/${params.id}`);
  const anAuthor = await response.json();
  return anAuthor;
};
