import React, { useState, useMemo } from 'react';
import {Gavel,Globe,Handshake,Scale,BookOpen,ChevronDown,Search,Filter,Users,Eye} from 'lucide-react';

const toolData = [
  {
    id: 1,
    title: 'Next Generation Wireless Research and Standardization on 5G and Beyond',
    metadata: [
      { icon: Gavel, text: 'Projects' },
      { icon: Globe, text: 'India' },
      { icon: Handshake, text: ': CC&BT' },
    ],
    description: "India aims to contribute 10% of global 6G patents, reflecting its commitment to advancing next-generation wireless technologies. The Bharat 6G Vision Document, released in 2023, outlines a roadmap for research and development, emphasizing areas such as AI integration, energy efficiency, and security. Institutions like IIT-Kanpur and CEWiT are actively involved in this endeavor, collaborating with global partners to enhance India's influence in standard-setting bodies like 3GPP and ITU.",
    capabilities: [],
  },
  {
    id: 2,
    title: 'Establisment of Centre of Promotion of Additive Manufacturing (CPAM) : Renewble enrgy & Distributed manufacturing using Customized 4D & 3D Technologies',
    metadata: [
      { icon: Eye, text: 'VIEWS' },
      { icon: Users, text: 'GOVERNMENT' },
    ],
    description: 'A platform designed to allow government bodies and researchers to review and audit the decision-making processes of public-sector AI systems for fairness, bias, and compliance.',
    model: 'OpenAudit Alpha',
    capabilities: [
      { icon: Filter, text: 'Model Auditability' },
      { icon: Search, text: 'Bias Detection & Reporting' },
    ],
  },
  {
    id: 3,
    title: 'National Mission on Power Electronics Technology (NaMPET-III)',
    metadata: [
      { icon: Globe, text: 'Misson' },
      { icon: Scale, text: 'Electronic Technology' },
    ],
    description: 'The National Mission on Power Electronics Technology (NaMPET-III) is the third phase of a national-level Research & Development (R&D) program launched by the Ministry of Electronics and Information Technology (MeitY), Government of India.',
    model: 'Sentinel 9',
    capabilities: [
      { icon: BookOpen, text: 'Data Visualization' },
      { icon: Handshake, text: 'Public Policy Insight' },
    ],
  },
  {
    id: 4,
    title: 'Gas Sensor Testing and Certification Facility GaSTeC',
    metadata: [
      { icon: Scale, text: 'GaSTeC' },
    ],
    description: "The information you've provided, Gas Sensor Testing and Certification Facility GaSTeC, most likely refers to an initiative or center within the Indian public sector, specifically related to the development and standardization of sensor technology",
    model: 'Sentinel 9',
    capabilities: [
      { icon: BookOpen, text: 'Data Visualization' },
      { icon: Handshake, text: 'Public Policy Insight' },
    ],
  },
];

const DropdownFilter = ({ title, options, selected, onChange }) => (
  <div className="mb-6">
    <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2">
      {title}
    </label>
    <div className="relative">
      <select
        value={selected}
        onChange={onChange}
        className="w-full bg-white border border-gray-300 rounded-lg py-2.5 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out cursor-pointer text-sm"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const FilterSidebar = ({ filters, setFilters, searchTerm, setSearchTerm }) => {
  const allOptions = ['Information Technology', 'Electronics', 'CC & BT'];

  return (
    <div className="lg:w-72 p-6 lg:pr-8 border-b lg:border-b-0 lg:border-r border-gray-200 bg-white sticky top-0 font-sans">
      <h2 className="lg:hidden text-lg font-bold mb-4 flex items-center text-gray-800">
        <Filter className="h-5 w-5 mr-2" /> Filters
      </h2>
      
      <div className="mb-8">
        <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2 font-sans">
          SEARCH
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search term"
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="w-full bg-white border border-gray-300 rounded-lg py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Developed By */}
      <DropdownFilter 
        title="DEVELOPED BY"
        options={['MeitY', 'R & D', 'Others']}
        selected={filters.developedBy}
        onChange={(e) => setFilters({ ...filters, developedBy: e.target.value })}
      />

      
      {/* Origin Country */}
      <DropdownFilter
        title="Vertical"
        options={allOptions}
        selected={filters.originCountry}
        onChange={(e) => setFilters({ ...filters, originCountry: e.target.value })}
      />
    </div>
  );
};
const ToolCard = ({ tool }) => (
  <div className="bg-purple-100/70 p-6 sm:p-8 rounded-xl mb-6">
    {/* Title */}
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-snug">
      {tool.title}
    </h1>

    {/* Metadata Pills */}
    <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-purple-800 mb-6">
      {tool.metadata.map((meta, index) => (
        <span key={index} className="flex items-center">
          <meta.icon className="w-4 h-4 mr-1.5" /> {meta.text}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
      {tool.description}
      {tool.model && (
        <>
          <br /><br />
          <span className='font-semibold'>Model: </span>{tool.model}
        </>
      )}
    </p>

    {/* Footer Capabilities */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 border-t border-purple-300/50">
      {tool.capabilities.map((cap, index) => (
        <span key={index} className="flex items-center text-sm sm:text-base font-semibold text-gray-800">
          <cap.icon className="w-5 h-5 mr-2 text-purple-600" /> {cap.text}
        </span>
      ))}
    </div>
  </div>
);

const NestedProducts = () => {
  const [filters, setFilters] = useState({
    developedBy: 'Civil Society',
    sourcedFrom: 'All',
    originCountry: 'All',
    sdg: 'All',
  });
  
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();
    
    if (!lowerCaseSearchTerm) {
      return toolData;
    }

    return toolData.filter(tool => 
      tool.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      tool.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);


  return (
    <div className="min-h-screen bg-gray-50 font-serif p-4 sm:p-8 lg:p-0">
      <div className="container mx-auto">
        
        <div className="flex justify-end pt-4 pb-0 px-4 sm:pt-8 sm:px-8 lg:pt-6 lg:px-10 text-sm text-gray-600 font-medium font-sans">
        {filteredTools.length} Projects
        </div>

        <div className="flex flex-col lg:flex-row lg:divide-x divide-gray-200">
          
          <FilterSidebar 
            filters={filters} 
            setFilters={setFilters} 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />

          <div className="flex-1 p-6 sm:p-8 lg:p-10">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))
            ) : (
              <div className="text-center p-10 text-gray-500">
                <Search className="w-10 h-10 mx-auto mb-4" />
                <p className="text-lg font-semibold">No tools found matching "{searchTerm}"</p>
                <p>Try adjusting your search or filters.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default NestedProducts;