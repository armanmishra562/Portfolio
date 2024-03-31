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
    const initialStars = generateStars(1000);
    setStars(initialStars);
  }, []);

  useFrame(() => {
    // Update positions of stars
    setStars(prevStars => {
      return prevStars.map(star => {
        // Move stars towards bottom-left direction
        let newX = star.x - 0.015; // Adjust horizontal speed here
        let newY = star.y - 0.015; // Adjust vertical speed here

        // If star moves outside the view, reappear from polar opposite position
        if (newX < -10) {
          newX = 10;
        }
        if (newY < -10) {
          newY = 10;
        }

        return { ...star, x: newX, y: newY };
      });
    });
  });

  const generateStars = (count) => {
    // Generate new stars with random positions
    return Array.from({ length: count }, () => ({
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
