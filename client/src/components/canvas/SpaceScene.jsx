import React, { useRef , useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars as DreiStars } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const StarsAnimation = () => {
  const starsRef = useRef();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Initial stars generation
    const initialStars = generateStars();
    setStars(initialStars);

    // Remove stars that move out of view
    const removeOutOfBoundsStars = () => {
      setStars(prevStars => {
        return prevStars.filter(star => star.z <= 0); // Assuming z is depth, adjust as needed
      });
    };

    const generateNewStars = () => {
      setStars(prevStars => {
        const newStars = generateStars();
        return [...prevStars, ...newStars];
      });
    };

    // Schedule generation of new stars every 2 seconds
    const intervalId = setInterval(() => {
      generateNewStars();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useFrame(() => {
    // Update positions of stars
    setStars(prevStars => {
      return prevStars.map(star => ({
        ...star,
        z: star.z - 0.01, // Adjust speed here
      }));
    });

    // Remove excess stars if total exceeds 1500
    if (stars.length > 1000) {
      setStars(prevStars => prevStars.slice(0, 1500));
    }
  });

  const generateStars = () => {
    // Generate new stars with random positions
    return Array.from({ length: 100 }, () => ({
      x: Math.random() * 20 - 10,
      y: Math.random() * 20 - 10,
      z: -2, // Initial position (depth)
    }));
  };

  return (
    <group ref={starsRef}>
      {stars.map((star, index) => (
        <mesh key={index} position={[star.x, star.y, star.z]}>
          <sphereGeometry args={[0.025, 16, 16]} /> {/* Adjust star size here */}
          <meshBasicMaterial color={0xffffff} />
        </mesh>
      ))}
    </group>
  );
};



const SpaceScene = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black">
      <Canvas>
        <StarsAnimation />
      </Canvas>
    </div>
  );
};

export default SpaceScene;
