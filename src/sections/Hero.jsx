import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import heroShoe from "../assets/images/big-shoe1.png"; 
import { shoes } from '../constants';
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(heroShoe);

  return ( 
    <section
      id="home"
      className="relative flex flex-col xl:flex-row items-center justify-between min-h-screen gap-10 px-6 xl:px-20 max-w-screen-xl mx-auto"
    >
      {/* Left Content */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start pt-20 space-y-4">
        <p className="text-red-400 font-semibold tracking-wide text-lg mb-2">
          Our Summer Collections
        </p>
        <h1 className="text-6xl sm:text-7xl font-palanquin font-bold leading-tight">
          <span className="text-gray-900">The New Arrival</span>
          <br />
          <span className="text-red-400">Nike</span> Shoes
        </h1>
        <p className="my-7 text-lg text-slate-gray max-w-md mt-2">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        {/* Stats Section */}
        <div className="flex gap-10 pt-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">1k+</h2>
            <p className="text-gray-500">Brands</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">500+</h2>
            <p className="text-gray-500">Shops</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">250k+</h2>
            <p className="text-gray-500">Customers</p>
          </div>
        </div>
      </div>

      {/* Right Side (Hero Image) */}
      <div className="relative xl:w-3/5 flex justify-center">
        <div className="relative flex-1 flex justify-center items-center">
          <img src={bigShoeImg} alt="Nike Shoes" className="w-full drop-shadow-lg" />

          {/* Small Shoe Thumbnails */}
          <div className="flex sm:gap-10 gap-6 absolute -bottom-[30%]">
            {shoes && shoes.length > 0 ? (
              shoes.map((shoe, index) => (
                <ShoeCard 
                  key={index} 
                  imgURL={shoe} 
                  changeBigShoeImage={() => setBigShoeImg(shoe.bigShoe)}
                  bigShoeImg={bigShoeImg}
                />
              ))
            ) : (
              <p className="text-red-500">No shoes available</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
