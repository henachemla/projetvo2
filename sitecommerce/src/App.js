import './App.css';
import Header from './composant/header';
import SectionPhoto from './composant/sectionPhoto';
import ArticlesSection from './composant/articlesSection';
import Footer from './composant/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionPhoto/>
      <ArticlesSection/>
      <Footer/>
    </div>
  );
}

export default App;