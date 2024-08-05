import logo from "../../assets/images/Navbar/logo.png";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import Instagram from "./Instagram";

const Footer = () => {
  const date = new Date();

  return (
    <footer class="bg-primary text-black font-montserrat">
      <section className="mx-auto max-w-7xl px-10 md:px-20 2xl:px-0">
        <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-16">
          <div className="flex flex-1 flex-col items-center py-5 text-center md:hidden lg:flex lg:items-start lg:text-left">
            <div className="transition-transform duration-300 hover:scale-105 h-[50px]">
              <a href="/home">
                <img src={logo} alt="Logo" className="w-full h-full" />
              </a>
            </div>
            <p className="mt-4 text-xl opacity-70">
              123 Kandy road, Ampitiya Thalathuoya +94 1239860
            </p>
            <div className="mt-4 flex gap-2">
              <div className="cursor-pointer transition-transform duration-300 hover:scale-125">
                <a href="/">
                  <Twitter size="30" fill="black" />
                </a>
              </div>
              <div className="cursor-pointer transition-transform duration-300 hover:scale-125">
                <a href="/">
                  <Facebook size="30" fill="black" />
                </a>
              </div>
              <div className="cursor-pointer transition-transform duration-300 hover:scale-125">
                <a href="/">
                  <Instagram size="30" fill="black" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-around lg:justify-between py-5 text-center md:text-left lg:gap-8 xl:gap-16 flex-1">
            <menu>
              <h6 className="uppercase tracking-widest text-sm opacity-70">
                Company
              </h6>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">About</a>
                </li>
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Features</a>
                </li>
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Works</a>
                </li>
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Careers</a>
                </li>
              </ul>
            </menu>
            <menu>
              <h6 className="uppercase tracking-widest text-sm opacity-70">
                Help
              </h6>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Customer Support</a>
                </li>
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Delivery Details</a>
                </li>
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Terms and Conditions</a>
                </li>
                <li className="transition-opacity duration-300 hover:opacity-70">
                  <a href="/">Privacy Policy</a>
                </li>
              </ul>
            </menu>
          </div>
          <div className="flex flex-1 justify-center gap-4 py-5 text-center md:justify-between md:text-left">
            <div className="hidden flex-col md:flex lg:hidden">
              <div className="transition-transform duration-300 hover:scale-105 h-[50px] w-fit">
                <a href="/home">
                  <img src={logo} alt="Logo" className="w-full h-full" />
                </a>
              </div>
              <p className="mt-4 text-xl opacity-70">
                123 Kandy road, Ampitiya Thalathuoya +94 1239860
              </p>
              <div className="mt-4 flex gap-2">
                <div className="cursor-pointer transition-transform duration-300 hover:scale-125">
                  <a href="/">
                    <Twitter size="30" fill="black" />
                  </a>
                </div>
                <div className="cursor-pointer transition-transform duration-300 hover:scale-125">
                  <a href="/">
                    <Facebook size="30" fill="black" />
                  </a>
                </div>
                <div className="cursor-pointer transition-transform duration-300 hover:scale-125">
                  <a href="/">
                    <Instagram size="30" fill="black" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h6 className="uppercase tracking-widest text-sm opacity-70">
                Subscribe to our Newsletter
              </h6>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-4 w-[30ch] rounded-lg border border-black px-4 py-2 text-black"
                  required
                />
                <br />
                <button
                  type="submit"
                  className="mt-4 rounded-lg bg-black px-4 py-2 text-white transition-transform duration-300 hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="py-5 text-center">
          <hr className="border-t-black opacity-70" />
          <p className="mt-4 text-xs">
            &#169; Copyright {date.getFullYear()}, All Rights Reserved by Logo
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
