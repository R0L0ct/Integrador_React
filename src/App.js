import { Layout } from "./Layout/Layout";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
