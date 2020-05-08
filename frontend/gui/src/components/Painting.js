import React from 'react';

const Painting = props => {
    
    
    return(
        <div className="card" style={{ borderRadius: '1rem', border: 'none', marginBottom: '' }}>
            <div className="row no-gutters">
                <div className="col-auto" style={{ flexShrink: '1', width: 'auto' }}>
                    <img src={props.src} alt="test" className="img-fluid" style={{ borderRadius: '.25rem 0 0 .25rem' }}/>
                </div>
                <div className="col" style={{ maxWidth: '500px' }}>
                    <div className="card-block text-dark px-2">
                        <div className="paint-title-group">
                            <h4 className="card-title text-center mt-3">
                                Card Title
                            </h4>
                            <span className="painting-title-und" style={{ display: 'block', height: '6px', width: "75px", backgroundColor: 'black', borderRadius: '6px' }}></span>    
                        </div>
                        <div className="painting-desc-label" style={{ position: 'relative' }}>
                            <p style={{ marginBottom: '0' }}>Description:</p>
                            <span className="painting-desc-und" style={{ display: 'block', height: '4px', width: "105px", backgroundColor: '#707070', marginBottom: '1rem', borderRadius: '6px', opacity: '.8' }}></span>
                        </div>
                        <p className="card-text text-secondary text-wrap" style={{ width: '90%' }}>
                            Praesent lobortis pretium facilisis. Praesent ac eleifend turpis, ac volutpat sapien. Nam a bibendum leo. 
                            Donec convallis tincidunt odio, a placerat nunc tempus at.
                        </p>
                        <a href="#" id="more-info" className="btn btn-primary btn-lg">More Info</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Painting;