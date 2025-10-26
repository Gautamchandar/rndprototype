import React, { useState, useMemo } from 'react';

//Total logo in webpage is 6
const LOGO_COUNT = 6;
const IMAGE_WIDTH = 128; 
const LOGO_MARGIN = 32;

const TOTAL_LOGO_ITEM_WIDTH = IMAGE_WIDTH + LOGO_MARGIN; 

const TOTAL_LOGO_SET_WIDTH = LOGO_COUNT * TOTAL_LOGO_ITEM_WIDTH; 

// Contionous run and run
const marqueeKeyframes = `
  /* Keyframe animation for continuous left scroll */
  @keyframes scroll-left {
    from {
      transform: translateX(0);
    }
    to {
      /* Translates exactly by the total calculated width of one set of logos */
      transform: translateX(-${TOTAL_LOGO_SET_WIDTH}px); 
    }
  }
`;

const LOGOS = [
    { 
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HSbQjoyuhkTtxCAS7tE3jYIzNfTIntcbPg&s", 
        name: "MeitY StartUp" 
    },
    { 
        imgUrl: "https://supercomputingindia.org/assets/images/assosiation/nsm.png", 
        name: "National Supercomputing Machine" 
    }, 
    { 
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtvAIFT1iXPLABq19jks4Cqn7HswsfBKr_g&s", 
        name: "Digital India" 
    },
    { 
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATbs7rKHXtkFqst9OgJD_6XnOW-NApNP7uA&s", 
        name: "My Gov" 
    },
    { 
        imgUrl: "https://media.licdn.com/dms/image/v2/C4E0BAQGS7wkAUjAXQw/company-logo_200_200/company-logo_200_200/0/1633615260592/cdac_acts_pune_logo?e=2147483647&v=beta&t=xcO9KqGw2bqpNNt2viciu90otSVzbFmnuCV3FxqORv0", 
        name: "CDAC" 
    },
    { 
        imgUrl: "https://media.licdn.com/dms/image/v2/C4E03AQGmArWGD5qZYQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654237373077?e=2147483647&v=beta&t=I4vLSevYt5CJooCsEWlOvRXRa6SGE6RvR53BdgDDuaI", 
        name: "NaMPET" 
    },
];

const LogoCard = ({ imgUrl, name }) => (
    <div className="flex-shrink-0 mx-8 flex flex-col items-center justify-start w-48 text-center py-2">
        <img 
            src={imgUrl} 
            alt={`${name} Logo`} 
            className="w-32 h-32 object-contain rounded-lg transform transition duration-300 hover:scale-105" 
            onError={(e) => {
                e.target.onerror = null;
                e.target.src=`https://placehold.co/128x128/6B46C1/ffffff?text=${name.substring(0, 4)}`;
            }}
        />
        <p className="mt-4 text-sm md:text-base font-semibold text-gray-700 tracking-wide truncate max-w-full">
            {name}
        </p>
    </div>
);

const Marquee = () => {
    const [isPaused, setIsPaused] = useState(false);

    const doubledLogos = useMemo(() => [...LOGOS, ...LOGOS], []);

    const scrollDuration = LOGOS.length * 4; 

    return (
        <div className="p-4 md:p-12 bg-gray-50 min-h-screen flex flex-col items-center justify-center font-sans">
            <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 mb-16 pb-2 font-serif'>
                Our Partners & Organizers
            </h1>
            <style>{marqueeKeyframes}</style>
            <div 
                className="w-full max-w-7xl overflow-hidden relative py-8" 
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex flex-row flex-nowrap" 
                    style={{
                        width: `${TOTAL_LOGO_SET_WIDTH * 2}px`, 
                        animation: `scroll-left ${scrollDuration}s linear infinite`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                >
                    {doubledLogos.map((logo, index) => (
                        <LogoCard 
                            key={`${logo.name}-${index}`}
                            imgUrl={logo.imgUrl}
                            name={logo.name} 
                        />
                    ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-gray-50 to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-gray-50 to-transparent"></div>
            </div>
            
        </div>
    );
};

// Main Component
export default function App() {
    return (
        <Marquee />
    );
}
