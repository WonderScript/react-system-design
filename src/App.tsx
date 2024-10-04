import './App.css';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import TimeboxPage from './pages/timeboxPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>|{' '}
        <Link to="/timebox">timebox</Link>
        <Routes>
          <Route path="/timebox" element={<TimeboxPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
