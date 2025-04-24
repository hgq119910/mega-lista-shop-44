
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex flex-col items-center text-primary hover:opacity-90 transition-opacity">
      <div className="text-3xl font-bold flex items-center">
        <div className="relative">
          <div className="w-10 h-10 border-4 border-primary transform rotate-45" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">
            M
          </span>
        </div>
        <span className="ml-2">MultiTienda</span>
      </div>
      <span className="text-sm font-medium text-gray-600">TODO EN UN SOLO LUGAR</span>
    </Link>
  );
};

export default Logo;
