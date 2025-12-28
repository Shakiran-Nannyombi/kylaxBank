import Navbar from './Navbar';
import Footer from './Footer';

const AuthLayout = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen bg-[#0f172a] flex flex-col relative overflow-hidden">
            {/* AI Technical Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#0f172a_100%)]"></div>
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar className="bg-transparent border-b border-white/5" />

                <main className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
                        <h2 className="text-4xl font-black text-white tracking-tight mb-2">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-gray-400 font-medium">
                                {subtitle}
                            </p>
                        )}
                    </div>

                    <div className="sm:mx-auto sm:w-full sm:max-w-md relative group">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-white/95 backdrop-blur-xl py-10 px-6 shadow-2xl rounded-[2.5rem] sm:px-12 border border-white/20">
                            {children}
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default AuthLayout;
