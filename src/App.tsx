import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ProfilePage from './pages/profilePage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
