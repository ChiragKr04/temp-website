import { Clock, Phone } from "lucide-react";

const TopHourLinksBar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-8 py-3 border-b border-[#BF9874] h-[50px]">
        {/* Contact and Hours */}
        <div className="flex items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-[#BF9874]" />
            <span>+(91) 9876543210</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2 text-[#BF9874]" />
            <span>MONDAY - FRIDAY 7:30AM - 6:30PM</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4 text-gray-400">
          <a href="#" className="text-[#BF9874] hover:text-gray-600">IN.</a>
          <a href="#" className="text-[#BF9874] hover:text-gray-600">IG.</a>
          <a href="#" className="text-[#BF9874] hover:text-gray-600">FB.</a>
        </div>
      </div>
    </>
  )
}

export default TopHourLinksBar;