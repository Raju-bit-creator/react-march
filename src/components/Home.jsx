import React from "react";
import Contact from "./Contact";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/hero1.jpg";
import image2 from "../assets/hero1.jpg";

const Home = () => {
  return (
    <div>
      <Carousel>
        <div className="relative">
          <img src={image1} alt="Slide 1" className="w-full" />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

          {/* Text */}
          <p className="absolute bottom-4 left-4 text-white">Legend 1</p>
        </div>

        <div className="relative">
          <img src={image2} alt="Slide 2" className="w-full" />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>

          <p className="absolute bottom-4 left-4 text-white">Legend 2</p>
        </div>
      </Carousel>

      <div className="w-full rounded-md bg-gray-200 px-4 py-10 items-center justify-center">
        <h4 className="text-center font-bold text-xl mb-4 ">
          Our <span className="text-red-600 text-[30px]">products</span>
        </h4>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
          <article className="p-4 w-full lg:w-1/4 rounded-md mr-4 bg-gray-100">
            <img src={image1} />
            <h2 className="truncate font-bold text-lg">Product one</h2>
            <p className="line-clamp-3">
              Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
              occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            </p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-sm">
              buy now
            </button>
          </article>
          <article className="p-4 w-1/4 rounded-md mr-4 bg-gray-100">
            <img src={image1} />
            <h2 className="truncate font-bold text-lg">Product one</h2>
            <p className="line-clamp-3">
              Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
              occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            </p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-sm">
              buy now
            </button>
          </article>
          <article className="p-4 w-1/4 rounded-md mr-4 bg-gray-100">
            <img src={image1} />
            <h2 className="truncate font-bold text-lg">Product one</h2>
            <p className="line-clamp-3">
              Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
              occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            </p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-sm">
              buy now
            </button>
          </article>
          <article className="p-4 w-1/4 rounded-md mr-4 bg-gray-100">
            <img src={image1} />
            <h2 className="truncate font-bold text-lg">Product one</h2>
            <p className="line-clamp-3">
              Nulla dolor velit adipisicing duis excepteur esse in duis nostrud
              occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex
            </p>
            <button className="bg-red-500 text-white px-3 py-1 rounded-sm">
              buy now
            </button>
          </article>
        </div>
      </div>

      <div className="relative hidden w-full h-64 bg-gray-200 mt-4">
        <p>Relative parent</p>
        <div className="absolute bottom-20 left-100 bg-gray-400 p-2">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
