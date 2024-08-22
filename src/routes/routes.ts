import React, { lazy } from "react"

type JSXComponent = () => JSX.Element

interface Route {
  to: string
  path: string
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent
  name: string
}

const lazy1 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPageOne" */ "../01-lazyloads/pages/LazyPageOne"
    )
)
const lazy2 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPageTwo" */ "../01-lazyloads/pages/LazyPageTwo"
    )
)
const lazy3 = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPageThree" */ "../01-lazyloads/pages/LazyPageThree"
    )
)

export const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: lazy1,
    name: "Lazy Page One",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: lazy2,
    name: "Lazy Page Two",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: lazy3,
    name: "Lazy Page Three",
  },
]
