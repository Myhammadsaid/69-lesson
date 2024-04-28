import About from "./components/about/About";
import Comment from "./components/comment/Comment";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Product />
      <Comment />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
