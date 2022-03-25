import React, { useState } from "react";

import { NavLink } from "react-router-dom";


//import SubmitForm from "../../SubmitForm";

import Navbar from "../../Navbar";
import ChatPopup from "../../ChatPopup/ChatPopup.js";
import LandingPageSlider from "../LandingPage/landingPageSlider/landingPageSlider";
import Pagination from "../../Pagination/Pagination";
import MainEventsSection from "../../MainEventsSection/index";
import "./styles.css";
import Footer from "../../Footer/Footer.js";
import { current } from "@reduxjs/toolkit";
import CreateExperience from "../../CreateExperience/index.js";
import SearchBar from "../../SearchBar/SearchBar.js";
import PopularSlider from "../../PopularSlider/PopularSlider.js";
import LoginPopup from "../../LoginPopup";
import RegisterPopup from "../../RegisterPopup";
import FilterBar from "../../FilterBar/FilterBar";


function MainPage({
  paginate,
  eventsPerPage,
  numbersOfEvents,
  indexLastEvent,
  indexFirstEvent,
  currentEvent,
  eventData,
  onMessageSubmit,
  onTextChange,
  renderChat,
  chatUser,
  locationToSearch,
  handleSearchOnChange,
  handleSearchClick,
  handleCategoryClick
}) {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setRegisterPopup] = useState(false);
  return (
    <>
      <LoginPopup
        showModal={showLoginPopup}
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <RegisterPopup
        showModalRegister={showRegisterPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <Navbar
        setShowModal={setShowLoginPopup}
        setShowModalRegister={setRegisterPopup}
      />
      <PopularSlider handleCategoryClick={handleCategoryClick} />
      <SearchBar locationToSearch={locationToSearch} handleSearchOnChange={handleSearchOnChange} handleSearchClick={handleSearchClick} />
      <Pagination
        paginate={paginate}
        eventsPerPage={eventsPerPage}
        numbersOfEvents={numbersOfEvents}
      />
      <ChatPopup
        onMessageSubmit={onMessageSubmit}
        onTextChange={onTextChange}
        renderChat={renderChat}
        chatUser={chatUser}
      />
      <MainEventsSection
        indexLastEvent={indexLastEvent}
        indexFirstEvent={indexFirstEvent}
        currentEvent={currentEvent}
        eventData={eventData}
      />
      {/* <LandingPageSlider /> */}
     {/*<SubmitForm />*/}

      <CreateExperience />
      <Footer />



    </>
  );
}

export default MainPage;
