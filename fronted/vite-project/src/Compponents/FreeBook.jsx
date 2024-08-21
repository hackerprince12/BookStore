import React, { useEffect, useState } from "react";
import axios from "axios";
// import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {
  const [dataa, setdata] = useState([]);

  const user = async () => {
    const datas = await axios
      .get("https://bookstore-backend-lnsm.onrender.com/api/get")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  };

  useEffect(() => {
    user();
  }, []);

  // console.log("data free book vala", dataa);

  const filterData = dataa.filter((datas) => datas.rate === 0);
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl mt-2 dark:bg-slate-900 dark:text-white  md:px-6  ">
        <div className="px-4">
          <h1 className="font-semibold text-xl pb-2">Free offered Books</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
            corrupti laboriosam Cumque.
          </p>
        </div>
        <div>
          <div className="">
            <Slider {...settings}>
              {Array.isArray(filterData) && filterData?.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
