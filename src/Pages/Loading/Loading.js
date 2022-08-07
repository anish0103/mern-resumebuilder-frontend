import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

import './Loading.css'

const Loading = () => {
    return (
        <div className="loadingpage-maincontainer" >
            <Player
                autoplay
                loop
                speed={0.9}
                src="https://assets4.lottiefiles.com/packages/lf20_mwwkrkhu.json"
                style={{ height: '35%', width: '35%' }}
            ></Player>
        </div>
    )
}

export default Loading