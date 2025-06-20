import Image from "next/image";
import { SiTableau, SiKaggle, SiLinkedin, SiGithub } from 'react-icons/si';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
            Emine Gülbahar Akay
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            Data Scientist & Data Analyst & Business Analyst
          </p>
          <div className="mt-8 rounded-full overflow-hidden w-[180px] h-[180px] mx-auto shadow-2xl border-2 border-purple-500/20">
            <img
              src="/imza.png"
              alt="EGA Signature"
              width="180"
              height="180"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-row items-start gap-16">
            <div className="w-64 h-64 relative overflow-hidden shadow-2xl border-2 border-purple-500/20 flex-shrink-0">
              <Image
                src="/IMG_9429.jpg"
                alt="Emine Gülbahar Akay"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">
                    Hi. You're looking at Emine Gülbahar Akay.
                  </h2>
                  <div className="text-lg text-gray-600 leading-relaxed">
                    I'm a data analyst working on data science and machine learning projects. I work with real-world datasets using tools like Python, SQL, and Jupyter, applying techniques such as classification, prediction, sentiment analysis, and topic modeling.

                    I create visualizations and reports with Power BI and Excel, and develop models using XGBoost, LightGBM, and LSTM. I'm focused on continuous learning and delivering practical, results-driven solutions through hands-on projects.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
