export default function GetInTouch() {
  return (
    <div>
      {/* Footer Section */}
      < footer id="get-in-touch" className="bg-[#0A1229] text-white relative mt-32" >
        {/* Logo Triangle */}
        {/* <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" >
          <div className="w-32 h-32 bg-white flex items-center justify-center transform rotate-[-45deg]">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain rotate-45 mt-8 mr-8"
            />
          </div>
        </div > */}

        {/* Footer Content */}
        <div className="container mx-auto px-4 sm:px-16 py-16" >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
            {/* Google Map */}
            <div className="h-[300px] w-full rounded-lg overflow-hidden">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY}&q=28.580291,77.238384`}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Main Office - Modified alignment for mobile */}
            <div className="flex items-center md:justify-end justify-center">
              <div className="font-archivo text-center md:text-right">
                <h3 className="text-xl font-marcellus mb-6 text-center md:text-right">Delhi Main Office</h3>
                <div className="space-y-2 text-gray-400">
                  <p>M: +91 991 014 3073</p>
                  <p>T: +91 782 728 8178</p>
                  <p>A: 162, Defence colony flyover market,</p>
                  <p>Jangpura, New Delhi</p>
                  <p>E: info@abhisheksandilya.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <div className="text-gray-400 font-archivo">
                <span>@ Copyright Advocate Abhishek Sandilya, All Rights Reserved</span>
              </div>
              <div className="flex space-x-4">
                <a href="/privacy-policy" className="text-gray-400 hover:text-[#BF9874]">Privacy Policy.</a>
                <a href="/cookies-policy" className="text-gray-400 hover:text-[#BF9874]">Cookies Policy.</a>
              </div>
            </div>
          </div>
        </div >
      </footer >
    </div>
  )
}
