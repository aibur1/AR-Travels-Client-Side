import React from 'react';
import './Customer.css';

const Customer = () => {
    return (
        <div className="main">
            <h1 className="text-center heading text-primary">WHAT CUSTOMERS SAY</h1>
            
            <div className="review container mt-3">
                <div>
                    <p>Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male.lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male.</p>
                    <h6><span className="text-primary">Mark Anthony</span><span className="text-danger">-Ceo-Wikemedia</span></h6>
                </div>
                <div className="mx-4">
                <p>Alps aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male.lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male.</p>
                <h6><span className="text-primary">Christina Hardy</span><span className="text-danger">-Marketing Manager-Red Inc.</span></h6>
                </div>
                <div>
                <p>Venice aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male.lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male.</p>
                <h6><span className="text-primary">Jane Bennett-Developer</span><span className="text-danger">-Hubboard Media</span></h6>
                </div>
            </div>
        </div>
    );
};

export default Customer;