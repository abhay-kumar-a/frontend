import React from 'react'
import { Bookmark } from 'lucide-react'
const JobCard = (props) => {
  return (
    <div className='parent'>

      <div className='jobCard'>

        {/* companyLogo={item.companyLogo}
        companyName={item.companyName}
        postedDays={item.postedDays}
        jobTitle={item.jobTitle}
        category1={item.category1}
        category2={item.category2}
        price={item.price}
        location={item.location} */}
        <div>
          <div className='top'>
            <img src={props.companyLogo} alt='amazon logo' />
            <button>Save <Bookmark size={15} color='#545050' strokeWidth={2.0} /> </button>
          </div>

          <div className='center'>

            <h3> {props.companyName}  <span>{props.postedDays}  </span></h3>
            <h2>{props.jobTitle}</h2>

            <div className='tag'>
              <h4>{props.category1}</h4>
              <h4>{props.category2}</h4>
            </div>

          </div>
        </div>

        <div className='buttom'>

          <div className='price'>

            <h3>{props.price}</h3>
            <h5>{props.location}</h5>
          </div>

          <button>Apply now</button>

        </div>


      </div>

    </div>
  )
}

export default JobCard