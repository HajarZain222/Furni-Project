import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import './App.css'


export default function App() {
  return (
    // <ThemeProvider>
      <RouterProvider router={router} />
    // </ThemeProvider>
  );
}