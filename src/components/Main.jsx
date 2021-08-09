// import React from 'react';

const Profile = () => {
    return (
        <main className='main'>
            <div className='content_wrapper'>
                <img src='https://topkin.ru/wp-content/uploads/2017/05/Enisey-1.jpg' className='main_img' alt='background' />
            </div>
            <div className='content_wrapper'>
                <img src='https://www.dogalize.com/wp-content/uploads/2017/01/jack-russell-1703735_1920-200x200.jpg' className='avatar' alt='avatar' />
            </div>
            <div className='content_wrapper'>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </main>);
}

export default Profile;