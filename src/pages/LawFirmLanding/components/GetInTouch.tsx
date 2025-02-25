export default function GetInTouch() {
  return (
    <div>
      {/* Footer Section */}
      < footer id="get-in-touch" className="bg-[#0A1229] text-white relative mt-32" >
        {/* Logo Triangle */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" >
          <div className="w-32 h-32 bg-white flex items-center justify-center transform rotate-[-45deg]">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-16 h-16 object-contain rotate-45 mt-8 mr-8"
            />
          </div>
        </div >

        {/* Footer Content */}
        <div className="container mx-auto px-16 py-16" >
          <div className="grid grid-cols-2 gap-8 mt-24">
            {/* Google Map */}
            <div className="h-[300px] w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.654043486389!2d77.23795524271075!3d28.580149553075874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM0JzQ5LjEiTiA3N8KwMTQnMTguMiJF!5e0!3m2!1sen!2sin!4v1740491446354!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Main Office */}
            <div className="flex items-center justify-end">
              {/* make this section to align in middle of map box */}
              <div className="font-archivo text-right">
                <h3 className="text-xl font-marcellus mb-6 text-right">Delhi Main Office</h3>
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
