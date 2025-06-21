import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeaderMain() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownNavbarOpen, setIsDropdownNavbarOpen] = useState(false);
  const [isDropdownNavbarOpenservices, setIsDropdownNavbarOpenservices] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
  setIsDropdownNavbarOpen(false);
  setIsDropdownNavbarOpenservices(false);
};

const toggleNavbarDropdownservices = () => {
  setIsDropdownNavbarOpenservices(!isDropdownNavbarOpenservices);
  setIsDropdownOpen(false);
  setIsDropdownNavbarOpen(false);
};

const toggleNavbarDropdown = () => {
  setIsDropdownNavbarOpen(!isDropdownNavbarOpen);
  setIsDropdownOpen(false);
  setIsDropdownNavbarOpenservices(false);
};

const handleDropdownHover = () => {
  setIsDropdownOpen(true);
  setIsDropdownNavbarOpen(false);
  setIsDropdownNavbarOpenservices(false);
};

const handleNavbarDropdownHover = () => {
  setIsDropdownNavbarOpen(true);
  setIsDropdownOpen(false);
  setIsDropdownNavbarOpenservices(false);
};

const handleNavbarDropdownHoverservices = () => {
  setIsDropdownNavbarOpenservices(true);
  setIsDropdownOpen(false);
  setIsDropdownNavbarOpen(false);
};

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  // Manage body scroll locking
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest("nav") === null) {
        setIsDropdownOpen(false);
        setIsDropdownNavbarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  

  const handleNavbarDropdownLeave = () => {
    setIsDropdownNavbarOpen(false);
  };
  const handleNavbarDropdownLeaveservices = () => {
    setIsDropdownNavbarOpenservices(false);
  };

  return (
    <nav className="bg-white border-black top-10 fixed w-full z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/loonalogo.png"
              className="h-16"
              alt="Loonahospital Logo"
            />
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex text-lg flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  About
                </Link>
              </li>
              <li onMouseEnter={handleDropdownHover}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Treatment
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              
              <li onMouseEnter={handleNavbarDropdownHoverservices}>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Services
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeaveservices}
                  onClick={handleNavbarDropdownLeaveservices}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto px-2 absolute mt-2 ${isDropdownNavbarOpenservices ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/psychiatric-care"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                       Psychiatric Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/deaddiction"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        De-addiction Programs
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/sexual-wellness"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sexual Wellness Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li onMouseEnter={handleNavbarDropdownHover}>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:p-0"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  onMouseLeave={handleNavbarDropdownLeave}
                  onClick={handleNavbarDropdownLeave}
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-auto px-4 absolute mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <Link
                        to="/Pictures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pictures Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Youtube"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Video Gallery
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Instagram"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
                <Link
                  to="/management"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Management
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block text-xl">
            <Link
              to="/doctors"
              className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="block lg:hidden text-black"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* ✅ Desktop Mega Menu */}
        <div
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(false)}
        >
          {isDropdownOpen && (
            <div className="hidden md:block mt-2 absolute left-0 w-full bg-white z-40">
              <div className="grid px-40 py-5 mx-auto text-gray-900 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
                <ul>
                  <li>
                    <Link
                      to="/psychiatry"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Psychiatry treatment
                    </Link>
                    <Link
                      to="/depression"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Depression
                    </Link>
                    <Link
                      to="/anxiety"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Anxiety
                    </Link>
                    <Link
                      to="/bipolar-disorder"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Bipolar Disorder
                    </Link>
                    <Link
                      to="/schizophrenia"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Schizophrenia
                    </Link>
                    <Link
                      to="/ocd"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      OCD
                    </Link>
                  </li>
                </ul>

                {/* Counselling and Therapy */}
                <ul>
                  <li>
                    <Link
                      to="/counselling-and-therapy"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Counselling and Therapy
                    </Link>
                    <Link
                      to="/cbt"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      CBT
                    </Link>
                    <Link
                      to="/dbt"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      DBT
                    </Link>
                    <Link
                      to="/individual-counselling"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Individual Counselling
                    </Link>
                    <Link
                      to="/stress-management"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Stress Management
                    </Link>
                    <Link
                      to="/behaviour-therapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Behaviour Therapy
                    </Link>
                    <Link
                      to="/relaxation-therapy"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Relaxation Therapy
                    </Link>
                    <Link
                      to="/social-skills-training"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Social Skills Training
                    </Link>
                  </li>
                </ul>

                {/* Children Mental Health */}
                <ul>
                  <li>
                    <Link
                      to="/mental-health-children"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Mental Health Issues and Children
                    </Link>
                    <Link
                      to="/adhd"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      ADHD
                    </Link>
                    <Link
                      to="/autism"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Autism
                    </Link>
                    <Link
                      to="/incontinence"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Incontinence
                    </Link>
                    <Link
                      to="/behaviour-issues"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Behaviour Issues
                    </Link>
                    <Link
                      to="/conduct-disorder"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Conduct Disorder
                    </Link>
                    <Link
                      to="/learning-disability"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Learning Disability
                    </Link>
                  </li>
                </ul>

                {/* De-addiction Programme */}
                <ul>
                  <li>
                    <Link
                      to="/De-addictionProgramme"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      De-addiction Programme
                    </Link>
                    <Link
                      to="/motivation-enhancement"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Motivation Enhancement Therapy
                    </Link>
                    <Link
                      to="/relapse-prevention"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Relapse Prevention Therapy
                    </Link>
                    <Link
                      to="/individual-counselling"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Individual Counselling
                    </Link>
                    <Link
                      to="/motivation-by-hypnosis"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Motivation Enhancement By Hypnosis
                    </Link>
                  </li>
                </ul>

                {/* Sexual Wellness */}
                <ul>
                  <li>
                    <Link
                      to="/sexual-wellness-program"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Sexual Wellness Program
                    </Link>
                    <Link
                      to="/premature-ejaculation"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Premature Ejaculation
                    </Link>
                    <Link
                      to="/erectile-dysfunction"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Erectile Dysfunction
                    </Link>
                    <Link
                      to="/reduced-high-libido"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Reduced Or High Libido
                    </Link>
                    <Link
                      to="/anorgasmia"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Anorgasmia
                    </Link>
                    <Link
                      to="/dhat-syndrome"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      DHAT Syndrome
                    </Link>
                  </li>
                </ul>

                {/* Sleep Clinic */}
                <ul>
                  <li>
                    <Link
                      to="/sleep-clinic"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Sleep Clinic
                    </Link>
                    <Link
                      to="/insomnia"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Insomnia
                    </Link>
                    <Link
                      to="/disturbed-sleep"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Disturbed Sleep
                    </Link>
                    <Link
                      to="/non-refreshing-sleep"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Non-Refreshing Sleep
                    </Link>
                    <Link
                      to="/sleep-talking"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Sleep Talking
                    </Link>
                    <Link
                      to="/sleep-walking"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Sleep Walking
                    </Link>
                    <Link
                      to="/nightmares"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Nightmares
                    </Link>
                  </li>
                </ul>

                {/* Headache Clinic */}
                <ul>
                  <li>
                    <Link
                      to="/headache-clinic"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Headache Clinic
                    </Link>
                    <Link
                      to="/migraine"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Migraine
                    </Link>
                    <Link
                      to="/tension-headache"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Tension Headache
                    </Link>
                  </li>
                </ul>

                {/* Epilepsy Clinic */}
                <ul>
                  <li>
                    <Link
                      to="/epilepsy-clinic"
                      className="font-semibold text-md  hover:text-blue-700"
                    >
                      Epilepsy Clinic
                    </Link>
                    <Link
                      to="/seizure"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      Seizure
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 top-30 z-50 bg-white overflow-y-auto transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "block" : "hidden"}`}
        >
          <div className="overflow-y-auto  py-10 px-10">
            <ul className="flex flex-col text-lg space-y-4">
              <li>
                <Link
                  to="/"
                  onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMobileMenu}
                  to="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleDropdown}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Treatment
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              
              <li>
                <button
                  onClick={toggleNavbarDropdownservices}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Services
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpenservices ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 ${isDropdownNavbarOpenservices ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/psychiatric-care"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Psychiatric Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/deaddiction"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        De-addiction Programs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/sexual-wellness"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Sexual Wellness Services
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  onClick={toggleNavbarDropdown}
                  className="flex justify-between w-full py-2 px-3 text-black hover:bg-gray-100"
                >
                  Media
                  <svg
                    className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isDropdownNavbarOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  onClick={toggleMobileMenu}
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/Pictures"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Pictures Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/youtube"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Video Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Instagram"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
                <Link
                  to="/management"
                   onClick={toggleMobileMenu}
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Management
                </Link>
              </li> */}
            </ul>

            <div onClick={toggleMobileMenu}>
              {isDropdownOpen && (
                <div className=" overflow-y-auto pt-10 bg-white ">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ul>
                      <li>
                        <Link
                          to="/psychiatry"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Psychiatry treatment
                        </Link>
                        <Link
                          to="/depression"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Depression
                        </Link>
                        <Link
                          to="/anxiety"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Anxiety
                        </Link>
                        <Link
                          to="/bipolar-disorder"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Bipolar disorder
                        </Link>
                        <Link
                          to="/schizophrenia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Schizophrenia
                        </Link>
                        <Link
                          to="/ocd"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          OCD
                        </Link>
                      </li>
                    </ul>

                    {/* Counselling and Therapy */}
                    <ul>
                      <li>
                        <Link
                          to="/counselling-and-therapy"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Counselling and Therapy
                        </Link>
                        <Link
                          to="/cbt"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          CBT
                        </Link>
                        <Link
                          to="/dbt"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          DBT
                        </Link>
                        <Link
                          to="/individual-counselling"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Individual Counselling
                        </Link>
                        <Link
                          to="/stress-management"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Stress Management
                        </Link>
                        <Link
                          to="/behaviour-therapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Behaviour Therapy
                        </Link>
                        <Link
                          to="/relaxation-therapy"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Relaxation Therapy
                        </Link>
                        <Link
                          to="/social-skills-training"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Social Skills Training
                        </Link>
                      </li>
                    </ul>

                    {/* Children Mental Health */}
                    <ul>
                      <li>
                        <Link
                          to="/mental-health-children"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Mental Health Issues and Children
                        </Link>
                        <Link
                          to="/adhd"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          ADHD
                        </Link>
                        <Link
                          to="/autism"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Autism
                        </Link>
                        <Link
                          to="/incontinence"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Incontinence
                        </Link>
                        <Link
                          to="/behaviour-issues"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Behaviour Issues
                        </Link>
                        <Link
                          to="/conduct-disorder"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Conduct Disorder
                        </Link>
                        <Link
                          to="/learning-disability"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Learning Disability
                        </Link>
                      </li>
                    </ul>

                    {/* De-addiction Programme */}
                    <ul>
                      <li>
                        <Link
                          to="/De-addictionProgramme"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          De-addiction Programme
                        </Link>
                        <Link
                          to="/motivation-enhancement"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Motivation Enhancement Therapy
                        </Link>
                        <Link
                          to="/relapse-prevention"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Relapse Prevention Therapy
                        </Link>
                        <Link
                          to="/individual-counselling"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Individual Counselling
                        </Link>
                        <Link
                          to="/motivation-by-hypnosis"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Motivation Enhancement By Hypnosis
                        </Link>
                      </li>
                    </ul>

                    {/* Sexual Wellness */}
                    <ul>
                      <li>
                        <Link
                          to="/sexual-wellness-program"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Sexual Wellness Program
                        </Link>
                        <Link
                          to="/premature-ejaculation"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Premature Ejaculation
                        </Link>
                        <Link
                          to="/erectile-dysfunction"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Erectile Dysfunction
                        </Link>
                        <Link
                          to="/reduced-high-libido"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Reduced Or High Libido
                        </Link>
                        <Link
                          to="/anorgasmia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Anorgasmia
                        </Link>
                        <Link
                          to="/dhat-syndrome"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          DHAT Syndrome
                        </Link>
                      </li>
                    </ul>

                    {/* Sleep Clinic */}
                    <ul>
                      <li>
                        <Link
                          to="/sleep-clinic"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Sleep Clinic
                        </Link>
                        <Link
                          to="/insomnia"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Insomnia
                        </Link>
                        <Link
                          to="/disturbed-sleep"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Disturbed Sleep
                        </Link>
                        <Link
                          to="/non-refreshing-sleep"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Non-refreshing Sleep
                        </Link>
                        <Link
                          to="/sleep-talking"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Sleep Talking
                        </Link>
                        <Link
                          to="/sleep-walking"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Sleep Walking
                        </Link>
                        <Link
                          to="/nightmares"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Nightmares
                        </Link>
                      </li>
                    </ul>

                    {/* Headache Clinic */}
                    <ul>
                      <li>
                        <Link
                          to="/headache-clinic"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Headache Clinic
                        </Link>
                        <Link
                          to="/migraine"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Migraine
                        </Link>
                        <Link
                          to="/tension-headache"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Tension Headache
                        </Link>
                      </li>
                    </ul>

                    {/* Epilepsy Clinic */}
                    <ul>
                      <li>
                        <Link
                          to="/epilepsy-clinic"
                          className="font-semibold text-md  hover:text-blue-700"
                        >
                          Epilepsy Clinic
                        </Link>
                        <Link
                          to="/seizure"
                          className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                        >
                          Seizure
                        </Link>
                      </li>
                    </ul>
                    {/* Add other mega menu sections here for mobile if needed */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;
