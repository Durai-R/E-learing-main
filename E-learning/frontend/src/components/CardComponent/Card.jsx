import AddToCard from '../AddToCardComponent/AddToCard';
import './Card.css';
const Card = () => {
  return (
    <div className='cardContainer'>
        <AddToCard/>
        <div className='cardImg'>
            <img src='https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
        </div>
            <div className='cardContent'>
                <div className='cardSecCont'>
                    <h4>$ 20,000</h4>
                    <h3>MERN stack development</h3>
                    <div className='cardSectionFooter flex'>
                        <p>2Hrs</p>
                        <p>English</p>
                        <p>2000</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Card;