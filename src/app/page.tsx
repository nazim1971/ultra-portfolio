
import AboutMe from '@/components/home/AboutMe';
import Find from '@/components/home/FindMe';
import Hero from '@/components/home/Hero';
import Resume from '@/components/home/Resume';
import Skills from '@/components/home/Skills';
import AllProjectsPage from './project/page';

const HomePage = () => {

  return (
    <div className="mt-5" >
    <Hero/>
    <Find/>
    <AboutMe/>
    <Skills/>
   <AllProjectsPage/>
   <Resume/>
   </div>
  );
};

export default HomePage;