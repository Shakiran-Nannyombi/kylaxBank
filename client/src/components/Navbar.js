import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = ({ className = "", isDark: customIsDark }) => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const isDark = customIsDark !== undefined ? customIsDark : (className.includes('bg-transparent') || className.includes('text-white'));

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${className || 'bg-white shadow-md'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
                        <div className="bg-white p-1 rounded-lg border shadow-sm">
                            <img src={logo} alt="Kylax Bank Logo" className="h-10 w-10 object-contain" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
                                Kylax Bank
                            </h1>
                            <p className={`text-[10px] uppercase tracking-widest mt-1 font-bold ${isDark ? 'text-blue-200' : 'text-gray-500'}`}>AI Native Banking</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors`}>Home</Link>

                        {/* Products Dropdown */}
                        <div className="relative group">
                            <button
                                onMouseEnter={() => setActiveDropdown('products')}
                                onMouseLeave={() => setActiveDropdown(null)}
                                className={`flex items-center space-x-1 ${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors py-8`}
                            >
                                <span>Products</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                onMouseEnter={() => setActiveDropdown('products')}
                                onMouseLeave={() => setActiveDropdown(null)}
                                className={`absolute left-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 transition-all duration-200 transform ${activeDropdown === 'products' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                            >
                                <Link to="/products/personal" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Personal Loans</Link>
                                <Link to="/products/business" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Business Loans</Link>
                                <Link to="/products/auto" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Auto Loans</Link>
                            </div>
                        </div>

                        {/* Company Dropdown */}
                        <div className="relative group">
                            <button
                                onMouseEnter={() => setActiveDropdown('company')}
                                onMouseLeave={() => setActiveDropdown(null)}
                                className={`flex items-center space-x-1 ${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors py-8`}
                            >
                                <span>Company</span>
                                <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                onMouseEnter={() => setActiveDropdown('company')}
                                onMouseLeave={() => setActiveDropdown(null)}
                                className={`absolute left-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 transition-all duration-200 transform ${activeDropdown === 'company' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                            >
                                <Link to="/company/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">About Us</Link>
                                <Link to="/company/careers" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Careers</Link>
                                <Link to="/company/contact" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Contact</Link>
                            </div>
                        </div>

                        <Link to="/legal/security" className={`${isDark ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-blue-600'} font-medium transition-colors`}>Security</Link>

                        <div className={`h-6 w-px ${isDark ? 'bg-white/10' : 'bg-gray-200'} mx-2`}></div>

                        <button
                            onClick={() => navigate('/login')}
                            className={`text-sm ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-gray-500 hover:text-gray-900'} font-medium`}
                        >
                            Log In
                        </button>

                        <button
                            onClick={() => navigate('/apply')}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                        >
                            Apply Now
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-4 pt-4 pb-8 space-y-4">
                    <Link to="/" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Home</Link>
                    <div className="space-y-2">
                        <p className="px-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Products</p>
                        <Link to="/products/personal" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Personal Loans</Link>
                        <Link to="/products/business" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Business Loans</Link>
                        <Link to="/products/auto" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Auto Loans</Link>
                    </div>
                    <div className="space-y-2">
                        <p className="px-2 text-xs font-bold text-gray-400 uppercase tracking-widest">Company</p>
                        <Link to="/company/about" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">About Us</Link>
                        <Link to="/company/careers" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Careers</Link>
                        <Link to="/company/contact" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Contact</Link>
                    </div>
                    <div className="pt-4 border-t space-y-4">
                        <Link to="/legal/security" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-lg">Security</Link>
                        <button
                            onClick={() => navigate('/login')}
                            className="w-full text-center py-3 text-base font-medium text-gray-600 border rounded-lg"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => navigate('/apply')}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold shadow-lg"
                        >
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
