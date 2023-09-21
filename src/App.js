// import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@mui/material";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <Header title="My header" subtitle="subtitle" />
      <Main>
        <Grid container sx={{ height: "80%" }}>
          <Grid item xs={4} sx={{ border: "2px solid #ECECEC" }}>
            1
          </Grid>
          <Grid item xs={4}>
            2
          </Grid>
          <Grid item xs={4}>
            3
          </Grid>
        </Grid>
      </Main>
      <Footer note="footer" />
    </div>
  );
}

export default App;
