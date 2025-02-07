import { LaptopIcon, Users2Icon } from "lucide-react";

interface HeroContentProps {
  isSignIn: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isSignIn }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center p-8">
      {isSignIn ? (
        <>
          <LaptopIcon className="w-24 h-24 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-800">Dashboard Widgets Haven</h2>
          <p className="text-gray-600 max-w-md">
            Access your personalized dashboard and manage your widgets with ease.
          </p>
        </>
      ) : (
        <>
          <Users2Icon className="w-24 h-24 text-purple-600" />
          <h2 className="text-3xl font-bold text-gray-800">Join Our Community</h2>
          <p className="text-gray-600 max-w-md">
            Create an account to start customizing your dashboard experience.
          </p>
        </>
      )}
    </div>
  );
};

export default HeroContent; 
