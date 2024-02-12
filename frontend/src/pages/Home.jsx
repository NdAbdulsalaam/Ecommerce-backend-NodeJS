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

                    {/* Start Single Tab */}
                    <div className="tab-pane fade show active" id="man" role="tabpanel">
                      <div className="tab-single">
                        <div className="row">
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Multivitamins and Minerals</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Omega-3 Fatty Acids</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Probiotics</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="new">New</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">New Arrivals</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Calcium and Vitamin D</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="price-dec">30% Off</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Herbal Supplements</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Iron Supplements</a></h3>
                                <div className="product-price">
                                  <span>$29.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div className="single-product">
                              <div className="product-img">
                                <a href="product-details.html">
                                  <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                                  <span className="out-of-stock">Hot</span>
                                </a>
                                <div className="button-head">
                                  <div className="product-action">
                                    <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                                    <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                                    <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                                  </div>
                                  <div className="product-action-2">
                                    <a title="Add to cart" href="#">Add to cart</a>
                                  </div>
                                </div>
                              </div>
                              <div className="product-content">
                                <h3><a href="product-details.html">Featured Products</a></h3>
                                <div className="product-price">
                                  <span className="old">$60.00</span>
                                  <span>$50.00</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab */}       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* End Product Area */}
      {/* Start Midium Banner  */}
      <section className="midium-banner">
        <div className="container">
          <div className="row">
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Personal Care</p>
                  <h3>Look Fresh <br />Up to<span> 50%</span></h3>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
            {/* Single Banner  */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner">
                <img src="https://via.placeholder.com/600x370" alt="#" />
                <div className="content">
                  <p>Infant Foods</p>
                  <h3>Bouncing Baby <br /> up to <span>70%</span></h3>
                  <a href="#" className="btn">Shop Now</a>
                </div>
              </div>
            </div>
            {/* /End Single Banner  */}
          </div>
        </div>
      </section>
      {/* End Midium Banner */}
      {/* Start Most Popular  */}
	    <div class="product-area most-popular section">
        <div class="container">
            <div class="row">
				      <div class="col-12">
					      <div class="section-title">
						      <h2>Hot Item</h2>
					      </div>
				      </div>
              </div>
                <div class="row">
                  <div class="col-12">
                    <div class="owl-carousel popular-slider">
                      {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                    <a href="product-details.html">
                      <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <span className="out-of-stock">Hot</span>
                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3><a href="product-details.html">Advil (ibuprofen)</a></h3>
                    <div className="product-price">
                      <span className="old">$25.00</span>
                      <span>$20.00</span>
                    </div>
                  </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                      <a href="product-details.html">
                          <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                          <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                    </div>
                    <div className="product-content">
                        <h3><a href="product-details.html">Zyrtec (cetirizine)</a></h3>
                        <div className="product-price">
                            <span>$50.00</span>
                        </div>
                    </div>
                  </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                                <div className="product-img">
                                    <a href="product-details.html">
                                        <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                                        <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      <span className="new">New</span>
                                    </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                    </div>
                    <div className="product-content">
                        <h3><a href="product-details.html">Nature's Field Vit-E</a></h3>
                        <div className="product-price">
                            <span>$50.00</span>
                        </div>
                    </div>
                </div>
                {/* End Single Product */}
                {/* Start Single Product */}
                <div className="single-product">
                  <div className="product-img">
                      <a href="product-details.html">
                          <img className="default-img" src="https://via.placeholder.com/550x750" alt="#" />
                          <img className="hover-img" src="https://via.placeholder.com/550x750" alt="#" />
                      </a>
                    <div className="button-head">
                      <div className="product-action">
                        <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i className=" ti-eye"></i><span>Quick Shop</span></a>
                        <a title="Wishlist" href="#"><i className=" ti-heart "></i><span>Add to Wishlist</span></a>
                        <a title="Compare" href="#"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
                      </div>
                      <div className="product-action-2">
                        <a title="Add to cart" href="#">Add to cart</a>
                      </div>
                    </div>
                    </div>
                    <div className="product-content">
                        <h3><a href="product-details.html">Accu-Chek (by Roche Diabetes Care)</a></h3>
                        <div className="product-price">
                            <span>$150.00</span>
                        </div>
                    </div>
                </div>
                {/* End Single Product */}
                    </div>
                  </div>
                </div>
            </div>
        </div>
        {/* End Most Popular Area */}
        
    </div>
  )
}

export default Home;