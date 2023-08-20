import { useEffect } from "react";
import { Layout } from "./Layout/Layout";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes } from "./routes/Routes";
import { tokenRefresh } from "./utils/token.utils";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const globalFunction = () => {
    tokenRefresh(dispatch);
    console.log("La página se actualizó globalmente");
  };

  useEffect(() => {
    globalFunction();
  }, []);
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
