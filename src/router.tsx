import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.tsx";
import Index from "./pages/Index.tsx";
import Show from "./pages/Show.tsx";
import { indexLoader, showLoader } from "./loaders.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader} />
        <Route path="/:id" element={<Show />} loader={showLoader} />
      </Route>
    </>
  )
);

export default router;
