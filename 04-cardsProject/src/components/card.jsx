import { Bookmark } from 'lucide-react'
import React from 'react'

const card = (props) => {
    console.log(props)
    return (
        <div>
            <div className="card">
                <div>
                    <div className="top">
                        <img src={props.logo} alt="" />
                        <button><Bookmark size={12} />  Save</button>
                    </div>
                    <div className="center">
                        <h3>{props.company} <span>{props.date}</span></h3>
                        <h2>{props.post}</h2>
                        <div className='tag'>
                            <h4>{props.tag}</h4>
                            <h4>{props.tag2}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>${props.pay}/hr</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default card
