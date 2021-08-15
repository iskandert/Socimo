// import React from 'react'
import Svg from '../../../sprite';
import c from './Searches.module.css'

const Searches = () => {
    return (
        <div className={c.searches}>
            <form method='post'>
                <input type="text" placeholder='Search...' />
            </form>
            <button type='submit'>
                <Svg name='search' />
            </button>
            <span className={c.recentSearch}></span>
        </div>
    );
}

export default Searches
