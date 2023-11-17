import './CourseCardComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock,faGlobe,faUserGroup } from '@fortawesome/free-solid-svg-icons';

const CourseCardComponent = () =>{
    return(
        <div className='CrsCrdCont flex'>
            <div className='imgCont'>
                <img src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div>
                <div className='CrsCrdContent'>
                    <h1>Web Developement</h1>
                    <p>Powerfull mental tools to help you master tough subjects</p>
                    <p>$ 20,000</p>
                </div>
                <div className='CrsCrdFooter flex'>
                    <div className='IcnCont flex'>
                    <FontAwesomeIcon icon={ faClock} />
                        <p>2Hrs</p>
                    </div>

                    <div className='IcnCont flex'>
                    <FontAwesomeIcon icon={faGlobe}/>
                        <p>English</p>
                    </div>

                    <div className='IcnCont flex'>
                    <FontAwesomeIcon icon={faUserGroup}/>
                        <p>20000</p>
                    </div>
                </div>
            </div>
            <div className='col_3'>

            </div>
        </div>
    )
}

export default CourseCardComponent;