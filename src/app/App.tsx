import AboutPageAsync from "@/pages/AboutPage/AboutPage.async";
import MainPageAsync from "@/pages/MainPage/MainPage.async";
import { Link, Route, Routes } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      } else {
        setDarkMode(false)
      }
    }, []);
  
    const toggleTheme = () => {
      setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`flex flex-col h-screen ${darkMode && 'bg-slate-800 text-white'}`}>
            <nav className={`bg-slate-200 ${darkMode && 'bg-slate-500'}`}>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex">
                            <Link to="/" className={`text-zinc-600 ${darkMode && 'text-zinc-200'} px-3 py-2 rounded-md text-md font-semibold`}>
                                Main
                            </Link>
                            <Link to="/about" className={`text-zinc-600 ${darkMode && 'text-zinc-200'} px-3 py-2 rounded-md text-md font-semibold`}>
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <Button onClick={toggleTheme} className="absolute top-0 right-0 m-2 p-2">
                    Change Theme Mode
                </Button>
            </div>

            <div className="flex-grow py-5">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPageAsync/>} />
                        <Route path="/about" element={<AboutPageAsync/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}

export default App;
