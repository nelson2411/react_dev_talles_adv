import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom"
import logo from "../logo.svg"
import { LazyPageOne, LazyPageTwo, LazyPageThree } from "../01-lazyloads/pages"

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <NavLink
                  to="/lazy1"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy Page One
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to="/lazy2"
                >
                  Lazy Page Two
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                  to="/lazy3"
                >
                  Lazy Page Three
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/lazy1" element={<LazyPageOne />} />
            <Route path="/lazy2" element={<LazyPageTwo />} />
            <Route path="/lazy3" element={<LazyPageThree />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
