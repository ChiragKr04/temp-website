import { useState } from "react";
import { motion } from 'framer-motion';

interface PracticeArea {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function AboutSection() {
  return (
    <div id="about" className="py-12 px-16 bg-white relative h-[calc(100vh-80px)]">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-marcellus">MY PRACTICE JOURNEY</h2>
        <p className="text-[#BF9874] mt-4 font-archivo">KEY CASES & ACHIEVEMENTS</p>
      </div>
      {/* <TimeLine /> */}
      <PracticeAreaSlider />
    </div>
  )
}

const PracticeAreaSlider = () => {
  const practiceAreas: PracticeArea[] = [
    {
      id: 1,
      title: 'Criminal Law',
      description: "Specialized in Section 138 NI Act cases, achieving favorable outcomes in Tis Hazari and Rohini Courts.",
      image: '/images/practice-areas/criminal-law.jpg'
    },
    {
      id: 2,
      title: 'Civil Law',
      description: "Successfully handled complex family property partition suits at Patiala House Court.",
      image: '/images/practice-areas/civil-law.jpg'
    },
    {
      id: 3,
      title: 'Matrimonial Law',
      description: 'Sensitive handling of matrimonial matters including divorce, maintenance, child custody, and domestic violence cases. We ensure your rights are protected while maintaining confidentiality.',
      image: '/images/practice-areas/matrimonial-law.jpg'
    },
    {
      id: 4,
      title: 'Intellectual Property',
      description: 'Protection and enforcement of IP rights including patents, trademarks, copyrights, and trade secrets. We help secure and defend your intellectual assets through registration and litigation.',
      image: '/images/practice-areas/ip-law.jpg'
    },
    {
      id: 5,
      title: 'Tax Law',
      description: 'Expert guidance in direct and indirect tax matters, including GST, income tax appeals, and tax planning. We help navigate complex tax regulations and represent clients before tax authorities.',
      image: '/images/practice-areas/tax-law.jpg'
    },
    {
      id: 6,
      title: 'Insolvency & Bankruptcy',
      description: 'Specialized assistance in corporate insolvency resolution, bankruptcy proceedings, and debt restructuring under the IBC. We represent both creditors and debtors in insolvency matters.',
      image: '/images/practice-areas/bankruptcy-law.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;

  const nextSlide = () => {
    if (currentIndex + cardsToShow < practiceAreas.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex + cardsToShow >= practiceAreas.length;

  return (
    <div>
      <div className="relative max-w-[1400px] mx-auto px-16">
        <div className="overflow-hidden -mx-4">
          <motion.div
            className="flex gap-6 px-4"
            animate={{
              x: `-${currentIndex * (288)}px`
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          >
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                className={`relative w-72 h-96 group cursor-pointer flex-shrink-0 ${index === practiceAreas.length - 1 ? 'mr-16' : ''
                  }`}
              >
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(10, 36, 114, 0.7), rgba(10, 36, 114, 0.9)), url(${area.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="h-full flex flex-col justify-between p-6 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-[#BF9874] group-hover:mb-4">
                      {area.title}
                    </h3>

                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={prevSlide}
            disabled={isAtStart}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                ${isAtStart
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-[#BF9874] text-[#BF9874] hover:bg-[#BF9874] hover:text-white cursor-pointer'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAtEnd}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors
                ${isAtEnd
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-[#BF9874] text-[#BF9874] hover:bg-[#BF9874] hover:text-white cursor-pointer'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

// const TimeLine = () => {
//   const timelineData = [
//     {
//       year: "2018",
//       title: "Civil Litigation Success",
//       description: "Successfully handled complex family property partition suits at Patiala House Court.",
//       position: "top"
//     },
//     {
//       year: "2019",
//       title: "Municipal Law Victory",
//       description: "Won landmark case against NDMC for de-sealing of premises, establishing precedent in municipal law disputes.",
//       position: "bottom"
//     },
//     {
//       year: "2020",
//       title: "Criminal Law Excellence",
//       description: "Specialized in Section 138 NI Act cases, achieving favorable outcomes in Tis Hazari and Rohini Courts.",
//       position: "top"
//     },
//     {
//       year: "2021",
//       title: "Family Law Practice",
//       description: "Expanded practice to include high-conflict divorce cases and domestic violence matters at Patiala House Court.",
//       position: "bottom"
//     },
//     {
//       year: "2022",
//       title: "Service Law Expertise",
//       description: "Successfully represented clients before Central Administrative Tribunal in service law matters.",
//       position: "top"
//     }
//   ];
//   return (
//     <div>
//       <div>
//         <div className="relative">
//           {/* Timeline Line */}
//           <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-screen -ml-16">
//             {/* Thin brown line */}
//             <div className="h-[1px] w-full bg-[#BF9874]"></div>

//             {/* Diamond points container */}
//             <div className="absolute top-1/2 -translate-y-1/2 w-full">
//               <div className="px-48 flex justify-between">
//                 {[...Array(5)].map((_, index) => (
//                   <div
//                     key={index}
//                     className="text-[#BF9874]"
//                   >
//                     <Diamond size={16} fill="currentColor" strokeWidth={0} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Timeline Points */}
//           <div className="relative grid grid-cols-5 gap-4">
//             {timelineData.map((item, index) => (
//               <div key={`${item.year}-${index}`} className="flex flex-col items-center">
//                 {item.position === "top" ? (
//                   <>
//                     <div className="mb-12 mt-6 text-center h-[120px] w-full">
//                       <h3 className="font-marcellus text-lg mb-2 text-left">{item.title}</h3>
//                       <p className="text-gray-500 text-sm line-clamp-3 text-left">{item.description}</p>
//                     </div>
//                     <span className="text-[#BF9874] text-4xl mt-12 font-marcellus">{item.year}</span>
//                   </>
//                 ) : (
//                   <>
//                     <span className="text-[#BF9874] text-4xl mt-12 font-marcellus">{item.year}</span>
//                     <div className="mt-32 text-center h-[120px] w-full">
//                       <h3 className="font-marcellus text-lg mb-2 text-left">{item.title}</h3>
//                       <p className="text-gray-500 text-sm line-clamp-3 text-left">{item.description}</p>
//                     </div>
//                   </>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const AwardSection = () => {
//   const data = [
//     {
//       image: "/images/law-sector1.png",
//       title: "Civil & Property Disputes",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       image: "/images/law-sector2.png",
//       title: "Criminal & Financial Disputes",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//     {
//       image: "/images/law-sector3.png",
//       title: "Matrimonial & Family Law",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     },
//   ]
//   return (
//     <div>
//       <div id="about" className="grid grid-cols-3 gap-8 px-16 py-8 bg-[#EAF1FA]">
//         {data.map((item) => (
//           <div key={item.title} className="flex items-center gap-4">
//             <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-24 h-24 object-contain object-center"
//               />
//             </div>
//             <div>
//               <h3 className="text-lg font-medium mb-1 text-center font-archivo">{item.title?.toUpperCase()}</h3>
//               {/* <p className="text-gray-600">{item.description}</p> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
