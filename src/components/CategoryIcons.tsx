
import { categories } from '@/types/store';
import { Link } from 'react-router-dom';

const CategoryIcons = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
