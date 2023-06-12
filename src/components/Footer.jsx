import React from 'react';

const Footer = () => {
    return (

    <div> <img src='/Images/footer.png' alt="Description of the image" id='imagelogo'/>
    <div className="bg-custom text-center text-lg-start text-black">
        <div className="container p-4">
                <div className="row my-4">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ width: '150px', height: '150px' }}>
                    <img src="data:image/jpeg;base64,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" height="109" alt="" loading="lazy" />
                </div>
                <p className="text-center">Dogs have a remarkable ability to understand human emotions and can provide comfort and support during challenging times</p>
                <ul className="list-unstyled d-flex flex-row justify-content-center">
                    <li>
                    <a className="text-black px-2" href="#!">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    </li>
                    <li>
                    <a className="text-black px-2" href="#!">
                        <i className="fab fa-instagram"></i>
                    </a>
                    </li>
                    <li>
                    <a className="text-black ps-2" href="#!">
                        <i className="fab fa-youtube"></i>
                    </a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>When your pet is missing</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Recently found</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>How to adopt?</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Pets for adoption</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Material gifts</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Help with walks</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Volunteer activities</a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Animals</h5>
                <ul className="list-unstyled">
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>General information</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>About the shelter</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Statistic data</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Job</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Tenders</a>
                    </li>
                    <li className="mb-2">
                    <a href="#!" className="text-black"><i className="fas fa-paw pe-3"></i>Contact</a>
                    </li>
                </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>
                <ul className="list-unstyled">
                    <li>
                    <p><i className="fas fa-map-marker-alt pe-2"></i>Gotham city</p>
                    </li>
                    <li>
                    <p><i className="fas fa-phone pe-2"></i>+639 69-696-96</p>
                    </li>
                    <li>
                    <p><i className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="text-center p-3">
            © 2023
            <a className="text-black" href="https://mdbootstrap.com/"> SpecialDog.com</a>
            </div>
        </div>
        </div>
    );
};

export default Footer;
