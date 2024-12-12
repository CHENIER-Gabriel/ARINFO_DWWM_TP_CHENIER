import React from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import IndexCarouselComponent from "./components/index/IndexCarouselComponent";


const App = () => {
    return (
        <div>
            <HeaderComponent />
            <IndexCarouselComponent />
            <FooterComponent /> 
        </div>
    );
};

export default App;
