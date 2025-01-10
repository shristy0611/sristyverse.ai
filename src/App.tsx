import React, { useState } from 'react';
import { Layout, Grid, Settings, Sparkles, Brain, MessageCircle, FileText, BarChart, Check, Send, Mail, Phone, MapPin, ArrowRight, Users, Code, Shield } from 'lucide-react';
import { OCRWorkspace } from './components/OCRWorkspace';
import { SentimentWorkspace } from './components/SentimentWorkspace';
import { ChatbotWorkspace } from './components/ChatbotWorkspace';
import { RecommendationWorkspace } from './components/RecommendationWorkspace';
import { WorkspaceType } from './types';
import { Toggle } from './components/Toggle';
import { usePricing } from './hooks/usePricing';
import { NeuralNetwork } from './components/NeuralNetwork';
import { SolutionsSlider } from './components/SolutionsSlider';

function App() {
  const [activeWorkspace, setActiveWorkspace] = useState<WorkspaceType | null>(null);
  const {
    options: pricingOptions,
    toggleCurrency,
    toggleBillingPeriod,
    isLoading,
    getPrice,
    exchangeRate
  } = usePricing();

  const solutions = [
    {
      icon: Brain,
      title: 'Advanced Agentic AI Chatbot',
      type: 'chatbot' as WorkspaceType,
      description: "This isn't just another chatbot. Our Agentic AI Chatbot is a sophisticated AI assistant capable of understanding context, learning from interactions, and performing complex tasks autonomously. Unlike basic chatbots, it goes beyond answering FAQs, acting as a virtual team member that grows smarter with time.",
      details: [
        'Customer Engagement & Support: Manage customer inquiries 24/7 with accurate, context-aware responses, reducing wait times and improving satisfaction.',
        'Sales Assistance: Automate lead qualification, product recommendations, and follow-ups, freeing your team to focus on closing deals.',
        'Internal Operations: Automate repetitive tasks like meeting scheduling, inventory updates, and status reporting, enhancing operational efficiency.',
        'Simple Yet Powerful Use Case:',
        'A restaurant uses the chatbot to handle reservations, upsell special menu items, and gather feedback—all seamlessly integrated into their workflow.'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Advanced Sentiment Analyzer',
      type: 'sentiment' as WorkspaceType,
      description: 'Our Sentiment Analyzer is a powerful AI system that understands human emotions, context, and subtle nuances in written text. It\'s not just about knowing if feedback is positive or negative—it captures the "why" behind the sentiment.',
      details: [
        'Customer Insights: Analyze online reviews, emails, or social media comments to understand what customers feel about your products or services.',
        'Employee Feedback: Gauge team sentiment from survey responses or internal chats to identify areas for improvement.',
        'Marketing Impact: Measure how campaigns resonate with your audience and fine-tune your messaging.',
        'Simple Yet Powerful Use Case:',
        'A boutique owner uses the sentiment analyzer to understand customer preferences from product reviews, enabling them to stock items customers truly love.'
      ]
    },
    {
      icon: BarChart,
      title: 'Advanced Recommendation System',
      type: 'recommendation' as WorkspaceType,
      description: 'Our Recommendation System is a next-generation AI tool designed to provide highly personalized suggestions based on customer preferences and behavior. It doesn\'t just recommend—it creates a tailored experience for each user.',
      details: [
        'Product Recommendations: Boost sales by showing customers exactly what they\'re looking for—or didn\'t know they wanted.',
        'Service Personalization: Suggest relevant services or upgrades based on past interactions or preferences.',
        'Content Curation: Deliver personalized content (articles, videos, or tutorials) to engage and retain your audience.',
        'Simple Yet Powerful Use Case:',
        'A bookshop uses the system to recommend books to readers based on their previous purchases, increasing sales and customer loyalty.'
      ]
    },
    {
      icon: FileText,
      title: 'Advanced OCR System',
      type: 'ocr' as WorkspaceType,
      description: 'Our OCR (Optical Character Recognition) System is a state-of-the-art tool that not only extracts text from images but also understands the structure and meaning of documents. With multi-language support and handwriting recognition, it\'s the perfect solution for digitizing information.',
      details: [
        'Document Management: Automate the extraction of key information from invoices, contracts, or receipts, saving hours of manual work.',
        'Inventory Management: Quickly process handwritten inventory logs or delivery notes into digital records.',
        'Compliance: Digitize and organize legal documents for easy access and better regulatory compliance.',
        'Simple Yet Powerful Use Case:',
        'A retail store uses the OCR system to scan and digitize supplier invoices, automatically extracting item details and updating their inventory system.'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 100,
      description: 'Perfect for small projects and individual developers',
      features: [
        'Limited API calls/month',
        'Basic integration support',
        'Standard AI model',
        'Standard response time',
        'Basic analytics',
        'SLA guarantee'
      ]
    },
    {
      name: 'Pro',
      price: 150,
      description: 'Ideal for growing businesses and teams',
      features: [
        'Higher API calls/month',
        'Priority integration support',
        'Premium AI models',
        'Fast response time',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 200,
      description: 'For large-scale applications and organizations',
      features: [
        'Unlimited API calls',
        '24/7 dedicated support',
        'Custom AI models',
        'Ultra-fast response time',
        'Advanced analytics',
        'SLA guarantee'
      ]
    }
  ];

  const handleSolutionClick = (type: WorkspaceType) => {
    setActiveWorkspace(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="h-screen bg-dark text-gray-100 overflow-y-auto snap-y snap-mandatory">
      <header className="fixed top-0 left-0 right-0 border-b border-gray-800 bg-dark-light/80 backdrop-blur-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <a href="#hero" className="flex items-center space-x-3">
                <div className="gradient-border p-2 rounded-lg">
                  <Layout className="w-8 h-8 text-primary animate-pulse-slow" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  sristyverse.ai
                </h1>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {!activeWorkspace ? (
        <div className="pt-16">
          {/* Hero Section */}
          <section id="hero" className="min-h-screen snap-start flex items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/90 to-dark z-10" />
            <NeuralNetwork />
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse-slow z-20" />
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    Transform Your Apps with
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                      AI Power
                    </span>
                  </h1>
                  <p className="text-xl text-gray-400">
                    Integrate cutting-edge AI capabilities into your applications with our
                    comprehensive suite of tools and APIs.
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2 backdrop-blur-sm">
                      Get Started <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="bg-dark-light/50 hover:bg-gray-800 text-gray-300 px-8 py-3 rounded-lg transition-colors border border-gray-700 backdrop-blur-sm">
                      View Demo
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
                    alt="AI Visualization"
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section id="solutions" className="min-h-screen snap-start flex items-center relative overflow-hidden">
            <div className="geometric-pattern animate-float" />
            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">AI Solutions</h2>
                <p className="text-xl text-gray-400">Powerful tools to enhance your applications</p>
              </div>
              <SolutionsSlider solutions={solutions} onSelect={handleSolutionClick} />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="min-h-screen snap-start flex items-center relative overflow-hidden">
            <div className="geometric-pattern animate-float" />
            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="space-y-8">
                  <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">Why Choose <span>sristyverse.ai</span>?</h2>
                  <p className="text-lg text-gray-400 mb-8">Inspired by the Sanskrit word "<em>sristy</em>" (सृष्टि) meaning <em>creation</em>, we blend <strong>ancient wisdom</strong> with <strong>modern AI</strong> to bring you <em>powerful generative technology</em>.</p>
                  <p className="text-lg text-gray-400 mb-8">
                    We don't just offer <strong className="text-primary">powerful AI solutions</strong>—we make them <em className="text-white">work for you</em>. Every system is <strong className="text-primary">tailored</strong> to your unique business needs, ensuring <em className="text-white">maximum impact</em>. Once your system is <strong className="text-primary">fine-tuned</strong>, we provide <em className="text-white">seamless API integration</em> so you can focus on <strong className="text-primary">growing your business</strong> without worrying about the technical details.
                  </p>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                        <p className="text-gray-400">
                          Our team of AI experts and developers ensures you get the best solutions
                          for your needs.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <Code className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
                        <p className="text-gray-400">
                          Simple APIs and comprehensive documentation make integration a breeze.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                        <p className="text-gray-400">
                          Bank-grade security and compliance to keep your data safe and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="min-h-screen snap-start flex items-center relative overflow-hidden">
            <div className="geometric-pattern animate-float" />
            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-400 mb-8">Choose the perfect plan for your needs</p>
                <Toggle
                  leftLabel="Monthly"
                  rightLabel="Annual"
                  isChecked={pricingOptions.billingPeriod === 'annual'}
                  onChange={toggleBillingPeriod}
                />
                {pricingOptions.billingPeriod === 'annual' && (
                  <p className="text-primary text-sm mt-4">Save 16% with annual billing</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`glassmorphism rounded-2xl overflow-hidden transition-transform hover:scale-105 ${
                      plan.popular ? 'border-2 border-primary' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="bg-primary text-white text-sm font-semibold text-center py-1">
                        Most Popular
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-6">{plan.description}</p>
                      <div className="mb-8">
                        <span className="text-4xl font-bold">{getPrice(plan.price)}</span>
                        <span className="text-gray-400">/{pricingOptions.billingPeriod === 'monthly' ? 'mo' : 'yr'}</span>
                        {pricingOptions.billingPeriod === 'annual' && (
                          <p className="text-primary text-sm mt-1">2 months free</p>
                        )}
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary/90'
                          : 'bg-dark-light hover:bg-gray-800 border border-gray-700'
                      }`}>
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="flex items-center gap-2">
                  <Toggle
                    leftLabel="USD"
                    rightLabel="JPY"
                    isChecked={pricingOptions.currency === 'JPY'}
                    onChange={toggleCurrency}
                    disabled={isLoading}
                  />
                  {isLoading && (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent" />
                  )}
                </div>
                {pricingOptions.currency === 'JPY' && exchangeRate > 0 && (
                  <p className="text-gray-400 text-sm">
                    Current rate: 1 USD = {exchangeRate.toFixed(2)} JPY
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="min-h-screen snap-start flex items-center relative overflow-hidden">
            <div className="geometric-pattern animate-float" />
            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">Get in Touch</h2>
                  <p className="text-xl text-gray-400 mb-8">
                    Have questions? We'd love to hear from you. Send us a message
                    and we'll respond as soon as possible.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-400">contact@sristyverse.ai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-400">+81 (080) 5735 1437</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-gray-400">Okegawa City, Saitama Prefecture, Japan</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glassmorphism rounded-2xl p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full bg-dark-light border border-gray-800 rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full bg-dark-light border border-gray-800 rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-dark-light border border-gray-800 rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        className="w-full bg-dark-light border border-gray-800 rounded-lg px-4 py-2 focus:border-primary focus:ring-1 focus:ring-primary"
                        rows={4}
                        placeholder="Your message..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <div className="text-center text-gray-400 text-sm mt-16 pt-8 border-t border-gray-800">
                © 2025 Sristyverse. All rights reserved.
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          <nav className="bg-dark-light/30 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex space-x-8">
                {['ocr', 'sentiment', 'chatbot', 'recommendation'].map((workspace) => (
                  <button
                    key={workspace}
                    onClick={() => setActiveWorkspace(workspace as WorkspaceType)}
                    className={`px-4 py-4 text-sm font-medium transition-colors ${
                      activeWorkspace === workspace
                        ? 'border-b-2 border-primary text-primary'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    {workspace.charAt(0).toUpperCase() + workspace.slice(1)} System
                  </button>
                ))}
              </div>
            </div>
          </nav>

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activeWorkspace === 'ocr' && <OCRWorkspace />}
            {activeWorkspace === 'sentiment' && <SentimentWorkspace />}
            {activeWorkspace === 'chatbot' && <ChatbotWorkspace />}
            {activeWorkspace === 'recommendation' && <RecommendationWorkspace />}
          </main>
        </>
      )}
    </div>
  );
}

export default App;