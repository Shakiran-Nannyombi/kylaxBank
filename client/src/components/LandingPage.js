import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Globe,
  Cpu,
  BarChart3
} from 'lucide-react';
import BackgroundPaths from './BackgroundPaths';
import ScrollReveal from './ScrollReveal';
import Navbar from './Navbar';
import Footer from './Footer';
import customer1 from '../assets/customer_profile_1_1766910041142.png';
import customer2 from '../assets/customer_profile_2_1766910061382.png';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <BackgroundPaths
        title="Fairer Faster Loan Decisions"
        onCTA={() => navigate('/apply')}
      />

      <ScrollReveal>
        {/* Trust Stats */}
        <section className="bg-white/50 backdrop-blur-sm border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-12 lg:grid lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">$2.4B+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Loans Disbursed</div>
            </div>
            <hr className="lg:hidden my-6 border-gray-100" />
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-1">98.2%</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Approval Speed</div>
            </div>
            <hr className="lg:hidden my-6 border-gray-100" />
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-1"><Star className="inline h-8 w-8 text-yellow-500 mr-2 mb-1" />4.9/5</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">User Rating</div>
            </div>
            <hr className="lg:hidden my-6 border-gray-100" />
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-1">256-bit</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">Military Security</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Intelligent Lending
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform revolutionizes the lending experience by looking at the whole person, not just a score.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <ScrollReveal className="h-full">
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 border-2 border-transparent hover:border-blue-500/20 h-full">
              <div className="bg-blue-100 w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">AI Holisti-Score™</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Proprietary AI analyzes thousands of behavioral and financial data points for a complete 360° credit portrait.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3"><CheckCircle className="h-4 w-4 text-green-600" /></div>
                  Real-time cash flow
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3"><CheckCircle className="h-4 w-4 text-green-600" /></div>
                  Alternative insights
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Feature 2 */}
          <ScrollReveal className="h-full">
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-300 border-2 border-transparent hover:border-purple-500/20 h-full">
              <div className="bg-purple-100 w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Instant Approval</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Don't wait for days. Our automated engine provides preliminary decisions in under 60 seconds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3"><CheckCircle className="h-4 w-4 text-green-600" /></div>
                  24/7 Processing
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3"><CheckCircle className="h-4 w-4 text-green-600" /></div>
                  Paperless worklow
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Feature 3 */}
          <ScrollReveal className="h-full">
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 border-2 border-transparent hover:border-indigo-500/20 h-full">
              <div className="bg-indigo-100 w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Cyber-Fortress</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your financial data is protected by high-grade encryption and privacy-focused AI logic.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3"><CheckCircle className="h-4 w-4 text-green-600" /></div>
                  End-to-end RSA
                </li>
                <li className="flex items-center text-gray-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full mr-3"><CheckCircle className="h-4 w-4 text-green-600" /></div>
                  Privacy-first AI
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it Works / AI Section */}
      <section className="bg-gray-50 py-24 border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-16">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <div className="bg-blue-600 p-2 rounded-lg mr-4"><Cpu className="h-6 w-6 text-white" /></div>
                How Holisti-Score™ Works
              </h3>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-blue-600">1</div>
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">Secure Data Aggregation</h5>
                    <p className="text-gray-600">We securely connect to traditional credit bureaus and your bank accounts to gather a full financial picture.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-purple-600">2</div>
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">Pattern Recognition AI</h5>
                    <p className="text-gray-600">Our neural networks identify positive payment habits—like consistent utility payments—that bureaus often ignore.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center font-bold text-indigo-600">3</div>
                  <div>
                    <h5 className="text-xl font-bold text-gray-900 mb-2">Holistic Scoring</h5>
                    <p className="text-gray-600">You receive a fair, transparent score that reflects your actual creditworthiness, leading to better rates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border border-blue-50 relative">
                <div className="flex items-center justify-between mb-8">
                  <h6 className="font-bold text-gray-900">Live AI Assessment</h6>
                  <div className="flex items-center text-green-500 text-sm font-bold bg-green-50 px-3 py-1 rounded-full animate-pulse">
                    <Globe className="h-4 w-4 mr-2" /> Live
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-sm">Credit History</span>
                    </div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[75%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium text-sm">Cash Flow Stability</span>
                    </div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border-2 border-green-100">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-green-500" />
                      <span className="font-bold text-sm">Holisti-Score™</span>
                    </div>
                    <div className="text-green-600 font-black">782 / 850</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-3xl shadow-lg animate-bounce">
                  <Quote className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
          <p className="text-gray-600">Real stories from people who found a better way to bank.</p>
        </div>

        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-10 rounded-[2.5rem] relative">
            <Quote className="absolute top-8 right-8 h-12 w-12 text-blue-100" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <img src={customer1} alt="Sarah J" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Sarah J.</div>
                <div className="text-sm text-blue-600 font-medium">Software Engineer</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic relative z-10 leading-relaxed">
              "Traditional banks kept focusing on a single late payment from five years ago. Kylax's AI saw my current income and steady savings. I got approved for my dream home loan in hours!"
            </p>
          </div>

          <div className="bg-gray-50 p-10 rounded-[2.5rem] relative">
            <Quote className="absolute top-8 right-8 h-12 w-12 text-purple-100" />
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <img src={customer2} alt="Mark T" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md" />
              <div className="text-left">
                <div className="font-bold text-gray-900">Mark T.</div>
                <div className="text-sm text-purple-600 font-medium">Restaurant Owner</div>
              </div>
            </div>
            <p className="text-lg text-gray-700 italic relative z-10 leading-relaxed">
              "Running a business means my income fluctuates monthly. Other lenders didn't understand that. Kylax's Holisti-Score™ recognized my overall business health and stability."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Future of Lending?
          </h3>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of satisfied customers who've received fairer, faster loan decisions
          </p>
          <button
            onClick={() => navigate('/apply')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
