import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Paste from "./components/Paste"
import ViewPaste from "./components/ViewPaste"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/pastes",
      element: <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar/>
      <Paste/>
    </div>
    },
    {
      path:"/pastes/:id",
      element: <div className="w-full min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar/>
      <ViewPaste/>
    </div>
    }
  ]
)

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App
