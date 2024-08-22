import React from "react"
import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import LazyPageOne from "../../pages/LazyPageOne"
import LazyPageTwo from "../../pages/LazyPageTwo"
import LazyPageThree from "../../pages/LazyPageThree"

export default function LazyLayout() {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <p>This is a lazy loaded layout component</p>
      <ul>
        <li>
          <NavLink to="lazy1">Lazy Page One</NavLink>
        </li>
        <li>
          <NavLink to="lazy2">Lazy Page Two</NavLink>
        </li>
        <li>
          <NavLink to="lazy3">Lazy Page Three</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="lazy1" element={<LazyPageOne />} />
        <Route path="lazy2" element={<LazyPageTwo />} />
        <Route path="lazy3" element={<LazyPageThree />} />

        <Route path="*" element={<Navigate replace to="lazy1" />} />
      </Routes>
    </div>
  )
}
