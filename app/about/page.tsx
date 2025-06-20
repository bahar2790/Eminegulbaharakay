"use client";
import Image from 'next/image';
import { FaPython, FaDatabase, FaChartBar, FaChartPie } from 'react-icons/fa';
import { SiTableau, SiPandas, SiScikitlearn, SiKaggle, SiLinkedin, SiGithub } from 'react-icons/si';
import { BsFiletypeXlsx } from 'react-icons/bs';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Technical Skills' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Name */}
      <div className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#2d2b55] to-[#1a1a2e] pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Emine Gülbahar Akay</h1>
        <p className="text-lg md:text-xl text-purple-100 font-medium">Data Scientist & Data Analyst & Business Analyst</p>
      </div>

      {/* Tabs Navigation & Content */}
      <div className="w-full bg-white pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 md:gap-6 mb-8 justify-center pt-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-200 border-b-4 ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-gray-900 bg-white shadow'
                    : 'border-transparent text-gray-500 bg-gray-50 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-12">
            {activeTab === 'story' && (
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <p className="text-gray-600 leading-relaxed">
                  Results-driven Data Analyst with hands-on experience in building AI-powered solutions, especially in text mining, sentiment analysis, and topic modeling. Skilled in using Python, SQL, and Jupyter for end-to-end data workflows—from data collection and preprocessing to model deployment and reporting.<br /><br />
                  Proficient in applying machine learning techniques such as classification, regression, and LSTM-based forecasting to extract insights and support data-driven decisions. Developed multiple real-world projects focusing on social media analysis and customer feedback, using models like XGBoost, LightGBM, and LDA to uncover trends and improve predictive accuracy.<br /><br />
                  Experienced in data visualization and reporting using Power BI and Excel, and in automating repetitive tasks for better efficiency. Adept at creating interpretable dashboards and actionable metrics to communicate complex results clearly to stakeholders.<br /><br />
                  Committed to continuous learning, exploring new technologies, and delivering practical solutions that create measurable impact. Strong foundation in feature engineering, model evaluation, and building scalable pipelines tailored to business needs.
                </p>
              </div>
            )}
            {activeTab === 'experience' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
                <div className="space-y-8">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Freelance Data Analyst (Upwork)</h3>
                        <p className="text-gray-600">Project: Competitive Pricing & Product Strategy Analysis for TheUniformSolutions</p>
                      </div>
                      <span className="text-gray-500">Nov 26, 2024 – Jan 16, 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Led a competitor pricing and strategy analysis project for TheUniformSolutions, a retail chain specializing in medical uniforms</li>
                      <li>Used Python to scrape product data from major competitor websites including wearfigs.com, uniformadvantage.com, scrubsandbeyond.com, allheart.com, shopreadsuniforms.com, and thescrubshop.com</li>
                      <li>Analyzed key attributes such as price, category, size, color, variant, and discount. Delivered insights on average category-level pricing, promotional strategies, and price variation across variants</li>
                      <li>Developed strategic recommendations including early-payment discounts for B2B accounts, additional fees for payroll-deduction-based transactions, and late-payment penalties</li>
                      <li>Built interactive dashboards in Power BI, enabling real-time visual comparison of competitor offerings, category trends, and price positioning</li>
                      <li>Delivered actionable insights to support pricing optimization, bundling decisions, and customer segmentation strategies</li>
                    </ul>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Customer Review Analysis – DHL & FedEx</h3>
                        <p className="text-gray-600">Academic Project</p>
                      </div>
                      <span className="text-gray-500">Feb 8, 2025 – Mar 1, 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Collected customer reviews from Trustpilot for DHL and FedEx and applied sentiment analysis and topic modeling (LDA)</li>
                      <li>Used classical ML algorithms (Naive Bayes, Logistic Regression) and deep learning (LSTM, BiLSTM) to identify common complaints, satisfaction drivers, and service quality indicators</li>
                      <li>Findings were used to support international academic publication efforts</li>
                    </ul>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Airline Review Analysis</h3>
                        <p className="text-gray-600">Academic Project</p>
                      </div>
                      <span className="text-gray-500">Mar 4, 2025 – Mar 31, 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Collected and analyzed customer reviews for airline companies</li>
                      <li>Applied preprocessing, topic modeling (LDA), and deep learning-based sentiment classification (LSTM, BiLSTM)</li>
                      <li>Identified customer experience trends, complaint categories, and service strengths for academic and strategic insight</li>
                    </ul>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Multi-Channel Sentiment Classification System</h3>
                        <p className="text-gray-600">Academic Project</p>
                      </div>
                      <span className="text-gray-500">Apr 1, 2025 – Apr 28, 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Developed a unified sentiment analysis system for customer reviews across different sectors</li>
                      <li>Implemented and compared classical machine learning models (Naive Bayes, Logistic Regression) and deep learning architectures (LSTM, Attention)</li>
                      <li>Evaluated model performance in a cross-domain setting to build a generalized solution</li>
                    </ul>
                  </div>

                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">Inventory Optimization & Demand Forecasting</h3>
                        <p className="text-gray-600">Kaggle Olist Dataset</p>
                      </div>
                      <span className="text-gray-500">Apr 29, 2025 – May 26, 2025</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Built an end-to-end inventory forecasting solution using the public Olist e-commerce dataset</li>
                      <li>Conducted time series analysis incorporating trend, seasonality, and holiday effects</li>
                      <li>Engineered lag features, rolling averages, special day flags, and interaction terms</li>
                      <li>Trained and evaluated XGBoost, LightGBM, and a custom 3-layer LSTM model, achieving over 92% accuracy</li>
                      <li>Visualized results to identify reorder points and optimal stock levels</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'education' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Education</h2>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Associate Degree in Theology</h3>
                      <p className="text-gray-600">Anadolu University, Faculty of Open Education</p>
                    </div>
                    <span className="text-gray-500">2011 - 2014</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'certifications' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Certifications</h2>
                
                {/* Turkcell Geleceği Yazanlar Certificates */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Turkcell Next Generation Certificates</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Introduction to Data Science and AI</h3>
                      <p className="text-gray-600">Turkcell Next Generation</p>
                      <p className="text-gray-500 mt-2">December 2024</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Python Programming 401</h3>
                      <p className="text-gray-600">Turkcell Next Generation</p>
                      <p className="text-gray-500 mt-2">December 2024</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Python Programming 301</h3>
                      <p className="text-gray-600">Turkcell Next Generation</p>
                      <p className="text-gray-500 mt-2">December 2024</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Python Programming 201</h3>
                      <p className="text-gray-600">Turkcell Next Generation</p>
                      <p className="text-gray-500 mt-2">December 2024</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Python Programming 101</h3>
                      <p className="text-gray-600">Turkcell Next Generation</p>
                      <p className="text-gray-500 mt-2">December 2024</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Machine Learning 101</h3>
                      <p className="text-gray-600">Turkcell Next Generation</p>
                      <p className="text-gray-500 mt-2">December 2024</p>
                    </div>
                  </div>
                </div>

                {/* Kodlasam Certificate */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Additional Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analyst Bootcamp</h3>
                      <p className="text-gray-600">Kodlasam</p>
                      <p className="text-sm text-gray-500 mt-2">Includes: Excel, Python, SQL, PowerBI, and Data Analysis</p>
                      <p className="text-gray-500">November 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'skills' && (
              <div>
                <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
                
                {/* Technical Skills */}
                <div className="mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Analysis & Visualization</h3>
                      <p className="text-gray-600">Python, SQL, Power BI, Tableau, Matplotlib, Seaborn</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Machine Learning & AI</h3>
                      <p className="text-gray-600">Supervised & Unsupervised Learning, Predictive Modeling, Feature Engineering, Hyperparameter Tuning, NLP, Computer Vision</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Deep Learning Frameworks</h3>
                      <p className="text-gray-600">TensorFlow, PyTorch, Keras</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Deployment & Automation</h3>
                      <p className="text-gray-600">Streamlit, Machine Learning Pipelines</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Database Management</h3>
                      <p className="text-gray-600">PostgreSQL, Microsoft SQL Server</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Statistical Methods</h3>
                      <p className="text-gray-600">A/B Testing, KPI Optimization, Statistical Analysis</p>
                    </div>
                  </div>
                </div>

                {/* Soft Skills */}
                <h2 className="text-3xl font-bold mb-6">Soft Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Leadership</h3>
                    <p className="text-gray-600">Led cross-functional teams on AI-driven projects, improving efficiency by 20%.</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Teamwork</h3>
                    <p className="text-gray-600">Strong collaboration skills, working with diverse teams to achieve data-driven goals.</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Problem-Solving</h3>
                    <p className="text-gray-600">Expertise in identifying trends and optimizing processes through data analysis.</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Time Management</h3>
                    <p className="text-gray-600">Successfully handled multiple projects, reducing workflow inefficiencies by 15%.</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Adaptability</h3>
                    <p className="text-gray-600">Quick to learn and integrate emerging data technologies into workflows.</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Communication</h3>
                    <p className="text-gray-600">Proficient in explaining complex data insights to both technical and non-technical stakeholders.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="w-full bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center gap-6">
            <a href="https://www.linkedin.com/in/emine-gülbahar-akay-556189302/" target="_blank" rel="noopener noreferrer"
               className="bg-white hover:bg-gray-50 transition p-4 rounded-full">
              <SiLinkedin size={24} color="#0A66C2" />
            </a>
            <a href="https://www.kaggle.com/baharakay" target="_blank" rel="noopener noreferrer"
               className="bg-white hover:bg-gray-50 transition p-4 rounded-full">
              <SiKaggle size={24} color="#20BEFF" />
            </a>
            <a href="https://public.tableau.com/app/profile/emine.g.lbahar.akay/vizzes" target="_blank" rel="noopener noreferrer"
               className="bg-white hover:bg-gray-50 transition p-4 rounded-full">
              <SiTableau size={24} color="#E97627" />
            </a>
            <a href="https://github.com/bahar2790" target="_blank" rel="noopener noreferrer"
               className="bg-white hover:bg-gray-50 transition p-4 rounded-full">
              <SiGithub size={24} color="#24292F" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
  