// import React from 'react';
import c from './SecContent.module.css';

const SecContent = () => {
    return (
        <main className={c.main}>
            <div className={c.aside1}>
                <div className={c.block}></div>
                <div className={c.block}></div>
                <div className={c.block}></div>
                <div className={c.block}></div>
            </div>
            <div className={c.info}>
                <div className={c.img}>
                    <div className={c.avatar}></div>
                </div>
                <div className={c.nav}>
                    Tolstikh Alexander
                </div>
                <div className={c.about}>
                    About me
                </div>
            </div>
            <div className={c.blogs}>
                <div className={c.blog}></div>
                <div className={c.blog}></div>
                <div className={c.blog}></div>
                <div className={c.blog}></div>
            </div>
            <div className={c.aside2}>
                <div className={c.block}></div>
                <div className={c.block}></div>
                <div className={c.block}></div>
                <div className={c.block}></div>
            </div>
        </main>);
}

export default SecContent;