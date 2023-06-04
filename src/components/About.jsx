import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen  bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>I'm Angshuman, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            {/* <p>
              I am passionate about building products and helpings others. I have been developing 
              B2B and B2C products for the last 20 years. My interests are in analytics and marketing. 
              But I am also passionate about helping to teach product management in various contexts. 
            </p> */}
            <p>
              Hi, I am a product manager who loves building products that can change people's lives and also help train others around product management. 
              I have been a software developer and have a business degree. So, I am happy to help anyone with questions around software engineeing and business school. 
              Let me bring my expertise and passion to your team and
              together we can build something truly remarkable.ç
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
