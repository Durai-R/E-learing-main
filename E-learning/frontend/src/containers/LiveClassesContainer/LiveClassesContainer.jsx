import SectionNav from '../../components/SectionNavComponent/SectionNav';
import PageNationComponent from '../../components/PageNationComponent/PageNationComponent';
import Card from '../../components/CardComponent/Card';
import './LiveClassesContainer.css';

const LiveClassesContainer = () => {
    const counter = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
            <SectionNav/>
            <div className='courseLibrary'>
                <div className='flex crsCrdCont'>
                    {counter.map(()=>{
                        return <Card/>
                    })}
                </div>
                <div className='flex PgNatnCont'>
                    <PageNationComponent/>
                </div>
            </div>
        </>
    )
}

export default LiveClassesContainer;