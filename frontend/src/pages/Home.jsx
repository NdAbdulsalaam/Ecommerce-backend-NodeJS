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
        {/* Start Shop Home List  */}
      <section className="shop-home-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>On sale</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h4 className="title"><a href="#">Coppertone Sport</a></h4>
                      <p className="price with-discount">$59</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$44</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$89</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Best Seller</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$65</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$33</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$77</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <div className="shop-section-title">
                    <h1>Top viewed</h1>
                  </div>
                </div>
              </div>
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$22</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$35</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
              {/* Start Single List  */}
              <div className="single-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="list-image overlay">
                      <img src="https://via.placeholder.com/115x140" alt="#" />
                      <a href="#" className="buy"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 no-padding">
                    <div className="content">
                      <h5 className="title"><a href="#">Coppertone Sport</a></h5>
                      <p className="price with-discount">$99</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single List  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Home List  */}
      {/* Start Cowndown Area */}
      <section className="cown-down">
        <div className="section-inner ">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-12 padding-right">
                <div className="image">
                  <img src="https://via.placeholder.com/750x590" alt="#" />
                </div>	
              </div>	
              <div className="col-lg-6 col-12 padding-left">
                <div className="content">
                  <div className="heading-block">
                    <p className="small-title">Deal of day</p>
                    <h3 className="title">Neutrogena Ultra Sheer</h3>
                    <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
                    <h1 className="price">$1200 <s>$1890</s></h1>
                    <div className="coming-time">
                      <div className="clearfix" data-countdown="2021/02/30"></div>
                    </div>
                  </div>
                </div>	
              </div>	
            </div>
          </div>
        </div>
      </section>
      {/* /End Cowndown Area */}
      {/* Start Shop Blog  */}
      <section class="shop-blog section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-title">
                <h2>From Our Blog</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div class="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div class="content">
                  <p class="date">12 Feb., 2024. Monday</p>
                  <a href="#" class="title">Antimicrobial resistance</a>
                  <a href="#" class="more-btn">Read more...</a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div class="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div class="content">
                  <p class="date">12 Feb., 2024. Monday</p>
                  <a href="#" class="title">Mutivitamins to boost immunity</a>
                  <a href="#" class="more-btn">Read more...</a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog  */}
              <div class="shop-single-blog">
                <img src="https://via.placeholder.com/370x300" alt="#" />
                <div class="content">
                  <p class="date">12 Feb., 2024. Monday</p>
                  <a href="#" class="title">Regular excercise</a>
                  <a href="#" class="more-btn">Read more...</a>
                </div>
              </div>
              {/* End Single Blog  */}
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Blog  */}

    </div>
  )
}

export default Home;