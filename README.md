# Fake Ecommerce Store

## General information

This repository holds a **Fake Ecommerce Store**. 🧢

It was developed with **React JS**, **Typescript** and it is based on the following API: https://fakestoreapi.com/docs! 🚀

The app can be executed writing `npm run dev` from the root directory

<hr>

## Suggested Improvements:
- I would install **react query** that provides advantages like:
  -  Eliminates the need for useEffect and useState to handle API requests
  -  Provides automatic **caching**, **synchronization**, and background updates
  -  Reduces boilerplate compared to traditional state management
  -  Have an easy way to refetch queries if an error occurred in the backend

- I would create an **empty state** component/page with an action button and render it when an error occurred in the backend. That button when clicked, is the one that would refetch the failed query

- I would install **styled components** and use it to create **reusable** styled components. Examples:
  - `<Button />`
  - Texts inside a **/typography** folder: `<H1 />`, `<Paragraph />`, `<Select />`, `<Option />`, and so on.
  - `<Image />`
  - `<CenteredContainer />`
  - etc

- I would use **i18n** (internationalization) to be able to use the app in more than one languague

- Use **media queries** based on different width breakpoints to support responsive design

- Improve **a11y** (accessibility) using:
  - ARIA attributes that helps screen readers interpret elements correctly
  - A tool like **WebAIM Contrast Checker** or **browser DevTool**s to ensure Proper Color Contrast
  - **Alternative Text** (alt html attribute) for Images & Icons for screen readers
  - A library like eslint-plugin-jsx-a11y that lints JSX for accessibility issues
 
- I would implement **unit tests** to improve code quality

- I would create either a `<Loading />` spinner or a `<Skeleton />` component to render them when the api is fetching data.
