import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MyCourses from '../containers/MyCoursesContainer/MyCoursesContainer';
import Practices from '../containers/PracticesContainer/practices';
import Test from '../containers/TestContainer/test';
import Jobs from '../containers/JobsContainer/jobs';
import OurSolution from '../containers/OurSolutionContainer/ourSolution';
// import Courses from '../containers/CourseContainer/courses';
import Error from '../containers/ErrorContainer/error';
import DashBoardPage from '../pages/dashBoardPage';
// import SectionNav from '../components/SectionNavComponent/SectionNav';
import CourseLibraryContainer from '../containers/CourseLibraryContainer/CourseLibraryContainer';
import LiveClassesContainer from '../containers/LiveClassesContainer/LiveClassesContainer';
import AddToCard from '../containers/AddToCard/AddToCard';
import LoginContainer from '../containers/LoginContainer/LoginContainer';
import RegistrationContainer from '../containers/RegistrationContainer/RegistrationContainer';

const RoutersReact = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashBoardPage/>}>
                <Route path='CourseLibrary' element={<CourseLibraryContainer/>}/>
                    {/* <Route path='Courses' element={<Courses/>}/> */}
                        {/* <Route path ='Selection'  element={<SectionNav/>}> */}
                        {/* <Route path='/CourseLibrary' element={<CourseLibraryContainer/>}/> */}
                        <Route path='LiveClasses' element={<LiveClassesContainer/>}/>
                        {/* </Route> */}
                    {/* </Route> */}
                    <Route path='Mycourses' element={<MyCourses/>}/>
                    <Route path='Practices' element={<Practices/>}/>
                    <Route path='Test' element={<Test/>}/>
                    <Route path='Jobs' element={<Jobs/>}/>
                    <Route path='OurSolution' element={<OurSolution/>}/>
                    {/* <Route path='/CourseLibrary' element={<CourseLibraryContainer/>}/> */}
                    <Route path='/LiveClasses' element={<LiveClassesContainer/>}/>
                    <Route path='*' element={<Error/>}/>
                    <Route path='AddToCard' element={<AddToCard/>}/>
                </Route> 
                    <Route path='/Login' element={<LoginContainer/>}/>
                    <Route path='/Registation' element={<RegistrationContainer/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutersReact;