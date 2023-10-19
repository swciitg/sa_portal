import LatestUpdates from './LatestUpdates'
import QuickLinks from './QuickLinks'
const QuickLinksAndLatestUpdates = (prop) => {
return (
    <>
        <div className='flex grid'>
            <div className='col-start-1 col-end-8'>
                <QuickLinks />
            </div>
            <div className='col-start-9 col-end-12'>

                <LatestUpdates prop={prop} />
            </div>
        </div>
    </>
)
}
export default QuickLinksAndLatestUpdates;