import { CssBaseline, ThemeProvider } from "@mui/material";
import QuizLandingPage from "./components/pages/QuizLandingPage";
import theme from "./theme/muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QuizLandingPage />
    </ThemeProvider>
  );
}

export default App;
