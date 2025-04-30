import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo */}
        <div className="col-span-1 md:col-span-4 justify-self-center">
          <Image
            src="/logodark.png"
            alt="TopeAanu"
            width={150}
            height={50}
          />
        </div>

        {/* About */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-2">We Are Authentic</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            iste neque sunt. Minus, illo quas. Lorem ipsum dolor sit amet.
            Lorem, ipsum dolor.
          </p>
        </div>

        {/* Newsletter */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-2">Newsletter</h3>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, in?
            Lorem ipsum dolor sit amet.
          </p>
          <form name="contact" method="POST" data-netlify="true">
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              className="w-[90%] p-2 mb-2 text-black"
            />
            <button
              type="submit"
              className="w-[90%] bg-teal-600 text-white py-2 px-6 rounded hover:opacity-80 transition-opacity duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Site Links */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-xl font-bold mb-2">Site Links</h3>
          <ul>
            <li className="py-2 border-b border-dotted border-gray-600 w-[90%]">
              <Link
                href="/help"
                className="text-white hover:text-teal-600 transition-colors duration-300"
              >
                Help & Support
              </Link>
            </li>
            <li className="py-2 border-b border-dotted border-gray-600 w-[90%]">
              <Link
                href="/privacy"
                className="text-white hover:text-teal-600 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="py-2 border-b border-dotted border-gray-600 w-[90%]">
              <Link
                href="/about"
                className="text-white hover:text-teal-600 transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li className="py-2 border-b border-dotted border-gray-600 w-[90%]">
              <Link
                href="/contact"
                className="text-white hover:text-teal-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Join Community */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-bold mb-2">Join Our Community</h2>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            nemo? Lorem ipsum dolor sit amet consectetur.
          </p>
          <Link
            href="/join"
            className="inline-block bg-fuchsia-500 text-white py-2 px-6 rounded hover:opacity-80 transition-opacity duration-300"
          >
            Join Now
          </Link>
        </div>

        {/* Social Icons */}
        <div className="col-span-1 md:col-span-4 justify-self-center">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-facebook fa-1x mr-6"></i>
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-twitter fa-1x mr-6"></i>
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-instagram fa-1x mr-6"></i>
          </a>
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-youtube fa-1x mr-6"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="col-span-1 md:col-span-4 text-center pt-4 border-t border-dashed border-white text-base">
          <p>&copy; TopeAanu 2023, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
