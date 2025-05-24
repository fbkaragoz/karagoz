import { FaBrain, FaRobot, FaNetworkWired } from 'react-icons/fa';
import { FiDatabase, FiCode, FiGlobe } from 'react-icons/fi';

interface ProjectIconProps {
  iconName: string;
  className?: string;
}

export default function ProjectIcon({ iconName, className = "" }: ProjectIconProps) {
  const iconMap = {
    FaBrain: FaBrain,
    FaRobot: FaRobot,
    FaNetworkWired: FaNetworkWired,
    FiDatabase: FiDatabase,
    FiCode: FiCode,
    FiGlobe: FiGlobe,
  };

  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  
  if (!IconComponent) {
    return <FiCode className={className} />; // Fallback icon
  }

  return <IconComponent className={className} />;
} 