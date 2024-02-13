import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <h1>
      404
      <p>Page not found</p>
      <Link to="/">Go to main page</Link>
    </h1>
  );
}

export default NotFoundPage;
