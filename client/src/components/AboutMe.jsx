import React from 'react';
import avatar from '../assets/avatar.svg'

const AboutMe = () => {
  return (
    <div className=" flex items-center justify-center h-screen text-white">
      <div className="flex flex-row items-center justify-center w-full max-w-6xl">
        {/* Text container on the left */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem at lorem fringilla tristique.
            Nullam facilisis orci sit amet orci vehicula, id bibendum nulla tincidunt. Integer et nisi sed lorem
            pellentesque gravida. Vestibulum sed tortor id magna elementum varius. In consectetur bibendum
            tristique. Cras hendrerit euismod tortor, ac iaculis mauris.
          </p>
          {/* Add more text or information about yourself */}
        </div>

        {/* Image container on the right */}
        <div className="w-1/2 p-8">
          <img
            src={avatar} // Replace with your image URL
            alt="My Picture"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;