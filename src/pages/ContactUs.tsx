import React from "react";
import DetectScroll from "../components/DetectScroll";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function ContactUs() {
  const socials = [
    {
      svg: "/icons/discord.svg",
      link: "https://discord.gg/",
      name: "Discord",
      social: "CareTech@UCI",
    },
    {
      svg: "/icons/instagram.svg",
      link: "https://www.instagram.com/caretech_uci/",
      name: "Instagram",
      social: "@caretech_uci",
    },
    {
      svg: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/company/",
      name: "LinkedIn",
      social: "UCI CareTech",
    },
  ];
  return (
    <div>
      <DetectScroll />
      <Navbar />
      <div className="h-[80vh] w-full flex flex-col justify-center items-center">
        <h1 className="text-6xl md:text-8xl font-jersey text-primary ">
          Contact Us
        </h1>
        <div className="bg-[#BEEEFF] font-montserrat text-xl py-4 md:px-20 md:py-4 md:text-2xl px-12 text-primary rounded-full mt-4">
          <a href="mailto:caretechirvine@gmail.com">caretechirvine@gmail.com</a>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 p-8">
          {socials.map((social) => (
            <Social key={social.name} {...social} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
    // Maybe put the Footer here?
  );
}

function Social({
  svg,
  link,
  name,
  social,
}: {
  svg: string;
  link: string;
  name: string;
  social: string;
}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex flex-col items-center text-center hover:bg-blue-100 p-2 rounded-lg transition duration-300">
      <img src={svg} alt={name} className="w-10 h-10 md:w-16 md:h-16" />
      <div className="mt-2 text-montserrat">
        <h2 className="text-md md:text-xl text-[#183054] font-montserrat mb-1 md:mb-2">{name}</h2>
        <p className="text-lg md:text-2xl text-[#294B7B] font-semibold">{social}</p>
      </div>
    </a>
  );
}

export default ContactUs;
