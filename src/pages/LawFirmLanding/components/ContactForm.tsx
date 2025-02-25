
export default function ContactForm() {
  return (
    <div>
      {/* Contact Form Section */}
      <div id="contact" className="py-16 px-16 bg-white relative h-[calc(100vh-80px)]">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-marcellus">MAKE AN ENQUIRY</h2>
          <p className="text-[#BF9874] mt-4 font-archivo">WE WOULD LOVE TO WORK WITH YOU</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="mt-6 w-full border-b  py-2 px-4 focus:outline-none border-[#BF9874] transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="mt-6 w-full border-b py-2 px-4 focus:outline-none border-[#BF9874] transition-colors"
              />
            </div>

            <div>
              <select
                className="mt-8 w-full border-b  py-2 px-4 focus:outline-none border-[#BF9874] transition-colors appearance-none bg-transparent"
              >
                {/* add empty option */}
                <option value="" disabled selected hidden>Select a category</option>
                <option value="civil">Civil Law</option>
                <option value="criminal">Criminal Law</option>
                <option value="family">Family Law</option>
                <option value="property">Property Law</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="mt-8 w-full border-b py-2 px-4 focus:outline-none border-[#BF9874] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="mt-16 text-center">
              <button
                type="submit"
                className="px-8 py-3 border border-gray-800 text-gray-800 hover:bg-[#BF9874] hover:border-[#BF9874] hover:text-white transition-colors"
              >
                REQUEST AN APPOINTMENT
              </button>
            </div>
          </form>
        </div>
      </div >
    </div>
  )
}
