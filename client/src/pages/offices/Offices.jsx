import "./offices.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
// import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import Footer from "../../footer/Footer";
import useFetch from '../../hooks/useFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Offices = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  // console.log(id);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {data, loading, error} = useFetch(`/offices/find/${id}`);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const {date} = useContext(SearchContext);
  console.log(date);

  const photos = [
    {
      src: "https://images.steelcase.com/image/upload/v1412089390/www.steelcase.com/12-0007998.jpg",
    },
    {
      src: "https://rieke.com/wp-content/uploads/2018/12/large-conference-room.jpg",
    },
    {
      src: "https://imgs.search.brave.com/gqlHqPJZ2s0lqvX4EaMrGkoLUBjuzelA9Eqoh20KJUw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9saWdo/dHdlcmtzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Mi9jb25mZXJlbmNl/cm9vbXBpYy5qcGc",
    },
    {
      src: "https://imgs.search.brave.com/IX-qLzW7kBCKnqw-BrwrZwJFSe7Za_yVWnaEtUexY9k/rs:fit:600:405:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YyL2Y3/LzgyL2YyZjc4MjY5/Y2VkMmNiYWUyYzg2/OTlhZGJhYTBmN2Zl/LnBuZw",
    },
    {
      src: "https://imgs.search.brave.com/Z1uPj1qMBQuFHxVvq3m0XzSzu55mqoa72T07cvlKMyU/rs:fit:1000:667:1/g:ce/aHR0cHM6Ly9ob21l/bHl2aXN0YS5jb20v/ZmlsZS8yMDE3LzAz/L0dhbWluZy1Sb29t/LURlc2lnbi5qcGc",
    },
    {
      src: "https://imgs.search.brave.com/UmhNcIU-vNhDPAJVF2x_nNwhUZtnQ8OBv2z3juZM91E/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvYTYz/NzA1NGEtYzIzYy00/MDA1LTgwY2EtNTJm/MmEzYTdlOTUyLmU3/MTE1MTYxMmY5YTQw/ZmRmODA1NWNkNTdi/NjVmYjRmLmpwZWc",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if(user) {
      setOpenModal(true);
    } else {
      navigate("/login")
    }
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      { loading ? ("loading") :
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            500m from Infopark South Gate
          </span>
          <span className="hotelPriceHighlight">
            {/* Book a stay over $114 at this property and get a free airport taxi3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333/33333333333333333333333333333333333333333333333333333333333333333333333333333333333333 */}
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.name}</h1>
              <p className="hotelDesc">
              The Phase 1 campus is fully developed spread over a 101 acres (40.9 ha) with more than 7 million sq ft (650 thousand m2) of operational built-up space. Infopark Phase II is spread over 160 acres (64.7 ha) of campus area which would have a total built-up space of 8 million sq ft (740 thousand m2) upon completion and is expected to employ more than 100,000 professionals.[4]

The Infopark campus currently has 9.2 million sq ft (850 thousand m2) of built-up area and is the major contributor of IT export revenue from the state of Kerala.[5] IT exports from Infopark which stood at ₹32 billion (US$420 million) in 2016–17, doubled in a period of 4 years, rising to ₹63.1 billion (US$830 million) in 2020–21.[6] A huge real estate boom was triggered soon after Infopark started to attract big MNCs from around the globe. Infopark changed the landscape and lifestyle of Kochi, particularly the Kakkanad area. A new culture got evolved and more and more commercial and residential ventures started to rise up which then extended the limits of Kochi city to further north end.[7]
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>{data.name}</h1>
              <span>
                Grate Place to Work
              </span>
              <h2>
                {/* <b>$945</b> (9 nights) */}
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer/>
      </div>}
      {openModal && <Reserve setOpen={setOpenModal} officeId={id}/>}
    </div>
  );
};

export default Offices;

