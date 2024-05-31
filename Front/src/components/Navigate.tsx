import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Ucemy.svg?react';

export default function Navigate(): JSX.Element {
  // const navigate = useNavigate();

  return (
    <nav className="bg-gray-200 p-4 color_default">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          <Logo width={140} height={37} />
        </a>
        <div className="lg:flex lg:items-center lg:space-x-4 hidden">
          <NavLink
            key={1}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-gray-50"
                : isActive
                ? "text-white font-semibold"
                : "text-gray-200"
            }
            to="/"
          >
            Início
          </NavLink>
          <NavLink
            key={2}
            className={({ isActive, isPending }) =>
              isPending
              ? "text-gray-50"
              : isActive
              ? "text-white font-semibold"
              : "text-gray-200"
            }
            to="/products"
          >
            Meus Cursos
          </NavLink>
          <NavLink
            key={3}
            className={({ isActive, isPending }) =>
              isPending
              ? "text-gray-50"
              : isActive
              ? "text-white font-semibold"
              : "text-gray-200"
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
