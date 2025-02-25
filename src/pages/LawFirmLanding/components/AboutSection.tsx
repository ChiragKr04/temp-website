import { Diamond } from "lucide-react";

export default function AboutSection() {

  const timelineData = [
    {
      year: "2018",
      title: "Civil Litigation Success",
      description: "Successfully handled complex family property partition suits at Patiala House Court.",
      position: "top"
    },
    {
      year: "2019",
      title: "Municipal Law Victory",
      description: "Won landmark case against NDMC for de-sealing of premises, establishing precedent in municipal law disputes.",
      position: "bottom"
    },
    {
      year: "2020",
      title: "Criminal Law Excellence",
      description: "Specialized in Section 138 NI Act cases, achieving favorable outcomes in Tis Hazari and Rohini Courts.",
      position: "top"
    },
    {
      year: "2021",
      title: "Family Law Practice",
      description: "Expanded practice to include high-conflict divorce cases and domestic violence matters at Patiala House Court.",
      position: "bottom"
    },
    {
      year: "2022",
      title: "Service Law Expertise",
      description: "Successfully represented clients before Central Administrative Tribunal in service law matters.",
      position: "top"
    }
  ];

  return (
    <div>
      {/* Awards Section */}
      {/* <AwardSection /> */}

      {/* Timeline Section */}
      <div id="about" className="py-12 px-16 bg-white relative h-[calc(100vh-80px)]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-marcellus">MY PRACTICE JOURNEY</h2>
          <p className="text-[#BF9874] mt-4 font-archivo">KEY CASES & ACHIEVEMENTS</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-screen -ml-16">
            {/* Thin brown line */}
            <div className="h-[1px] w-full bg-[#BF9874]"></div>

            {/* Diamond points container */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full">
              <div className="px-48 flex justify-between">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="text-[#BF9874]"
                  >
                    <Diamond size={16} fill="currentColor" strokeWidth={0} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Points */}
          <div className="relative grid grid-cols-5 gap-4">
            {timelineData.map((item, index) => (
              <div key={`${item.year}-${index}`} className="flex flex-col items-center">
                {item.position === "top" ? (
                  <>
                    <div className="mb-12 mt-6 text-center h-[120px] w-full">
                      <h3 className="font-marcellus text-lg mb-2 text-left">{item.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-3 text-left">{item.description}</p>
                    </div>
                    <span className="text-[#BF9874] text-4xl mt-12 font-marcellus">{item.year}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#BF9874] text-4xl mt-12 font-marcellus">{item.year}</span>
                    <div className="mt-32 text-center h-[120px] w-full">
                      <h3 className="font-marcellus text-lg mb-2 text-left">{item.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-3 text-left">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
