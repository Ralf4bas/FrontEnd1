import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center mt-16">
      <h2 className="text-5xl font-bold text-gray-700 mb-4">404</h2>
      <p className="text-gray-500 text-lg mb-6">Halaman tidak ditemukan.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Kembali ke Home
      </Link>
    </div>
  );
};

export default NotFound;
