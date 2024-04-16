import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.tsx";
import Index from "./pages/Index.tsx";
import Show from "./pages/Show.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Index />} />
        <Route path="/authors/:id" element={<Show />} />
      </Route>
    </>
  )
);

export default router;
