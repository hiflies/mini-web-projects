import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {useEffect, useState} from "react";

function App() {
    const [page, setPage] = useState('home');

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [page])

    return (
        <>
            <Navigation setPage={setPage} page={page}/>
            {page === 'home' && <Home setPage={setPage}/>}
            {page === 'about' && <About setPage={setPage}/>}
            {page === 'products' && <Products/>}
            {page === 'contact' && <Contact/>}
            <Footer/>
        </>
    );
}

export default App;
