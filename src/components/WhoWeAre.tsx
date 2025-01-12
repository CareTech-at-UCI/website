import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-white font-jersey p-6 pt-12 mb-11 justify-center">
      <div className="flex-col">
        <h2 className="text-6xl sm:text-8xl mt-8 sm:pt-20 md:pt-20 pb-2 text-center text-primary">What Is CareTech?</h2>
        <div className="flex justify-between flex-wrap flex-col lg:flex-row">
          <p className="font-normal text-lg sm:text-2xl text-[#294B7B] flex-1 w-full m-auto">
            We are a student-led organization that will collaborate with
            industry-leading companies to{" "}
            <b>bring groundbreaking healthcare inventions to life</b>, get{" "}
            <b>hands-on experience</b> working on side projects and{" "}
            <b>building healthcare tech innovations</b>, help boost resumes and
            gain valuable skills you can talk about during interviews with top
            tech and healthcare companies, and access research materials and{" "}
            <b>dive into real-world healthcare tech research</b> that will help
            you develop expertise and contribute to cutting-edge projects.
            <br></br>
            <br></br>
            Whether you're a developer, designer, healthcare enthusiast, or just
            passionate about solving real-world problems with tech, we’ve got a
            spot for you!
          </p>
          <img
            className="flex-1 m-3 md:m-8 mx-auto"
            src="/images/caretech_logo.png"
            alt="CareTechAnimal"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
