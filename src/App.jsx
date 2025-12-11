import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Slidebar from "./components/Slidebar";
import Developers from "./pages/Developers";
import Inspiration from "./pages/Inspiration";
import Initiatives from "./pages/Initiatives";
import Contact from "./pages/Contect";
import Footer from "./components/Footer";
import YourSchool from "./pages/YourSchool";
import SchoolContribution from "./pages/SchoolContribution";
import ProductUploadForm from "./components/form/ProductUploadForm";
import SchoolLoginForm from "./components/form/SchoolLoginForm";
import SchoolRegisterForm from "./components/form/SchoolRegisterForm";
import { AlertPopup } from "./components/form/MiniComp";
import SchoolPage from './components/SchoolPage';

function App() {

    const [alert, setAlert] = useState(null);

    function showAlert(message, type, from){
      console.log("Alert called", message, type);
        setAlert({
             message: message,
             type: type,
             from: from
    })
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    }

  return (
    <BrowserRouter>
    <div className="bg-green-100 scroll-w-0 relative ">

        <Slidebar />

        <main className="relative">
       {alert && <AlertPopup className="" message={alert.message} type={alert.type} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developers />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/yourSchool" element={<YourSchool />} />
            <Route path="/schoolContribution" element={<SchoolContribution />} />
            <Route path="/uploadProducts" element={<ProductUploadForm/>}/>
            <Route path="/schoolLogin" element={<SchoolLoginForm/>}/>
            <Route path="/schoolRegister" element={<SchoolRegisterForm/>}/>
            <Route path="/schoolPage" element={<SchoolPage />}/>
          </Routes>
        </main>
    </div>
        
        <Footer />
    </BrowserRouter>
  );
};

export default App;
