import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.tsx";
import Index from "./pages/Index.tsx";
import Show from "./pages/Show.tsx";
import { indexLoader, showLoader } from "./loaders.tsx";
import { createAction } from "./actions.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" element={<Show />} loader={showLoader} />
        <Route path="/create" action={createAction} />
      </Route>
    </>
  )
);

export default router;
