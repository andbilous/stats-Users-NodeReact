import React from 'react';

const Pricing =()=> {
    return (
        <section id="pricing" className="package-section background-shape-right ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="section-heading text-center mb-5">
                            <h2>Afforadble Pricing and Packages <span>choose your best one</span></h2>
                            <p className="lead">
                                Monotonectally grow strategic process improvements vis-a-vis integrated resources.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md">
                        <div className="card text-center single-pricing-pack">
                            <div className="pt-4"><h5>Basic</h5></div>
                            <div className="pricing-img mt-4">
                                <img src="img/basic.svg" alt="pricing img" className="img-fluid"/>
                            </div>
                            <div className="card-header py-4 border-0 pricing-header">
                                <div className="h1 text-center mb-0">$<span
                                    className="price font-weight-bolder">29</span></div>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                                    <li>Push Notifications</li>
                                    <li>Data Transfer</li>
                                    <li>SQL Database</li>
                                    <li>Search &amp; SEO Analytics</li>
                                    <li>24/7 Phone Support</li>
                                    <li>2 months technical support</li>
                                    <li>2+ profitable keyword</li>
                                </ul>
                                <a href="#" className="btn outline-btn mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md">
                        <div className="card popular-price text-center single-pricing-pack">
                            <div className="pt-4"><h5>Standard</h5></div>
                            <div className="pricing-img mt-4">
                                <img src="img/standard.svg" alt="pricing img" className="img-fluid"/>
                            </div>
                            <div className="card-header py-4 border-0 pricing-header">
                                <div className="h1 text-center mb-0">$<span
                                    className="price font-weight-bolder">149</span></div>

                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                                    <li>Push Notifications</li>
                                    <li>Data Transfer</li>
                                    <li>SQL Database</li>
                                    <li>Search &amp; SEO Analytics</li>
                                    <li>24/7 Phone Support</li>
                                    <li>1 Year technical support</li>
                                    <li>50+ profitable keyword</li>
                                </ul>
                                <a href="#" className="btn solid-btn mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md">
                        <div className="card text-center single-pricing-pack">
                            <div className="pt-4"><h5>Unlimited</h5></div>
                            <div className="pricing-img mt-4">
                                <img src="img/unlimited.svg" alt="pricing img" className="img-fluid"/>
                            </div>
                            <div className="card-header py-4 border-0 pricing-header">
                                <div className="h1 text-center mb-0">$<span
                                    className="price font-weight-bolder">39</span></div>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled text-sm mb-4 pricing-feature-list">
                                    <li>Push Notifications</li>
                                    <li>Data Transfer</li>
                                    <li>SQL Database</li>
                                    <li>Search &amp; SEO Analytics</li>
                                    <li>24/7 Phone Support</li>
                                    <li>6 months technical support</li>
                                    <li>10+ profitable keyword</li>
                                </ul>
                                <a href="#" className="btn outline-btn mb-3" target="_blank">Purchase now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 text-center">
                    <p className="mb-2">If you need custom services or Need more? <a href="#"
                                                                                     className="color-secondary">
                        Contact us
                    </a></p>
                </div>
            </div>
        </section>
    )
};

export default Pricing;

