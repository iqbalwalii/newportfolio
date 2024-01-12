import { useEffect } from "react";
import Navbar from "./homepage-comps/Navbar";
import Home from "./homepage-comps/Home";
import About from "./homepage-comps/About";
import MyProjects from "./homepage-comps/MyProjects";
import Techs from "./homepage-comps/Techs";
import Contact from "./homepage-comps/Contact";
import CertificateSlider from "./homepage-comps/CertificateSlider";

const HomePage = () => {
  const certificates = [
    { image: "/images/certificates/Coursera 9LVPTPCFWSWD.webp" },
    { image: "/images/certificates/Coursera CMVPZ96XMZ9C.webp" },
    { image: "/images/certificates/Coursera FYCHX2439CZJ.webp" },
    { image: "/images/certificates/Coursera K37ASQJ2CV9H.webp" },
    { image: "/images/certificates/Coursera T9LZPJZSYA6K.webp" },
  ];
  const EduCertificates = [
    { image: "/images/certificates/BCA.png" },
    { image: "/images/certificates/MCA.png" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <CertificateSlider certificates={EduCertificates} title={"Education"} />
      <MyProjects />
      <Techs />

      <CertificateSlider certificates={certificates} title={"Certifications"} />
      <Contact />
    </>
  );
};

export default HomePage;
