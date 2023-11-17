import CourseCardComponent from '../../components/CourseCardComponent/CourseCardComponent';
import './AddToCard.css';
const AddToCard = () => {
  const count = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='Container'>
    <div className="myCrsContainer">
      <h1>Add to cart</h1>
      <p>{count.length} Courses in cart</p>
    </div>

    <div className='MyCrsCrdContainer'>
      <div>
        {count.map(()=>{
        	return <CourseCardComponent/>
        })}
      </div>
    </div>
    </div>
  )
}

export default AddToCard;