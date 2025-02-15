import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 mt-20">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <img
            src="\mysideangle.jpg"  // Replace with your own image URL
            alt="Your Name"
            className="w-100 h-90 rounded-full shadow-lg mb-6 md:mb-0 md:mr-8 hover:scale-105 transition-transform duration-300 ease-in-out"
          />

          {/* About Text */}
          <div>
            <p className="mb-4 text-lg">
              Hi, I'm <span className="font-semibold text-emerald-700">Ankit Sikeriya</span>, a passionate FullStack developer with a love for building innovative web applications. I specialize in React.js, Node.js, MongoDB, Tailwind CSS , and Express.js. 
            </p>
            <p className="mb-4 text-lg">
              I believe in clean code, creative solutions, and continuous learning. When I'm not coding, you can find me exploring the latest tech trends, reading up on new frameworks, or enjoying a good cup of coffee.
            </p>
            <p className="text-lg">
              I'm excited to share my journey, projects, and ideas with you. Let's build something amazing together!
            </p>
            <h2>
              <span className="font-semibold text-xl">Connect with Me:</span>
              
              <br />
              <p  className="text-blue-500 hover:underline">ankitsiker0@gmail.com </p>
              <a href="https://www.linkedin.com/in/ankit-sikeriya-813030263/" className="text-blue-500 hover:underline">LinkedIn</a>
              <br />
             
              <a href="https://www.instagram.com/ankit_sikeriya/" className="text-blue-500 hover:underline">Instagram</a>
              <br />

            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
