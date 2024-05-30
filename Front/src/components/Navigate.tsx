import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigate(): JSX.Element {
  // const navigate = useNavigate();

  return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/homepage" className="text-xl font-bold">
          @Shoes Store
        </a>
        <div className="lg:flex lg:items-center lg:space-x-4 hidden">
          <NavLink
            key={1}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-500"
                : isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            }
            to="/homepage"
          >
            Homepage
          </NavLink>
          <NavLink
            key={2}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-500"
                : isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            }
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            key={3}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-500"
                : isActive
                ? "text-blue-500 font-semibold"
                : "text-gray-700"
            }
            to="/Aula"
          >
            Aula
          </NavLink>
        </div>
        <button className="lg:hidden" aria-controls="basic-navbar-nav">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="hidden lg:block" id="basic-navbar-nav">
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink
                key={1}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-500"
                    : isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-700"
                }
                to="/homepage"
              >
                Homepage
              </NavLink>
            </li>
            <li>
              <NavLink
                key={2}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "text-gray-500"
                    : isActive
                    ? "text-blue-500 font-semibold"
                    : "text-gray-700"
                }
                to="/products"
              >
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
