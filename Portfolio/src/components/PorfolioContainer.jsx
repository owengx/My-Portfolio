import { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
// import Header from './components/Header';


export default function PortfolioContainer() {
  //inline stlying for entire app. background, font color 
  const style = {
    backgroundColor: 'black',
    minHeight: '100vh',
    color: 'white'
  }
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style= {style}>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}