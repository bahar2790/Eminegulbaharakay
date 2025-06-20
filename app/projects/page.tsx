"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLinkedin, SiKaggle, SiTableau, SiGithub } from 'react-icons/si';

const TABS = [
  { key: 'eda', label: 'Exploratory Data Analysis (EDA)' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'scrape', label: 'Web Scraping' },
  { key: 'viz', label: 'Data Visualization' },
  { key: 'sql', label: 'SQL Projects' },
];

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  type: 'github' | 'powerbi' | 'other';
  previewImages?: string[];
  previewCaptions?: string[];
  modalDescription?: string;
};

type ProjectsByTab = {
  eda: Project[];
  ml: Project[];
  scrape: Project[];
  viz: Project[];
  sql: Project[];
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  eda: `Exploratory Data Analysis is like searching for a pearl within an oyster. Just as a diver must carefully open many oysters to find the hidden pearls, a data analyst must sift through vast amounts of raw data to uncover valuable insights. Each data point is like a grain of sand, seemingly insignificant on its own, but when examined through the lens of EDA, patterns and relationships begin to emerge. Through this process, the analyst polishes and refines the data, transforming it into clear and actionable insights, much like how a pearl is revealed from within the rough exterior of an oyster.`,
  ml: 'Machine Learning projects focused on predictive modeling, classification, and regression tasks using real-world datasets.',
  scrape: 'Web Scraping projects including scraping scripts, data collection tools, and applications that gather and process data from the web.',
  viz: 'Data Visualization projects that turn complex data into clear, interactive, and beautiful visual stories.',
  sql: 'SQL projects demonstrating database design, complex queries, data manipulation, and analysis using various database management systems.',
};

const PROJECTS: ProjectsByTab = {
  eda: [
    {
      title: 'YouTube & Spotify Analysis',
      description: 'Comprehensive analysis of YouTube and Spotify data to understand trends and patterns in music and video content.',
      image: '/projects/youtube_spotfy.png',
      tags: ['EDA', 'Python', 'Pandas', 'Visualization'],
      link: 'https://github.com/bahar2790/Northwind_caopstone_project/blob/main/spotfy_youtube.ipynb',
      type: 'github',
    },
    {
      title: 'Nobel Prize Analysis',
      description: 'Data analysis of Nobel Prize winners and trends across different categories and time periods.',
      image: '/projects/nobel_prize.png',
      tags: ['EDA', 'Python', 'Pandas', 'Visualization'],
      link: 'https://github.com/bahar2790/Nobel_Prize_analysis/blob/main/Untitled.ipynb',
      type: 'github',
    },
    {
      title: 'FIFA 20 Dataset Analysis',
      description: 'Comprehensive exploratory data analysis of FIFA 20 player statistics and attributes.',
      image: '/projects/fifa.png',
      tags: ['EDA', 'Python', 'Pandas', 'Data Visualization', 'Statistical Analysis'],
      link: 'https://www.kaggle.com/code/baharakay/eda-on-fifa-20-dataset',
      type: 'other',
    }
  ],
  ml: [
    {
      title: 'Sentiment and Topic Analysis on Cargo Reviews',
      description: 'Sentiment and topic analysis on customer reviews of major cargo companies.',
      image: '/projects/sentiment.png',
      tags: ['Machine Learning', 'NLP', 'Naive Bayes', 'LDA', 'LSTM', 'Python'],
      link: 'https://github.com/bahar2790/Sentiment_analysis',
      type: 'github',
    },
    {
      title: 'E-Commerce Inventory Optimization',
      description: 'Inventory optimization for e-commerce using real-world sales data.',
      image: '/projects/stok.png',
      tags: ['Machine Learning', 'Inventory Optimization', 'Python', 'XGBoost', 'LightGBM', 'Neural Networks', 'Time Series'],
      link: 'https://github.com/bahar2790/ecommerce-inventory-ml',
      type: 'github',
    },
    {
      title: 'Revenue Prediction',
      description: 'A machine learning project for predicting revenue based on real-world data.',
      image: '/projects/gelir.png',
      tags: ['Machine Learning', 'Regression', 'Revenue Prediction', 'Python'],
      link: 'https://github.com/bahar2790/Aygaz_ML_project',
      type: 'github',
    },
  ],
  scrape: [
    {
      title: 'News Aggregator App',
      description: 'A Streamlit web app that scrapes and categorizes news articles from various sources.',
      image: '/projects/news.png',
      tags: ['Web Scraping', 'Streamlit', 'News', 'Python'],
      link: 'https://haber-uygulamasi-multinews.streamlit.app',
      type: 'other',
    },
  ],
  viz: [
    {
      title: 'British Airways Review Dashboard',
      description: 'Interactive Tableau dashboard visualizing customer reviews for British Airways.',
      image: '/projects/air.png',
      tags: ['Tableau', 'Data Visualization', 'Dashboard', 'Customer Reviews'],
      link: 'https://public.tableau.com/app/profile/emine.g.lbahar.akay/viz/BritishAirwaysReview_17502515698930/Dashboard1',
      type: 'powerbi',
    },
    {
      title: 'US States Voting Patterns Dashboard',
      description: 'Tableau dashboard visualizing historical voting patterns of US states.',
      image: '/projects/air.png',
      tags: ['Tableau', 'Data Visualization', 'Dashboard', 'US Elections'],
      link: 'https://public.tableau.com/app/profile/emine.g.lbahar.akay/viz/Howhavethestatesvoted__1/Dashboard1',
      type: 'powerbi',
    },
    {
      title: 'Hotel Analysis Power BI Project',
      description: 'Power BI dashboard for comprehensive hotel data analysis and insights.',
      image: '/projects/power.png',
      tags: ['Power BI', 'Data Visualization', 'Dashboard', 'Hotel Analysis'],
      link: '', // Modal preview, not direct link
      type: 'powerbi',
      previewImages: [
        '/projects/1.png',
        '/projects/2.png',
        '/projects/3.png',
        '/projects/4.png',
      ],
      previewCaptions: [
        'Overview of hotel performance metrics',
        'Customer segmentation and booking trends',
        'Revenue and occupancy analysis',
        'Key insights and recommendations',
      ],
      modalDescription: 'This Power BI project presents a detailed analysis of hotel data, including performance metrics, customer segmentation, revenue, and actionable insights for business growth.'
    },
    {
      title: 'Northwind Power BI Analysis',
      description: 'Comprehensive Power BI dashboard analyzing Northwind database sales, customers, and products.',
      image: '/projects/power.png',
      tags: ['Power BI', 'Data Visualization', 'Dashboard', 'Northwind'],
      link: '', // Modal preview, not direct link
      type: 'powerbi',
      previewImages: [
        '/projects/resim1.jpg',
        '/projects/resim2.jpg',
        '/projects/resim3.jpg',
        '/projects/resim4.jpg',
        '/projects/resim5.jpg',
      ],
      previewCaptions: [
        'Sales Trends',
        'Customer Segmentation',
        'Product Performance',
        'Key Business Insights',
        'Interactive Visuals',
      ],
      modalDescription: 'This Power BI project provides an in-depth analysis of the Northwind database, including sales trends, customer segmentation, product performance, and key business insights. The dashboard features interactive visuals and detailed breakdowns to support data-driven decision making.'
    },
    {
      title: 'Excel Sales Dashboard',
      description: 'Interactive Excel dashboard for sales data analysis and reporting.',
      image: '/projects/ex.jpg',
      tags: ['Excel', 'Data Visualization', 'Dashboard', 'Sales Analysis'],
      link: '', // Modal preview, not direct link
      type: 'powerbi',
      previewImages: [
        '/projects/excel1.png',
        '/projects/excel2.png',
      ],
      previewCaptions: [
        'Sales overview and key metrics',
        'Detailed sales breakdown by category',
      ],
      modalDescription: 'This Excel project features an interactive dashboard for analyzing and reporting sales data, including key metrics and detailed breakdowns for better business insights.'
    },
  ],
  sql: [
    {
      title: 'E-commerce RFM Analysis',
      description: 'Comprehensive SQL analysis of e-commerce data using RFM (Recency, Frequency, Monetary) methodology to segment customers and analyze sales patterns.',
      image: '/projects/rfm.png',
      tags: ['SQL', 'PostgreSQL', 'RFM Analysis', 'E-commerce', 'Customer Segmentation'],
      link: 'https://github.com/bahar2790/sql_graduation_project',
      type: 'github',
    },
    {
      title: "Danny's Diner SQL Analysis",
      description: 'Advanced SQL queries for restaurant data analysis, including customer behavior, sales trends, and membership impact analysis.',
      image: '/projects/danny.png',
      tags: ['SQL', 'Data Analysis', 'Restaurant Analytics', 'Customer Insights'],
      link: 'https://github.com/bahar2790/Danny_ma_SQL_challenge',
      type: 'github',
    }
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<keyof ProjectsByTab>('eda');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleProjectClick = (project: Project) => {
    if (project.previewImages && project.previewImages.length > 0) {
      setModalProject(project);
      setCarouselIndex(0);
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  const closeModal = () => setModalProject(null);

  const handlePrev = () => {
    if (!modalProject?.previewImages) return;
    setCarouselIndex((prev) => (prev === 0 ? modalProject.previewImages!.length - 1 : prev - 1));
  };
  const handleNext = () => {
    if (!modalProject?.previewImages) return;
    setCarouselIndex((prev) => (prev === modalProject.previewImages!.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero/Header Section */}
      <div className="w-full bg-gradient-to-br from-[#1a1a2e] via-[#2d2b55] to-[#1a1a2e] pt-24 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Emine Gülbahar Akay</h1>
        <p className="text-lg md:text-xl text-purple-100 font-medium">Data Scientist & Data Analyst & Business Analyst</p>
      </div>
      {/* Projects Section */}
      <div className="bg-gray-100 w-full pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-6 mb-8 justify-center pt-12">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as keyof ProjectsByTab)}
                className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-200 border-b-4 ${activeTab === tab.key ? 'border-purple-500 text-gray-900 bg-white shadow' : 'border-transparent text-gray-500 bg-gray-50 hover:bg-gray-200'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Category Description */}
          <div className="mx-auto mb-10 max-w-5xl">
            <p className="text-base text-gray-600 italic text-justify">
              {CATEGORY_DESCRIPTIONS[activeTab]}
            </p>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS[activeTab].length === 0 && (
              <div className="col-span-full text-center text-gray-400 text-lg">No project added yet for this category.</div>
            )}
            {PROJECTS[activeTab].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="w-full h-64 relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for Power BI projects */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{modalProject.title}</h2>
            <p className="mb-4 text-gray-700 text-center">{modalProject.modalDescription || modalProject.description}</p>
            {modalProject.previewImages && modalProject.previewImages.length > 0 && (
              <div className="flex flex-col items-center w-full">
                <div className="relative w-full max-w-3xl h-[60vh] flex items-center justify-center mb-4">
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-purple-200 text-4xl text-purple-700 font-bold rounded-full p-3 shadow-lg z-10 transition"
                    style={{ left: 0 }}
                    onClick={handlePrev}
                  >
                    &#8592;
                  </button>
                  <img
                    src={modalProject.previewImages[carouselIndex]}
                    alt={`Preview ${carouselIndex + 1}`}
                    className="rounded-lg shadow w-full h-full object-contain bg-gray-100"
                    style={{ maxHeight: '60vh' }}
                  />
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-purple-200 text-4xl text-purple-700 font-bold rounded-full p-3 shadow-lg z-10 transition"
                    style={{ right: 0 }}
                    onClick={handleNext}
                  >
                    &#8594;
                  </button>
                </div>
                {modalProject.previewCaptions && modalProject.previewCaptions[carouselIndex] && (
                  <p className="text-gray-700 text-center mb-2 text-base mt-2 w-full max-w-3xl">{modalProject.previewCaptions[carouselIndex]}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
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
  