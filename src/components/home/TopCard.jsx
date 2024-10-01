import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function TopCard({ title, num }) {
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h1>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{num}</p>
      <Link
        href="/"
        className="inline-flex gap-1 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Read more
        <FaArrowRight />
      </Link>
    </div>
  );
}
