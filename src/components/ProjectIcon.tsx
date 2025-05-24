import { FaBrain, FaRobot, FaNetworkWired } from 'react-icons/fa';
import { FiDatabase, FiCode, FiGlobe } from 'react-icons/fi';
import Image from 'next/image';

interface ProjectIconProps {
  iconName: string;
  className?: string;
}

export default function ProjectIcon({ iconName, className = "" }: ProjectIconProps) {
  // Real project logos
  const logoMap = {
    'cdliai': '/cdliai.png',
    'better_query': '/better_query.svg',
    'botanera': '/botanera.svg',
    'boun': '/boun.png',
    'ottominer': '/ottominer.png',
  };

  // Fallback icon map
  const iconMap = {
    FaBrain: FaBrain,
    FaRobot: FaRobot,
    FaNetworkWired: FaNetworkWired,
    FiDatabase: FiDatabase,
    FiCode: FiCode,
    FiGlobe: FiGlobe,
  };

  // Check if it's a real project logo
  if (logoMap[iconName as keyof typeof logoMap]) {
    const logoSrc = logoMap[iconName as keyof typeof logoMap];
    return (
      <div className={`w-8 h-8 relative ${className}`}>
        <Image
          src={logoSrc}
          alt={iconName}
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
    );
  }

  // Fallback to icon
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  
  if (!IconComponent) {
    return <FiCode className={className} />; // Fallback icon
  }

  return <IconComponent className={className} />;
} 