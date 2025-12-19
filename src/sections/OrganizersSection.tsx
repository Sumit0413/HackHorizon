
import Image from "next/image";
import ArvindKrPandey from "../assets/organisers/ArvindKrPandey.png";
import Ashwini from "../assets/organisers/Ashwini.png";
import souviksir from "../assets/organisers/souviksir.png";
import mamatha from "../assets/organisers/mamatha.jpg";
import akashsir from "../assets/organisers/akashsir.png";
import sayantanimam from "../assets/organisers/sayantanimam.png";
import KhushiRani from "../assets/organisers/Khushi rani.jpg";
import anjali from "../assets/organisers/anjali.jpg";
import ritesh from "../assets/organisers/ritesh.jpg";
import gourav from "../assets/organisers/gourav.jpg";
import preet from "../assets/organisers/preet.jpg";
import nikita from "../assets/organisers/nikita.jpg";
import sonali from "../assets/organisers/sonali.jpg";
import sohail from "../assets/organisers/sohail.jpg";
import adeeb from "../assets/organisers/adeeb.jpg";
import sanchit from "../assets/organisers/sanchit.jpg";
import aaditya from "../assets/organisers/aaditya.jpg";
import student12 from "../assets/organisers/sohail.jpg";
import umeshsir from "../assets/organisers/umeshsir.png";
import meghamam from "../assets/organisers/meghamam.jpg";
import utkarshsir from "../assets/organisers/utkarsh sir.png";

export default function OrganizersSection() {
    const convenors = [
        { name: "Dr. Arvind Kumar Pandey", role: "Dean, School of Engineering & IT", institution: "ARKA JAIN University", image: ArvindKrPandey },
        { name: "Dr. Ashwini Kumar", role: "Asst. Dean, School of Engineering & IT", institution: "ARKA JAIN University", image: Ashwini },
    ];

    const facultyCoordinators = [
        { name: "Dr. Souvik Singh Rathore", role: "Assistant Professor", institution: "ARKA JAIN University", image: souviksir },
        { name: "Prof. Mamatha V", role: "Assistant Professor", institution: "ARKA JAIN University", image: mamatha },
        { name: "Prof. Akash Bhagat", role: "Assistant Professor", institution: "ARKA JAIN University", image: akashsir },
        { name: "Prof. Sayantani De", role: "Assistant Professor", institution: "ARKA JAIN University", image: sayantanimam },
    ];

    const studentCoordinators = [
        { name: "Khushi Rani", role: "General Secretary", team: "Code & Compute Society", image: KhushiRani },
        { name: "Anjali Singh", role: "Organiser", team: "GDG on Campus AJU", image: anjali },
        { name: "Ritesh Kumar", role: "President", team: "Code & Compute Society", image: ritesh },
        { name: "Gourav Kr Pandey", role: "Vice-President", team: "Code & Compute Society", image: gourav },
        { name: "Preet Kumar", role: "Technical Lead", team: "Code & Compute Society", image: preet },
        { name: "Nikita Mishra", role: "PR Lead", team: "GDG on Campus AJU", image: nikita },
        { name: "Sonali Mahato", role: "Social Media Lead", team: "GDG on Campus AJU", image: sonali },
        { name: "Sohail Khan", role: "Creative Lead", team: "GDG on Campus AJU", image: sohail },
        { name: "Adeeb Razi", role: "Community Lead", team: "GDG on Campus AJU", image: adeeb },
        { name: "Sanchit Agarwal", role: "Co-Technical Lead", team: "GDG on Campus AJU", image: sanchit },
        { name: "Aaditya Singh", role: "Design Lead", team: "GDG on Campus AJU", image: aaditya },
        { name: "Avijeet Ghosal", role: "Management Lead", team: "GDG on Campus AJU", image: student12 },
    ];

    const technicalCoordinators = [
        { name: "Mr. Umesh Tiwari", role: "I.T Head", team: "ARKA JAIN University", image: umeshsir },
        { name: "Megha Shrivastava", role: "", team: "ARKA JAIN University", image: meghamam },
        { name: "Mr. Utkarsh", role: "", team: "ARKA JAIN University", image: utkarshsir },
    ];

    return (
        <div className="relative bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
            {/* Background texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-black to-[#0a0a1a] opacity-80"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Heading */}
                <div className="flex justify-center mb-16 md:mb-20">
                    <div className="relative">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center uppercase tracking-tight" 
                            style={{ 
                                fontFamily: 'Impact, Arial Black, sans-serif',
                                textShadow: '0 0 20px rgba(123, 202, 248, 0.5), 4px 4px 0px rgba(0,0,0,0.5)',
                                WebkitTextStroke: '2px #7BCAF8',
                            }}>
                            ORGANISERS
                        </h2>
                    </div>
                </div>

                {/* Convenors Section */}
                <div className="mb-20 md:mb-24">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 uppercase" 
                        style={{
                            color: '#00D9FF',
                            fontFamily: 'Impact, Arial Black, sans-serif',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                        Convenors
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                        {convenors.map((person, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="relative w-56 h-72 mb-6">
                                    {/* Profile Photo */}
                                    <div className="absolute inset-[8%] z-0 overflow-hidden transition-all duration-300 group-hover:scale-105">
                                        <Image 
                                            src={person.image} 
                                            alt={person.name} 
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold text-white text-center mb-2">{person.name}</h4>
                                <p className="text-[#7BCAF8] text-center font-medium mb-1">{person.role}</p>
                                <p className="text-gray-400 text-center text-sm">{person.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty Coordinators Section */}
                <div className="mb-20 md:mb-24">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 uppercase" 
                        style={{
                            color: '#00D9FF',
                            fontFamily: 'Impact, Arial Black, sans-serif',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                        Faculty Coordinators
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {facultyCoordinators.map((person, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="relative w-48 h-60 mb-6">
                                    {/* Profile Photo */}
                                    <div className="absolute inset-[8%] z-0 overflow-hidden transition-all duration-300 group-hover:scale-105">
                                        <Image 
                                            src={person.image} 
                                            alt={person.name} 
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-white text-center mb-2">{person.name}</h4>
                                <p className="text-[#7BCAF8] text-center font-medium text-sm mb-1">{person.role}</p>
                                <p className="text-gray-400 text-center text-xs">{person.institution}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Student Coordinators Section */}
                <div className="mb-20 md:mb-24">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 uppercase" 
                        style={{
                            color: '#00D9FF',
                            fontFamily: 'Impact, Arial Black, sans-serif',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                        Core Team
                    </h3>
                    <p className="text-xl md:text-2xl text-[#7BCAF8] text-center mb-12 font-semibold">Student Coordinators</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                        {studentCoordinators.map((person, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="relative w-44 h-56 mb-6">
                                    {/* Profile Photo */}
                                    <div className="absolute inset-[8%] z-0 overflow-hidden transition-all duration-300 group-hover:scale-105">
                                        <Image 
                                            src={person.image} 
                                            alt={person.name} 
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-white text-center mb-2">{person.name}</h4>
                                <p className="text-[#7BCAF8] text-center font-medium text-sm mb-1">{person.role}</p>
                                <p className="text-gray-400 text-center text-xs">{person.team}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Coordinators Section */}
                <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 uppercase" 
                        style={{
                            color: '#00D9FF',
                            fontFamily: 'Impact, Arial Black, sans-serif',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                        Technical Team
                    </h3>
                    <p className="text-xl md:text-2xl text-[#7BCAF8] text-center mb-12 font-semibold">Technical Coordinators</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
                        {technicalCoordinators.map((person, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="relative w-44 h-56 mb-6">
                                    {/* Profile Photo */}
                                    <div className="absolute inset-[8%] z-0 overflow-hidden transition-all duration-300 group-hover:scale-105">
                                        <Image 
                                            src={person.image} 
                                            alt={person.name} 
                                            fill
                                            className="object-cover rounded-2xl"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-lg md:text-xl font-bold text-white text-center mb-2">{person.name}</h4>
                                {person.role && <p className="text-[#7BCAF8] text-center font-medium text-sm mb-1">{person.role}</p>}
                                <p className="text-gray-400 text-center text-xs">{person.team}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
