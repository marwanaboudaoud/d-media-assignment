import WebImage from '../../assets/images/image-web-3-desktop.jpg'
import WebImageMobile from '../../assets/images/image-web-3-mobile.jpg'
import { News } from '../NewsComponent/News'
import { ReadMore } from './ReadMore'

export const WebFuture = () => {
    return (
        <div className='web-future-component'>
            <div className='row'>
                <div className='col-sm-8 mb-5 mb-sm-0 d-flex justify-content-between flex-column'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <img className='web-future-image' src={WebImage} alt="web-future" />
                            <img src={WebImageMobile} alt="web-future" className='d-md-none' />
                        </div>
                    </div>
                    <ReadMore />
                </div>
                <div className='col-sm-4'>
                    <News />
                </div>
            </div>
        </div>
    )
}

