import Portfolio from "./pages/Portfolio";
import BirdCursor from "./components/ui/BirdCursor";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <BirdCursor />
      <Portfolio />
    </ThemeProvider>
  );
};

export default App;
