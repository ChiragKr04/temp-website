import { Link } from 'react-router-dom';

interface DisclaimerProps {
  onAccept: () => void;
  onDisagree: () => void;
}

export default function Disclaimer({ onAccept, onDisagree }: DisclaimerProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/50" />
      <div className="bg-[#0A2472] text-white w-full max-w-4xl p-4 sm:p-8 rounded-lg shadow-xl relative max-h-[90vh] overflow-y-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Disclaimer</h1>

        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          <p>
            By accessing this website, the user acknowledges that:
          </p>

          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3">
            <li>
              The user wishes to gain more information about us for his/her information and use. He/She also acknowledges that there has been no attempt by us to advertise or solicit work.
            </li>

            <li>
              Any information obtained or downloaded by the user from our website does not lead to the creation of the client – attorney relationship between the Firm and the user.
            </li>

            <li>
              None of the information contained in our website amounts to any form of legal opinion or legal advice.
            </li>

            <li>
              Our website uses cookies to improve your user experience. By using our site, you agree to our use of cookies. To find out more, please see our{' '}
              <Link to="/cookies-policy" className="text-[#BF9874] hover:underline">
                Cookies Policy
              </Link>
              {' '}& {' '}
              <Link to="/privacy-policy" className="text-[#BF9874] hover:underline">
                Privacy Policy
              </Link>
            </li>

            <li>
              All information contained in our website is the intellectual property of the Firm.
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-3 sm:gap-4">
          <button
            onClick={onAccept}
            className="px-8 py-2 bg-[#BF9874] text-white rounded hover:bg-[#A17F5A] transition-colors"
          >
            Agree
          </button>
          <button
            onClick={onDisagree}
            className="px-8 py-2 border border-[#BF9874] text-white rounded hover:bg-[#BF9874] transition-colors"
          >
            Disagree
          </button>
        </div>
      </div>
    </div>
  );
} 