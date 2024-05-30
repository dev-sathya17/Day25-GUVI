# Day 25 - GUVI

## React Todo Task

> [Source Code](./src/)  
> Explanation:
>
> First, we create a React Project using Vite.js.
> The page is styled using raw CSS only.
> Let's get into the Code flow:
>
> - In the App Component, we create required state variables such as name, description etc. useing the `useState` Hook.
> - The required UI components such as input tags and buttons are declared.
> - The value that is set to the state variables is controlled using the onChange event.
> - On button click, we add the todo value with a default completion value of false to the remaining todo values.
> - The different components such as the Todo are separated into folders for better readability.
> - We iterate the todos using `map()` function and render as many todos dynamically.
> - All CRUD Operations are executed using individual functions created in the App component and passed to the Todo Component as props.
> - The filters are set and Todos are re-rendered using the `useEffect` hook, to which a state variable is passed to its dependence array, which makes it to re-render everytime the state value changes.
> - The UI is completely responsive.
> - The output can be viewed by running the following command on terminal.
> - `npm run dev`

---
