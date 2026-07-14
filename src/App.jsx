import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Division from "./pages/Division";
import Products from "./pages/Products";
import Investors from "./pages/Investors";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import ContactUs from "./pages/ContactUs";
import AdminContacts from "./pages/AdminContacts";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // Higher = slower/smoother
      smoothWheel: true,
      wheelMultiplier: 0.8, // Lower = slower wheel scrolling
      touchMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/division" element={<Division />} />
            <Route path="/products" element={<Products />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/admin/contacts" element={<AdminContacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
