import Header from "./Header";
import Footer from "./Footer";
import Collection from "./Collection";
import { theme } from "../style/Theme";
import { AppStyle, ComponentSetter } from "../style/AppStyle";
import { ThemeProvider } from "styled-components";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyle />
      <ComponentSetter>
        <Header />
        <Collection />
        <Footer />
      </ComponentSetter>
      <ScrollToTop smooth top={500} />
    </ThemeProvider>
  );
}

export default App;
