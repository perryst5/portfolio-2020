import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Navigation from './components/Navigation'
import ContentLoader from './components/ContentLoader'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Header />
        <Navigation />
        <ContentLoader />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
