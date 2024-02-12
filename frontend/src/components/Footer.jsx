import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="footer">
		{/* Footer Top */}
		{/* Start Shop Newsletter  */}
		<section className="shop-newsletter section">
        <div className="container">
          <div className="inner-top">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 col-12">
                {/* Start Newsletter Inner */}
                <div className="inner">
                  <h4>Newsletter</h4>
                  <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                  <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                    <input name="EMAIL" placeholder="Your email address" required="" type="email" />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
                {/* End Newsletter Inner */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Shop Newsletter */}
      <div className='section'>
		<div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer about">
							<div className="logo">
								<a href="index.html"><img src="images/logo2.png" alt="#" /></a>
							</div>
							<p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
							<p className="call">Got Question? Call us 24/7<span><a href="tel:+23468874902">+2348168874902</a></span></p>
						</div>
						{/* End Single Widget */}
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer links">
							<h4>Information</h4>
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Faq</a></li>
								<li><a href="#">Terms & Conditions</a></li>
								<li><a href="#">Contact Us</a></li>
								<li><a href="#">Help</a></li>
							</ul>
						</div>
						{/* End Single Widget */}
					</div>
					<div className="col-lg-2 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer links">
							<h4>Customer Service</h4>
							<ul>
								<li><a href="#">Payment Methods</a></li>
								<li><a href="#">Money-back</a></li>
								<li><a href="#">Returns</a></li>
								<li><a href="#">Shipping</a></li>
								<li><a href="#">Privacy Policy</a></li>
							</ul>
						</div>
						{/* End Single Widget */}
					</div>
					<div className="col-lg-3 col-md-6 col-12">
						{/* Single Widget */}
						<div className="single-footer social">
							<h4>Get In Tuch</h4>
							{/* Single Widget */}
							<div className="contact">
								<ul>
									<li>3 Tajudeen Ariyo Street </li>
                  <li>Irawo Bus-stop, Ikorodu</li>
									<li>Lagos, Nigeria</li>
									<li>olaitansalaam2012</li>
									<li>+2348168874902</li>
								</ul>
							</div>
							{/* End Single Widget */}
							<ul>
								<li><a href="#"><i className="ti-facebook"></i></a></li>
								<li><a href="#"><i className="ti-twitter"></i></a></li>
								<li><a href="#"><i className="ti-flickr"></i></a></li>
								<li><a href="#"><i className="ti-instagram"></i></a></li>
							</ul>
						</div>
						{/* End Single Widget */}
					</div>
				</div>
			</div>
		</div>
    </div>
		{/* End Footer Top */}
		<div className="copyright">
			<div className="container">
				<div className="inner">
					<div className="row">
						<div className="col-lg-6 col-12">
							<div className="left">
								<p>Copyright © {new Date().getFullYear()} <a href="http://www.wpthemesgrid.com" target="_blank">Nurudeen Abdulsalaam</a>  -  All Rights Reserved.</p>
							</div>
						</div>
						<div className="col-lg-6 col-12">
							<div className="right">
								<img src="images/payments.png" alt="#" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
    </div>
  )
}

export default Footer