//404 -sivu
import React, { Component } from 'react'

const notfound = <img 
src="https://img.memecdn.com/keyboard-not-found_o_2227687.webp" 
style={{width: 500}}/>

export default class NotFound extends Component {

    render() {
        return (
            <div>
                {notfound}
            </div>
        )
    }
}
