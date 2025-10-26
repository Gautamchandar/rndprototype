import React, { useState, useRef, useCallback } from 'react';
import { Menu, X, Search } from 'lucide-react';

const Navbar = ({ 
    scrollToProducts, 
    scrollToPartners, 
    scrollToContacts, 
    navigateToHome, 
    navigateToNestedProducts 
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);

    const highlightColor = 'text-amber-400';

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
        if (!isMenuOpen) setIsSearchOpen(false);
    }, [isMenuOpen]);

    const toggleSearch = useCallback(() => {
        setIsSearchOpen(prev => {
            const newState = !prev;
            if (newState) {
                setTimeout(() => searchInputRef.current?.focus(), 100);
            }
            return newState;
        });
        if (isMenuOpen) setIsMenuOpen(false);
    }, [isMenuOpen]);

    
    const linkStyle = "relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-amber-400 before:transition-all before:duration-300 hover:before:w-full hover:text-amber-400 py-1";

    const handleMobileLinkClick = (action) => {
        action && action();
        toggleMenu(); 
    };

    return (
        <nav className="bg-gray-900 text-white shadow-xl sticky top-0 z-50 border-b border-gray-800 backdrop-blur-sm bg-opacity-95">

            {/* Navigation Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Logo  */}
                <div 
                    className="logo flex-shrink-0 cursor-pointer"
                    onClick={navigateToHome} 
                >
                    <div className="w-32 md:w-44 h-auto font-extrabold text-2xl text-white tracking-wider">
                        <h1>R & D</h1>
                    </div>
                </div>

                <div className="flex items-center space-x-2 md:space-x-4 h-full">

                    <ul className={`hidden md:flex items-center gap-8 text-sm font-medium h-full`}>

                        <li>
                            <button onClick={navigateToHome} className={linkStyle}>
                                Home
                            </button>
                        </li>

                        <li>
                            <button 
                                onClick={navigateToNestedProducts} 
                                className={linkStyle}
                            >
                                Projects 
                            </button>
                        </li>

                        <li>
                            <button onClick={scrollToProducts} className={linkStyle}>
                                Product-Technologies
                            </button>
                        </li>

                        <li>
                            <button onClick={scrollToPartners} className={linkStyle}>
                                Organizers
                            </button>
                        </li>

                        <li>
                            <button onClick={scrollToContacts} className={linkStyle}>
                                Contacts
                            </button>
                        </li>

                    </ul>
                    <button
                        onClick={toggleSearch}
                        className={`text-white p-2 rounded-full hover:bg-gray-800 transition-all duration-300 z-30
                        ${isSearchOpen ? highlightColor : 'hover:text-amber-400'}
                        transform hover:scale-105`}
                        aria-label="Toggle Search"
                    >
                        {isSearchOpen ? <X size={24} className="animate-in fade-in rotate-90" /> : <Search size={24} className="animate-in fade-in" />}
                    </button>

                    <button
                        onClick={toggleMenu}
                        className={`text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 md:hidden
                        transform hover:scale-105 z-30 ${isMenuOpen ? highlightColor : 'hover:text-amber-400'}`}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <div
                className={`absolute w-full left-0 bg-gray-900 shadow-2xl transition-all duration-500 ease-in-out border-b border-gray-700
                ${isSearchOpen ? 'max-h-24 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}
                aria-hidden={!isSearchOpen}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center">
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Start typing to search documentation or products..."
                            className="w-full py-3 pl-12 pr-6 text-lg rounded-xl text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-4 transition-all duration-200"
                            onBlur={() => {
                                setTimeout(() => {
                                    if (!isMenuOpen) setIsSearchOpen(false);
                                }, 100);
                            }}
                        />
                        <Search className="absolute left-4 text-gray-500" size={24} />
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out absolute top-16 left-0 w-full bg-gray-900 border-t border-gray-800 shadow-xl
                ${isMenuOpen ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'}`}
            >
                <ul className="flex flex-col gap-1 text-center text-base font-medium">
                    
                    <li>
                        <button
                            onClick={() => handleMobileLinkClick(navigateToHome)}
                            className="block w-full py-3 hover:bg-gray-800 text-white transition-colors duration-200"
                        >
                            Home
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => handleMobileLinkClick(navigateToNestedProducts)}
                            className="block w-full py-3 hover:bg-gray-800 text-white transition-colors duration-200"
                        >
                            Projects
                        </button>
                    </li>

                    <li>
                        <button
                            onClick={() => handleMobileLinkClick(scrollToProducts)}
                            className="block w-full py-3 hover:bg-gray-800 text-white transition-colors duration-200"
                        >
                            Product-Technologies
                        </button>
                    </li>
                    
                    <li>
                        <button
                            onClick={() => handleMobileLinkClick(scrollToPartners)}
                            className="block w-full py-3 hover:bg-gray-800 text-white transition-colors duration-200"
                        >
                            Organizers
                        </button>
                    </li>
                    
                    <li>
                        <button
                            onClick={() => handleMobileLinkClick(scrollToContacts)}
                            className="block w-full py-3 hover:bg-gray-800 text-white transition-colors duration-200"
                        >
                            Contacts
                        </button>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );

};

export default Navbar;