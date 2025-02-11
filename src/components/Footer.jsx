import { Link, NavLink } from "react-router-dom";
import logo from "../assets/footerlogo.png";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} alt="" className="h-16" />
          </Link>
        </div>
        <p className="text-center text-logo font-medium py-2 text-xs md:text-base w-full xl:w-[50%] mx-auto">
        Voluntry is your trusted platform for managing volunteers effortlessly. Unite, coordinate, and empower communities to create meaningful change and achieve impactful results together.
        </p>
        <div className="divider mt-0"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-btm-footer ">Services</h6>
            <NavLink to="/" className="link link-hover text-logo">
            Volunteer Opportunities
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
            Event Coordination
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
            Volunteer Training
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
            Community Projects
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-btm-footer">Company</h6>
            <NavLink to="/" className="link link-hover text-logo">
              About Us
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
              Careers
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
              Contact
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
            Blog
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-btm-footer">Legal</h6>
            <NavLink to="/" className="link link-hover text-logo">
              Terms of Service
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
              Privacy Policy
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
              Cookie Policy
            </NavLink>
            <NavLink to="/" className="link link-hover text-logo">
            Accessibility
            </NavLink>
          </nav>
          <nav className="flex flex-col items-center ">
            <h6 className=" text-lg font-bold text-btm-footer">Join With Us</h6>
            <div className="flex justify-center items-center gap-4 pt-3">
              <NavLink to="https://www.facebook.com/bd.gazi97">
                <img src={fb} alt="" className="h-12" />
              </NavLink>
              <NavLink to="https://github.com/rakib-gazi/">
                <img src={github} alt="" className="h-12" />
              </NavLink>
              <NavLink to="/">
                <img src={x} alt="" className="h-12" />
              </NavLink>
              <NavLink to="/">
                <img src={linkedin} alt="" className="h-12" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex justify-center items-center bg-btm-footer py-8">
        <p className="text-white text-center font-semibold text-xs md:text-base">
          @Copyright 2025, Voluntry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
