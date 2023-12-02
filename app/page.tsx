/* @jsxImportSource react */
"use client"; 
import React, { useState } from 'react';
import ApartmentConfig from './ApartmentConfig';
import BungalowConfig from './BungalowConfig';

const Home: React.FC = () => {
  return (
    <div>
     <div className="px-10 py-20 ">
      <h1 className="font-semibold text-2xl md:text-4xl">
        Apartment Pricing Calculator
      </h1>
      <div className=" py-10 justify-center">
        <ApartmentConfig/>
      </div>
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
