
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-8xl font-bold text-brand">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-3">
        Sorry! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-brand text-white px-6 py-3 rounded-lg hover:bg-brand-dark"
      >
        Back to Home
      </Link>

    </main>
  );
}

export default NotFound;
