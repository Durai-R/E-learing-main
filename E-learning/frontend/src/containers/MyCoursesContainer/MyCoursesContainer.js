import "./MyCoursesContainer.css";
import CourseCardComponent from '../../components/CourseCardComponent/CourseCardComponent';


const MyCoursesContainer = () => {
    const count = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='Container MyCoursesCont'>
        <h1>MyCourses</h1>
        <div>
        {count.map(()=>{
        	return <CourseCardComponent/>
        })}
        </div>
    </div>
  )
}

export default MyCoursesContainer;