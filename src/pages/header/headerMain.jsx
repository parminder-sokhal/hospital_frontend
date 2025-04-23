import React, { useState, useEffect } from "react";

function HeaderMain() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownNavbarOpen, setIsDropdownNavbarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbarDropdown = () => {
    setIsDropdownNavbarOpen(!isDropdownNavbarOpen);
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

  const handleDropdownHover = () => {
    setIsDropdownOpen(true);
  };

  const handleNavbarDropdownHover = () => {
    setIsDropdownNavbarOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleNavbarDropdownLeave = () => {
    setIsDropdownNavbarOpen(false);
  };

  return (
    <nav className="bg-white border-black top-10 fixed w-full z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex justify-between items-center">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/logo/loonalogo.png"
              className="h-16"
              alt="Loonahospital Logo"
            />
          </a>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex text-lg flex-grow justify-center">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  About
                </a>
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
                  className={`z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 absolute mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-black">
                    <li>
                      <a href="/Pictures" className="block px-4 py-2 hover:bg-gray-100">
                        Pictures Gallery
                      </a>
                    </li>
                    <li>
                      <a href="/Youtube" className="block px-4 py-2 hover:bg-gray-100">
                        Video Gallery
                      </a>
                    </li>

                    <li>
                      <a href="/Instagram" className="block px-4 py-2 hover:bg-gray-100">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block text-xl">
            <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Book Appointment
            </button>
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
        >
          {isDropdownOpen && (
            <div className="hidden md:block mt-2 absolute left-0 w-full bg-white z-40">
              <div className="grid px-40 py-5 mx-auto text-gray-900 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
                <ul>
                  <li>
                    <div className="font-semibold text-md">
                      Psychiatry treatment
                    </div>
                    <a
                      href="/depression"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      depression
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      anxiety
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      bipolar disorder
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      schizophrenia
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      OCD
                    </a>
                  </li>
                </ul>

                {/* Counselling and Therapy */}
                <ul>
                  <li>
                    <div className="font-semibold">Counselling and Therapy</div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      CBT
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      DBT
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      individual counselling
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      stress management
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      behaviour therapy
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      relaxation therapy
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      social skills training
                    </a>
                  </li>
                </ul>

                {/* Children Mental Health */}
                <ul>
                  <li>
                    <div className="font-semibold">
                      Mental Health Issues and Children
                    </div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      ADHD
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      autism
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      incontinence
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      behaviour issues
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      conduct disorder
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      learning disability
                    </a>
                  </li>
                </ul>

                {/* De-addiction Programme */}
                <ul>
                  <li>
                    <div className="font-semibold">De-addiction Programme</div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      motivation enhancement therapy
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      relapse prevention therapy
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      individual counselling
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      motivation enhancement by hypnosis
                    </a>
                  </li>
                </ul>

                {/* Sexual Wellness */}
                <ul>
                  <li>
                    <div className="font-semibold">Sexual Wellness Program</div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      premature ejaculation
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      erectile dysfunction
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      reduced or high libido
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      anorgasmia
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      DHAT syndrome
                    </a>
                  </li>
                </ul>
                {/* Sleep Clinic */}
                <ul>
                  <li>
                    <div className="font-semibold">Sleep Clinic</div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      insomnia
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      disturbed sleep
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      non-refreshing sleep
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      sleep talking
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      sleep walking
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      nightmares
                    </a>
                  </li>
                </ul>

                {/* Headache Clinic */}
                <ul>
                  <li>
                    <div className="font-semibold">Headache Clinic</div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      migraine
                    </a>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      tension headache
                    </a>
                  </li>
                </ul>

                {/* Epilepsy Clinic */}
                <ul>
                  <li>
                    <div className="font-semibold">Epilepsy Clinic</div>
                    <a
                      href="#"
                      className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                    >
                      seizure
                    </a>
                  </li>
                </ul>

                {/* Add the rest of your columns here... */}
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
                <a
                  href="/"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  About
                </a>
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
                  className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-2 ${isDropdownNavbarOpen ? "block" : "hidden"}`}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <a href="/Pictures" className="block px-4 py-2 hover:bg-gray-100">
                        Pictures Gallery
                      </a>
                    </li>
                    <li>
                      <a href="/youtube" className="block px-4 py-2 hover:bg-gray-100">
                        video Gallery
                      </a>
                    </li>
                    <li>
                      <a href="/Instagram" className="block px-4 py-2 hover:bg-gray-100">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black hover:bg-gray-100"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* ✅ Mobile Mega Menu */}
            {isDropdownOpen && (
              <div className=" overflow-y-auto pt-10 bg-white ">
                <div className="grid gap-6 sm:grid-cols-2">
                  <ul>
                    <li>
                      <div className="font-semibold text-md">
                        Psychiatry treatment
                      </div>
                      <a
                        href="/depression"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        depression
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        anxiety
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        bipolar disorder
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        schizophrenia
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        OCD
                      </a>
                    </li>
                  </ul>

                  {/* Counselling and Therapy */}
                  <ul>
                    <li>
                      <div className="font-semibold">
                        Counselling and Therapy
                      </div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        CBT
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        DBT
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        individual counselling
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        stress management
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        behaviour therapy
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        relaxation therapy
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        social skills training
                      </a>
                    </li>
                  </ul>

                  {/* Children Mental Health */}
                  <ul>
                    <li>
                      <div className="font-semibold">
                        Mental Health Issues and Children
                      </div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        ADHD
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        autism
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        incontinence
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        behaviour issues
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        conduct disorder
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        learning disability
                      </a>
                    </li>
                  </ul>

                  {/* De-addiction Programme */}
                  <ul>
                    <li>
                      <div className="font-semibold">
                        De-addiction Programme
                      </div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        motivation enhancement therapy
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        relapse prevention therapy
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        individual counselling
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        motivation enhancement by hypnosis
                      </a>
                    </li>
                  </ul>

                  {/* Sexual Wellness */}
                  <ul>
                    <li>
                      <div className="font-semibold">
                        Sexual Wellness Program
                      </div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        premature ejaculation
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        erectile dysfunction
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        reduced or high libido
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        anorgasmia
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        DHAT syndrome
                      </a>
                    </li>
                  </ul>
                  {/* Sleep Clinic */}
                  <ul>
                    <li>
                      <div className="font-semibold">Sleep Clinic</div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        insomnia
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        disturbed sleep
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        non-refreshing sleep
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        sleep talking
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        sleep walking
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        nightmares
                      </a>
                    </li>
                  </ul>

                  {/* Headache Clinic */}
                  <ul>
                    <li>
                      <div className="font-semibold">Headache Clinic</div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        migraine
                      </a>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        tension headache
                      </a>
                    </li>
                  </ul>

                  {/* Epilepsy Clinic */}
                  <ul>
                    <li>
                      <div className="font-semibold">Epilepsy Clinic</div>
                      <a
                        href="#"
                        className="block p-1 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-700"
                      >
                        seizure
                      </a>
                    </li>
                  </ul>

                  {/* Add other mega menu sections here for mobile if needed */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderMain;
