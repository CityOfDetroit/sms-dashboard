import React from 'react';
import './Loader.scss';

function Loader(props) {

    return (
        <section id="loader-overlay" className={props.loader}>
            <article>
            <div>
                <div className="loader">
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__bar"></div>
                <div className="loader__ball"></div>
                </div>
                <p>LOADING</p>
            </div>
            </article>
        </section>
    );
}

export default Loader;

