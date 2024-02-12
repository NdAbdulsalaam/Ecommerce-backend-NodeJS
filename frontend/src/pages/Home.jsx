import React from 'react'

function Home() {
  return (
    <div>
      
      {/* Slider Area */}
      <section className="hero-slider">
        {/* Single Slider */}
        <div className="single-slider">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-9 offset-lg-3 col-12">
                <div className="text-inner">
                  <div className="row">
                    <div className="col-lg-7 col-12">
                      <div className="hero-text">
                        <h1><span>UP TO 50% OFF </span>Covid-19 Vaccine</h1>
                        <p>Maboriosam in a nesciung eget magnae <br /> dapibus disting tloctio in the find it pereri <br /> odiy maboriosm.</p>
                        <div className="button">
                          <a href="#" className="btn">Shop Now!</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Slider */}
      </section>
      {/* End Slider Area */}

      {/* Start Small Banner  */}
      <section className="small-banner section">
        <div className="container-fluid">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" /> 
                <div className="content">
                  <p>Medications</p>
                  <h3>Over-the-Counter <br /> Medications</h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
                        {/* Single Banner  */}
                        <div className="col-lg-4 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Health Supplements</p>
                  <h3>Multivitamins <br /> 2024</h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-4 col-12">
              <div className="single-banner tab-height">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Personal Care</p>
                  <h3>Skin, Hair & Oral Care <br /> Up to <span>40%</span> Off</h3>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
      {/* End Small Banner */}
      {/* Start Product Area */}
        <div className="product-area section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Trending Items</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-info">
                  <div className="nav-main">
                    {/* Tab Nav */}
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Supplements</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Skincare</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">First Aid</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Medical Devices</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Essential Drugs</a></li>
                      <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Infant Foods and Beverages</a></li>
                    </ul>
                    {/*/ End Tab Nav */}
                  </div>
                  <div className="tab-content" id="myTabContent">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* End Product Area */}

    </div>
  )
}

export default Home;