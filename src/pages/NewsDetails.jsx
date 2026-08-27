import React from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
// import RightAside from '../components/homelayout/RighAside';

const NewsDetails = () => {
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
                <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                </section>
                <aside className='col-span-3'>
                 <RighAside></RighAside>
                </aside>
                </main>
            </header>
        </div>
    );
};

export default NewsDetails;