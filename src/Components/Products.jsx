import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Menu, X, Search, Zap, Code, Layout } from 'lucide-react';

const productsData = [
    {
        id: 1,
        name: "Indigenous Magnetic Resonance Imaging (IMRI)",
        description: "Indigenous 1.5T MRI (IMRI) is a national initiative to design and develop a fully indigenous Magnetic Resonance Imaging system in India, led by SAMEER (Society for Applied Microwave Electronics Engineering and Research) under MeitY. The goal is to eliminate dependence on imported MRI systems, which are costly and require foreign service support, by creating end-to-end indigenous capability in hardware, software, and subsystems.",
        image: "https://images.news18.com/ibnlive/uploads/2025/03/MRI-NEW-2025-03-5c24cf25eed5ff838c68b9d4e0a41a1f.jpg",
        link: "#",
        outlay: "6230.19",
        duration: "16-12-2014 to 31-03-2026 (11 years, 3 months, and 15 days) ",
        expenditure: "97%",
        achievements: `1.Industry Engaged: 07
2.Manpower Trained:
• 150-200 Trained Engineer
• 100 Master/PhD Students
• Knowledge Sharing and Trained 100 Industry People
3. Patent Applied: 5
4. Patent Granted: 3
5. Publication: 100`
    },
    {
        id: 2,
        name: "National Supercomputing Mission (NSM)",
        description: "Launched in April 2015, the National Supercomputing Mission (NSM) aims to position India as a global supercomputing leader by empowering researchers with advanced HPC infrastructure, optimizing investments, and achieving self-reliance. ",
        image: "https://www.nextias.com/blog/wp-content/uploads/2025/03/national-supercomputing-mission-nsm.png",
        link: "#",
        outlay: `Total Cost:₹4,50,000 
MIETY’s Contribution: ₹1,76,000 
DST’s Contribution:₹2,74,000`,
        duration: "09.04.2015 to 31.12.2025(10 years, 8 months, and 22 days)",
        expenditure: `Overall expenditure:- 54%
MeitY’s expenditure:- 81%
DST’s expenditure:- 37%`,
        achievements: `(i)Supercomputing System Deployed: 37 systems deployed at various Academic and Research institutes including IISc and IITs, with a cumulative compute power of 40 Petaflops.
(ii)Development of indigenous supercomputing sub-components through Research and Development 
a) Indigenous HPC Server Board: The "Rudra" HPC server board, the first of its kind in India, has been developed and is being used in the development of all Phase-III supercomputers
b) Indigenous High-Speed Interconnect: “Trinetra” high-speed Inter Communication Network between computer nodes has been developed, tested and deployed. 
c) Indigenous HPC System Software Stack: complete HPC system software stack has been indigenously designed and developed and is currently being used in all NSM supercomputers
d) Indigenous HPC Processor: The development of the HPC processor “AUM” is under progress. This processor will play a pivotal role in future supercomputing systems and server designs, strengthening India's position as a key player in the global server market.
(iii)Development of applications for national need: Application development projects are being carried out in consortium mode in various domains for meeting National needs and are at various stages of development as follows:
a) Early Warning System for Flood Prediction in River Basins of India- The system has been developed and is being used by the Ministry of Jal Shakti. The system was launched by the Hon'ble Minister for Jal Shakti.
b) HPC Software for Seismic Imaging in Oil and Gas Exploration (SeisRTM )- The software has been developed and deployed in ONGC; Demos given to Reliance and Oil India
c) NSM Platform for Genomics and Drug Discovery (NPGDD): Enabled fast simulations for drug discovery. Tools developed under the project used for cancer genomics and COVID-19 studies. Used supercomputing to study Ayurvedic formulations (compounds like Giloy) for COVID-19 drug repurposing for M/o AYUSH.
d) Urban Modelling: A Multi-Sectorial Simulation Lab and Science Based Decision Support Framework has been developed to address Urban Environment Issues. Actionable forecasts are being shared with IMD, Pune Municipal Corporation, and the Maharashtra Water Resources Department, improving urban disaster response and policy planning.
e) HPC-Based Wildfire Spread Forecasting System: Developed the Sikkim Wildfire Forecasting & Monitoring System (SWFMS) using HPC to model wildfire behaviour. Provides 48-hour wildfire spread forecasts after ignition input, aiding early response. Sikkim Forest department referred the forecasted fire spread maps for two incidences of live fires (27 January 2023 and 12 – 13 March 2024)
(iv)Capacity Building: Over 26,000 manpower trained in HPC/AI domain. 4 Nodal Centres (IIT Kharagpur, IIT Madras, IIT Goa and IIT Palakkad,) offer formal HPC/AI training, internships, and PG diploma for SC/ST candidates via C-DAC ACTS. 5 New Nodal Centers- DTU, IGTU Amarkantak, WCE-Sangli, NIT Itangar, Port Blair university being established. MoU b/w C-DAC & AICTE to train Master Trainers to expand HPC education in colleges across India.`
    },
    {
        id: 3,
        name: "Technology Incubation and Development of Entrepreneurs (TIDE 2.0) Scheme",
        description: "Promotion of tech entrepreneurship throughfinancial and technical support to incubators engaged in supporting ICT startups using emerging technologies such as IoT, AI,Block-chain, Robotics etc. in seven (07) pre-identified areas of societal relevance. To promote incubation activities through 51 incubators using a three- tiered approach at institutes of higher learning and at premier R&D organizations, pan India Handholding of approximately 2000 tech start-ups during the scheme period of five years. To create a networked ecosystem to support technology startups/ incubates through identifying and creating linkages for leveraging complementary strengths",
        image: "https://msh.meity.gov.in/assets/img/tide/salient_features.png",
        link: "#monitor-details",
        outlay: "₹26462 lakh",
        duration: "01.02.2019 to 31.01.2026 (7 years)",
        expenditure: "0",
        achievements: `➢ 1650+ startups supported across 51 Incubation Centres 
➢ 750+ low engagement programmes conducted 
➢ 85+ deep engagement programmes conducted 
➢ 140+ Challenge Grant/ Hackathons 
➢ 600+ training workshops Conducted 
➢ 1200+ products/prototype/MVP Developed 
➢ 300+ patents filed 
➢ 250+ Trademarks registered/ copyrights filed 
➢ 300 Cr Turnover of graduated startups 
➢ 700+ Startups graduated 
➢ 15000+ employments generated`
    },
    {
        id: 4,
        name: "National Centre for Additive Manufacturing (NCAM)",
        description: "Part of National Strategy for Additive Manufacturing (NSAM) released in February, 2022, by MeitY. Development of 10 AM technologies through start-ups Manpower training Promottion of Additive Manufacturing (AM) ecosystem",
        image: "https://media.licdn.com/dms/image/v2/C560BAQHFZeZglnYfAA/company-logo_200_200/company-logo_200_200/0/1651393333833/national_centre_for_additive_manufacturing_ncam_logo?e=2147483647&v=beta&t=12T4wNghxu3n29EvdGBhA9Bws-spzDKtyuCLAs8W3n4",
        link: "#",
        outlay: `6800.60
(MeitY: 3058.00
SG: 1874.60
Industry: 1868)`,
        duration: "5 Years",
        expenditure: "45.6",
        achievements: `AM Technolgies developed through start-ups - 7,
Publication-2, Patent- 3, 
PoC field deployment- 2,
Manpower Trained- 29024, 
Digitally integartion of Indian AM ecosystem initiated Technology Transfer Office under establishment Annual AM Symposium initiated`
    },
    {
        id: 5,
        name: "National Mission on Power Electronics Technology (NaMPET-III)",
        description: `The overall objective of this programme is to strengthen the power electronics technology base in the country by carrying out a multitude of activities like Technology development, deployment, technology transfer, Awareness creation & Manpower development and strengthening the industry interactions with R&D and academic institutes through collaborative research projects. Currently, the progress is satisfactory with the realization of TRL 6/7, including 18 transfers of technologies to 23 industries for commercialization with revenue genration of Rs. 47.43 Cr. A model indigenous EV charging station was inaugurated at C-DAC Thiruvananthapuram to support public charging infrastructure. 04 new technologies have been field-tested, and others like WBG magnetometers and MEMS sensors are in final trials stage`,
        image: "https://www.iitr.ac.in/nwpe2017/assets/images/nampet.jpg",
        link: "#",
        outlay: "₹9300",
        duration: "30.01.2019 to 31.01.2026 (7 years and 1 day)",
        expenditure: "80%",
        achievements: `1. Number of specialised manpower trained: 250   
2. Number of patents/copyrights: 66 (Patents: 29, Copywrite: 37)
3. Number of Transfer of Technology (ToT) completed: 18
4.Number of papers/publications/Presentations: 144
5. Number of Short-term courses conducted: 23
6. Number of International Interactions : 05
7. Number of PoC leading to field deployment: 15
8. Number of industries engaged: 23
9. Number of startups supported: 9 
10. ToT-Revenue generated: Rs. 47.433 Cr
11. Royalty earnings Rs. 40 Lakhs`
    },
    {
        id: 6,
        name: "High Performance Computing",
        description: "High-Performance Computing (HPC) in India is a strategic initiative aimed at advancing research, fostering innovation, and enhancing technological capabilities across various sectors. Here's an overview of the key HPC programs, their financial outlays, durations, and objectives:",
        image: "https://www.networkworld.com/wp-content/uploads/2023/11/supercomputer_servers_data_center_by_maxiphoto_getty_images_1200x800-100776400-orig.jpg?quality=50&strip=all",
        link: "#",
        outlay: "₹4,500 crore (approximately USD 600 million)",
        duration: "7 years (2015–2022)",
        expenditure: "As of August 2025, the mission has established 37 supercomputing systems with a combined capacity of 40 petaflops, supporting over 10,000 researchers across various fields.",
        achievements: "To establish a network of over 70 supercomputers ranging from 50 teraflops to multi-petaflops systems, interconnected via the National Knowledge Network (NKN). The mission aims to provide state-of-the-art computing facilities to researchers, addressing grand challenges and enhancing global competitiveness in key areas of supercomputing technologies."
    },
    {
        id: 7,
        name: "Digital India Internship Scheme",
        description: "An initiative to offer internship opportunities to students in various technology and policy domains under the Ministry of Electronics and Information Technology (MeitY). The scheme aims to expose students to the functioning of the government and the latest developments in digital technology.",
        image: "https://i0.wp.com/lawbhoomi.com/wp-content/uploads/2024/05/Digital-India.jpg?fit=600%2C400&ssl=1",
        link: "#",
        outlay: "Not specified (Operational Expenditure)",
        duration: "Ongoing",
        expenditure: "Varies",
        achievements: "Trained hundreds of students across various technical and policy areas, fostering a connection between academia and government tech initiatives."
    },
    {
        id: 8,
        name: "C-DAC's AI Research Initiative",
        description: "A major thrust by the Centre for Development of Advanced Computing (C-DAC) on developing indigenous capabilities in Artificial Intelligence, including machine learning frameworks, large language models, and AI-driven hardware accelerators for national security and societal impact.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiv8GJAKoppg7sCpg_4Udjw17KDixtKjXVpA&s",
        link: "#",
        outlay: "₹500 crore (Initial Phase)",
        duration: "5 Years (2024-2029)",
        expenditure: "15%",
        achievements: "Development of 'BharatGPT' core model (in progress). Establishing three national AI research labs."
    },
];

const PRODUCTS_PER_LOAD = 6; // total number of product i have loaded 


const ProductCard = ({ product, onViewDetails, delay }) => {
    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                } else if (!entry.isIntersecting && isVisible) {
                    setIsVisible(false);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1, 
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, [isVisible]);

    const animationClasses = isVisible
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 translate-y-8 scale-95';

    const shortDescription = product.description.substring(0, 90);
    const needsMore = product.description.length > 90;

    return (
        <div
            ref={cardRef}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white rounded-xl shadow-lg flex flex-col min-h-[450px] transition-all duration-700 ease-out 
						transform hover:scale-[1.02] hover:shadow-2xl overflow-hidden border border-gray-100 
						${animationClasses}`}
        >
            {/* Image Section of webpage */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x250/d1d5db/374151?text=No+Image";
                }}
            />

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-xl font-bold text-gray-900 leading-snug">{product.name}</h2>
                </div>

                {/* Description updated */}
                <p className="text-gray-600 mb-4 h-24 overflow-hidden text-sm">
                    {shortDescription}
                    {needsMore && (
                        <span
                            className="text-indigo-700 font-bold cursor-pointer hover:text-indigo-900 transition duration-150"
                            onClick={() => onViewDetails(product)}
                        >
                            ...more
                        </span>
                    )}
                </p>

                <div className="mt-auto">
                    {/* Action Button */}
                    <button
                        onClick={() => onViewDetails(product)}
                        className="w-full inline-flex items-center justify-center bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-150 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
                        role="button"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- 4. product Component for inside in view details Details ---

const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null;

    const tableData = [
        { label: "Outlay (in lakhs)", value: product.outlay },
        { label: "Duration", value: product.duration },
        { label: "Expenditure", value: product.expenditure },
        { label: "Achievements", value: product.achievements }
    ];

    return (
        // Overlay
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl transform transition-all duration-300 scale-100 overflow-hidden"
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
            >
                
                <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-indigo-50">
                    <h3 className="text-2xl font-bold text-indigo-600">{product.name} Details</h3>

                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-200 transition"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/*Description and Table Content */}
                <div className="p-6 max-h-[80vh] overflow-y-auto">
                    {/* Full Description Section */}
                    <div className="mb-6 pb-4 border-b border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                        {/* Full description is displayed here */}
                        <p className="text-gray-700 whitespace-pre-wrap">{product.description}</p>
                    </div>

                    {/* Table */}
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-indigo-50 sticky top-0">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider w-1/3"
                                >
                                    Detail
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider w-2/3"
                                >
                                    Value
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {tableData.map((row) => (
                                <tr key={row.label} className="even:bg-gray-50 hover:bg-indigo-50 transition duration-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {row.label}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 break-words whitespace-pre-wrap">
                                        {row.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

//Products Component 

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    
    const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_LOAD); // Start with 6

    const productsToDisplay = productsData.slice(0, visibleCount);
    
    const hasMore = visibleCount < productsData.length;

    const handleLoadMore = () => {
        setVisibleCount(productsData.length);
    };

    const handleViewDetails = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div id="products-section" className="min-h-screen pt-20 pb-10 scroll-mt-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl text-gray-900 mb-16 pb-2 font-bold font-serif ">
                        Products-Technologies
                    </h1>
                </header>

                {/* Product Grid -- Box*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productsToDisplay.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onViewDetails={handleViewDetails}
                            delay={index * 150}
                        />
                    ))}
                </div>

                {/* Load More Button - Only shows if there are more products */}
                {hasMore && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-xl 
                                     hover:bg-amber-600 transition duration-300 transform hover:scale-[1.03]
                                     focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-50 text-lg"
                        >
                            Load More ({productsData.length - visibleCount} more)
                        </button>
                    </div>
                )}
            </div>
            {selectedProduct && (
                <ProductDetailsModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

const App = () => {
    const scrollToProducts = () => {
        const element = document.getElementById("products-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Products />
        </div>
    );
};

export default App;