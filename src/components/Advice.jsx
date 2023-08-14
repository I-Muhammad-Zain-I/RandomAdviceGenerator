import React from 'react'

const Advice = (props) => {

    const advice = props.isLoading ? "Loading" : props.advice;
    return (
        <div className='bg-overlay'>
            <img src = {props.imgUrl} className='advice__image'/>
            <div className='advice-container'>
                <div className='advice__card'>
                    <h3 className='advice__title'>{advice}</h3>
                    <button disabled={props.isDisabled}
                     className='button' onClick={(e) => props.callGetAdviceData(e)}>
                        <span>Give me Advice</span>
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Advice;