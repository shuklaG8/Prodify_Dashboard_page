
import Tasks from './Tasks';
import Projects from './Projects';
import MyGoals from './MyGoals';
import Calendar from './Calendar';
// import Remainders from './Remainders';

const MainContent = () => {
  return (
    <div className="w-3/4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <Tasks />
        <Projects/>
        <MyGoals/>
        <Calendar/>
        {/* <Remainders/> */}
      </div>
    </div>
  );
};

export default MainContent;
