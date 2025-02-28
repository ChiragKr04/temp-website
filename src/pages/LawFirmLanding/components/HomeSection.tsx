
export default function HomeSection({
  smoothScrollFunc,
}: {
  smoothScrollFunc: (e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => void;
}) {
  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="relative h-[calc(100vh-80px)] scroll-mt-[80px] bg-[#0A1229]">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/court5.jpg"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
        </div>

        {/* Background Image Container */}
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[100%] mr-24 z-10">
          <img
            src="/images/law-lady-2.png"
            alt="Legal Professional"
            className="h-full w-full object-contain object-right"
          />
        </div> */}

        {/* Content */}
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl">
              <h2 className="text-xl mb-4 text-white font-archivo">ADVOCATE AT DELHI HIGH COURT</h2>
              <h1 className="text-6xl font-light mb-6 text-white font-marcellus">ABHISHEK SANDILYA</h1>
              <p className="mb-8 text-gray-200 max-w-xl font-archivo leading-relaxed">
                A distinguished litigation lawyer with expertise in civil and criminal laws, practicing across Delhi District Courts, Delhi High Court, and Punjab & Haryana High Court. Known for strategic legal solutions, meticulous case preparation, and powerful courtroom advocacy.
              </p>
              <button
                className="px-8 py-3 bg-[#BF9874] text-white w-fit hover:bg-[#725842] transition-colors font-archivo"
                onClick={() => {
                  // go to contact page
                  smoothScrollFunc(null, 'contact');
                }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
