/* @jsxImportSource react */
"use client"; 
import React, { useState } from 'react';
import ApartmentConfig from './ApartmentConfig';
import BungalowConfig from './BunglowConfig';

const Home: React.FC = () => {
  return (
    <div>
    <div>
      {/* You can add any other components or layout here if needed */}
      <ApartmentConfig />
    </div>
    <div className="px-10 py-20 ">
      <h1 className="font-semibold text-2xl md:text-4xl">
        Bungalow Pricing Calculator
      </h1>
      <div className=" py-10 justify-center">
        <BungalowConfig/>
      </div>
    </div>
    </div>
  );
};

export default Home;
