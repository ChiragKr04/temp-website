import { Diamond } from 'lucide-react';

export default function NavItems({
  navigationState,
  smoothScrollFunc,
  animatingIcon,
}: {
  navigationState: "home" | "about" | "career" | "contact" | "get-in-touch";
  smoothScrollFunc: (e: React.MouseEvent<HTMLAnchorElement> | null, id: string) => void;
  animatingIcon: string | null;
}) {

  return (
    <div>
      {/* Navigation */}
      <div className="flex items-center justify-between px-8 py-4 h-[80px]">
        <nav className="flex items-center space-x-8">
          <a
            href="#home"
            className={`flex items-center transition-colors ${navigationState === 'home' ? 'text-[#BF9874]' : 'text-gray-800'
              }`}
            onClick={(e) => smoothScrollFunc(e, 'home')}>
            <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'home' ? 'animate-spin-once' : ''
              }`}>
              <Diamond size={16} fill={`${navigationState === 'home' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
            </span>
            HOME
          </a>
          <a
            href="#about"
            className={`flex items-center transition-colors ${navigationState === 'about' ? 'text-[#BF9874]' : 'text-gray-800'
              }`}
            onClick={(e) => smoothScrollFunc(e, 'about')}>
            <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'about' ? 'animate-spin-once' : ''
              }`}>
              <Diamond size={16} fill={`${navigationState === 'about' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
            </span>
            ABOUT
          </a>
          {/* <a
            href="#career"
            className={`flex items-center transition-colors ${navigationState === 'career' ? 'text-[#BF9874]' : 'text-gray-800'
              }`}
            onClick={(e) => smoothScrollFunc(e, 'career')}>
            <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'career' ? 'animate-spin-once' : ''
              }`}>
              <Diamond size={16} fill={`${navigationState === 'career' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
            </span>
            WHY ME
          </a> */}
          <a
            href="#contact"
            className={`flex items-center transition-colors ${navigationState === 'contact' ? 'text-[#BF9874]' : 'text-gray-800'
              }`}
            onClick={(e) => smoothScrollFunc(e, 'contact')}>
            <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'contact' ? 'animate-spin-once' : ''}`}>
              <Diamond size={16} fill={`${navigationState === 'contact' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
            </span>
            CONTACT
          </a>
          <a
            href="#contact"
            className={`flex items-center transition-colors ${navigationState === 'get-in-touch' ? 'text-[#BF9874]' : 'text-gray-800'
              }`}
            onClick={(e) => smoothScrollFunc(e, 'get-in-touch')}>
            <span className={`text-[#BF9874] mr-2 transition-transform ${animatingIcon === 'get-in-touch' ? 'animate-spin-once' : ''}`}>
              <Diamond size={16} fill={`${navigationState === 'get-in-touch' ? 'currentColor' : 'text-gray-800'}`} strokeWidth={0} />
            </span>
            GET IN TOUCH
          </a>
        </nav>

        <button className="px-6 py-2 border border-gray-800 text-gray-800 hover:bg-[#BF9874] hover:border-[#BF9874] hover:text-white transition-colors"
          onClick={() => {
            // go to contact page
            smoothScrollFunc(null, 'contact');
          }}
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  )
}
