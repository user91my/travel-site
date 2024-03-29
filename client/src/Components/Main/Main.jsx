import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

// Animate on scroll library
// https://www.npmjs.com/package/aos
import Aos from "aos";
import "aos/dist/aos.css";

const importAll = (reqFunc) =>
  // Example data structure for "reqFunc.keys()" :-
  //  [
  //   './img-01.jpg',
  //   './img-02.jpg',
  //    ...
  //  ]
  reqFunc.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = reqFunc(item);
    return acc;
  }, {});

// Data structure for "mediaImports" :-
// {
//   'img-01.jpg': "/static/media/img-01.30363f48d07988d4b8ae.jpg",
//   'img-02.jpg': "/static/media/img-02.51105f23e965eb0b17ef.jpg",
//   ...
// }
const imageImports = importAll(
  require.context("../../Assets", false, /\.(png|jpe?g)$/)
);

// Destination data
const Data = [
  {
    id: 1,
    imgSrc: "img-01.jpg",
    destTitle: "Addu Atoll",
    location: "Maldives",
    grade: "Relaxing Getaway",
    fees: "$1000",
    description: `magnis dis parturient montes nascetur 
    ridiculus mus mauris vitae ultricies leo integer malesuada 
    nunc vel risus commodo viverra maecenas accumsan lacus vel 
    facilisis volutpat est`,
  },
  {
    id: 2,
    imgSrc: "img-02.jpg",
    destTitle: "Alaska",
    location: "United States",
    grade: "Relaxing Getaway",
    fees: "$850",
    description: `euismod in pellentesque massa placerat 
    duis ultricies lacus sed turpis tincidunt id aliquet risus 
    feugiat in ante metus dictum at tempor commodo ullamcorper 
    a lacus`,
  },
  {
    id: 3,
    imgSrc: "img-03.jpg",
    destTitle: "Paris",
    location: "France",
    grade: "Cultural & Historical",
    fees: "$2500",
    description: `scelerisque viverra mauris in aliquam sem 
    fringilla ut morbi tincidunt augue interdum velit euismod 
    in pellentesque massa placerat duis ultricies lacus sed 
    turpis tincidunt id`,
  },
  {
    id: 4,
    imgSrc: "img-04.jpg",
    destTitle: "Salzburg",
    location: "Austria",
    grade: "Relaxing Getaway",
    fees: "$2500",
    description: `est sit amet facilisis magna etiam tempor 
    orci eu lobortis elementum nibh tellus molestie nunc non 
    blandit massa enim nec dui nunc mattis enim ut`,
  },
  {
    id: 5,
    imgSrc: "img-05.jpg",
    destTitle: "Rome",
    location: "Italy",
    grade: "Cultural & Historical",
    fees: "$2500",
    description: `magnis dis parturient montes nascetur 
    ridiculus mus mauris vitae ultricies leo integer malesuada 
    nunc vel risus commodo viverra maecenas accumsan lacus vel 
    facilisis volutpat est`,
  },
  {
    id: 6,
    imgSrc: "img-06.jpg",
    destTitle: "Santorini",
    location: "Greece",
    grade: "Relaxing Getaway",
    fees: "$1750",
    description: `euismod in pellentesque massa placerat 
    duis ultricies lacus sed turpis tincidunt id aliquet risus 
    feugiat in ante metus dictum at tempor commodo ullamcorper 
    a lacus`,
  },
  {
    id: 7,
    imgSrc: "img-07.jpg",
    destTitle: "Venice",
    location: "Italy",
    grade: "Cultural & Historical",
    fees: "$2500",
    description: `scelerisque viverra mauris in aliquam sem 
    fringilla ut morbi tincidunt augue interdum velit euismod 
    in pellentesque massa placerat duis ultricies lacus sed 
    turpis tincidunt id`,
  },
  {
    id: 8,
    imgSrc: "img-08.jpg",
    destTitle: "Zermatt",
    location: "Switzerland",
    grade: "Relaxing Getaway",
    fees: "$1250",
    description: `est sit amet facilisis magna etiam tempor 
    orci eu lobortis elementum nibh tellus molestie nunc non 
    blandit massa enim nec dui nunc mattis enim ut`,
  },
  {
    id: 9,
    imgSrc: "img-09.jpg",
    destTitle: "Stockholm",
    location: "Sweden",
    grade: "Cultural & Historical",
    fees: "$2500",
    description: `magnis dis parturient montes nascetur 
    ridiculus mus mauris vitae ultricies leo integer malesuada 
    nunc vel risus commodo viverra maecenas accumsan lacus vel 
    facilisis volutpat est`,
  },
];

const Main = () => {
  // Initiate the 'aos' library
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Popular Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imageImports[imgSrc]} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
