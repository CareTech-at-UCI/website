import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-white font-jersey p-6 pt-12 mb-11 justify-center min-h-screen w-full">
      <div className="flex-col">
        <h2 className="text-6xl sm:text-8xl mt-8 sm:pt-20 md:pt-14 pb-2 text-center text-primary">What Is CareTech?</h2>
        <div className="flex justify-between  flex-col lg:px-4 lg:flex-row md:pt-16">
          <p className="font-normal lg:text-xl px-4 pr-0 lg:pr-10 md:text-md sm:[font-size:20px] sm:mb-10 sm:mt-8 text-[#294B7B] flex-1 w-full">
            We are an <b>ICS-affiliated organization</b> that aims to{" "}
            bring groundbreaking healthcare inventions to life to increase <b>early-disease detection</b>. Join one of our committees to get{" "}
            <b>hands-on experience</b> working on projects and{" "}
            <b>building healthcare tech innovations</b>. Gain valuable skills about AI in the health and technology field
             and{" "}
            <b>dive into real-world healthcare tech solutions</b> that will help
            you develop expertise and contribute to cutting-edge project.
            <br></br>
            <br></br>
            Whether you're a developer, designer, healthcare enthusiast, or just
            passionate about solving real-world problems with tech, we’ve got a
            spot for you!
          </p>
          <img
            className="mt-6 lg:mt-0 px-4 sm:h-25 lg:h-[420px]"
            src="/images/celebrate_uci_booth.jpg"
            alt="CareTechAnimal"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
