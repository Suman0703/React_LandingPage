import React from "react";
import { Search, ShoppingBag } from 'lucide-react';
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    return (
        <header className="relative h-[300px] flex flex-col items-center justify-center text-white overflow-hidden ">

            {/*Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center -z-20 transform scale-105"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80')" }}
            />

            {/* nav*/}
            <div className="absolute inset-0 bg-black/30 -z-10" />

            <nav className="absolute top-0 w-full p-6 px-10 flex justify-between items-center z-20 border-b border-white/10">

                {/* Logo */}
                <div className="text-2xl font-bold tracking-tighter">DreamLand</div>

                {/*Links*/}
                <ul className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
                    {['Home', 'Style', 'Pages', 'Design', 'Event', 'Commercial'].map((item) => (
                        <li key={item} className="cursor-pointer hover:text-gray-300 transition-colors">{item}</li>
                    ))}
                </ul>

                {/* toggle */}
                <div className="flex gap-6 items-center">
                    <DarkModeToggle />
                    <div className="w-px h-4 bg-white/30 hidden md:block">
                    </div> {/*line */}

                    <Search size={18} className="cursor-pointer hover:text-gray-300" />
                    <ShoppingBag size={18} className="cursor-pointer hover:text-gray-300" />
                </div>

            </nav>

            {/* text*/}
            <div className="text-center mt-12 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Welcome to Dreamland</h1>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-90">
                    Think. Create. Dream.
                </p>
            </div>
        </header>
    );
};

export default Navbar;