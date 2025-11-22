import { Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => (
  <footer className="mt-10 bg-white dark:bg-slate-950 light:rounded-t-3xl shadow-sm border border-slate-200 dark:border-slate-800 px-10 py-10 text-sm text-slate-600 dark:text-slate-300">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      
      <div className="ml-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-9 w-9 rounded-xl border-2 border-orange-500 flex items-center justify-center">
            <span className="text-orange-500 text-lg">◆</span>
          </div>
          <span className="text-xl font-semibold text-slate-900 dark:text-white">
            Opion
          </span>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          Ease of shopping is our main focus. With powerful search features and
          customizable filters, you can easily find the products you are looking for.
        </p>

        <div className="flex items-center gap-3 mt-5">
          <button className="h-9 w-9 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center">
            <FaFacebookF />
          </button>
          <button className="h-9 w-9 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center">
            <FaInstagram />
          </button>
          <button className="h-9 w-9 rounded-full bg-slate-900 dark:bg-slate-700 text-white flex items-center justify-center">
            <FaLinkedinIn />
          </button>
        </div>

        {/* Newsletter */}
        <p className="mt-6 font-semibold text-slate-900 dark:text-white">
          Subscribe to Newsletter
        </p>

        <div className="mt-3 flex items-center bg-slate-50 dark:bg-slate-800 rounded-full px-4 py-2 border border-slate-100 dark:border-slate-700">
          <span className="mr-2 text-slate-400 dark:text-slate-300 text-sm"><Mail size={15}/></span>

          <input
            className="flex-1 bg-transparent outline-none text-xs text-slate-700 dark:text-slate-200 
                       placeholder:text-slate-400 dark:placeholder:text-slate-500"
            placeholder="Enter Your Email Here"
          />
        </div>
      </div>

      {/* Column 2 */}
      <div className="ml-8">
        <div className="font-semibold mb-3 text-slate-900 dark:text-white">Get Started</div>
        <ul className="space-y-2">
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">Service</li>
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">Contact Us</li>
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">Affiliate Program</li>
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">About Us</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="ml-6">
        <div className="font-semibold mb-3 text-slate-900 dark:text-white">Explore</div>
        <ul className="space-y-2">
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">Dashboard</li>
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">Platform</li>
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">Workout Library</li>
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">App Design</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div>
        <div className="font-semibold mb-3 text-slate-900 dark:text-white">Company</div>
        <ul className="space-y-2">
          <li className="hover:text-slate-800 dark:hover:text-white cursor-pointer">About Us</li>
        </ul>
      </div>
    </div>

    {/* bottom section */}
    <div className="mt-8 border-t border-slate-100 dark:border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
      <span>2024 MaxFit</span>
      <span>Twitter — Instagram — Facebook</span>
    </div>
  </footer>
);
