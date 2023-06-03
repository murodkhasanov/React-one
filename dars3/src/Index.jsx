import './index.css'
import Lite from './Lite.jsx'


function Index() {
    return (
        <div className='Index'>
            <div className='nom1'><h2>6 Suggestion</h2></div>
            <div className='sort'>
                <p>Sort by :</p> <h4>Most Upvotes</h4>
            </div>
            <div className="but">
                <button><h3>+ Add Feedback</h3></button>
            </div>
            <Lite />
        </div>
    )
}

export default Index