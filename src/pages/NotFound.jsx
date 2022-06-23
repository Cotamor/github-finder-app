import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-lg">
          <h1 class="text-8xl font-bold mb-8">Oops!</h1>
          <p class="text-5xl mb-8">
            404 - Page Not Found!
          </p>
          <Link className="btn btn-primary btn-lg" to='/'>
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
