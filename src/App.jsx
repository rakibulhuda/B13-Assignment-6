import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Stats from "./components/Stats.jsx";
import ProductsSection from "./components/ProductsSection.jsx";
import Steps from "./components/Steps.jsx";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    return (
        <div>
            <ToastContainer position="top-right" autoClose={2500} theme="light" />
            <Navbar cartCount={cartCount} />
            <Banner />
            <Stats />
            <ProductsSection
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartCount={setCartCount}
            />
            <Steps />
        </div>
    );
}

export default App;