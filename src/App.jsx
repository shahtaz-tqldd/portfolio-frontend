import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import useAuthCheck from "./hooks/useAuthCheck";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Loader from "./ui/Loader/Loader";
import "react-quill/dist/quill.snow.css";
import "./assets/styles/style.css";
import "./assets/styles/responsive.css";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#03C988" },
      text: {
        primary: "#ddd", // Set the primary text color to white
      },
    },

    typography: {
      fontFamily: `"Figtree", sans-serif`,
    },
  });

  const authChecked = useAuthCheck();

  return !authChecked ? (
    <Loader />
  ) : (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <RouterProvider router={routes} />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
