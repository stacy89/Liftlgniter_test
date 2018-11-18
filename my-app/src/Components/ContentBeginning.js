import React from "react";

const ContentBeginning = () => (
	<div>
	    <div className="row">
			<div className="col-md-12">
				<nav className="navbar navbar-background">
	  				<img className="navbar-brand mx-auto d-block" src="../images/igniter-logo-white.png" width="150" height="50" alt="" />
				</nav>
			</div>
	    </div>

	    <div className="row">
			<div className="col-md-12">
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				  <div className="carousel-inner img-container">
				    <div className="carousel-item active">
				    	<img className="d-block w-100 slider-img" src="../images/hero-img.jpg" alt="First slide" />
				    </div>

					<div className="hero-img-content">
						<h1 className="hero-img-header">Lorem Ipsum Lorem Ipsum</h1>
					   	<button type="button" className="btn hero-img-btn">Button</button>
					</div>

					<div className="envelope-icon-btn">	
						<button type="button" className="envelope-icon btn" data-toggle="modal" data-target="#exampleModal"><img className="img-fluid envelope-icon-img" src="../images/envelope-icon.png" alt="contact us button" /></button>

						<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
							    	<div className="modal-header">
							        	<h5 className="modal-title form-label" id="exampleModalLabel">Lorem Ipsum</h5>
							        	<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							          		<span aria-hidden="true">&times;</span>
							        	</button>
								    </div>

								    <div className="modal-body">
								    	<form>
								    		<div className="row">
										    	<div className="col-md-12">
										    		<label className="form-label">Your Name</label>
										    		<input type="text" className="form-control" name="fullName" />
										    	</div>	
										    </div>

											<div className="row">
										    	<div className="col-md-6">
										    		<label className="form-label">Your Email</label>
										    		<input type="email" className="form-control" name="email" />
										    	</div>

										    	<div className="col-md-6">
										    		<label className="form-label">Phone Number</label>
										    		<input type="text" className="form-control" name="phoneNum" />
										    	</div>
										    </div>
											
											<div className="row">
										    	<div className="col-md-12">
										    		<label className="form-label">Message</label>
												    <textarea className="form-control" rows="5" name="message"></textarea>

												    <button className="btn btn-block form-btn" type="submit" value="Submit">Button</button>
												</div>    
											</div>
										</form>
								   	</div>
							    </div>
							</div>
						</div>
					</div>

				    <div className="carousel-item">
				    	<img className="d-block w-100 slider-img" src="../images/iStock-613672992.jpg" alt="Second slide" />
				    </div>
				    <div className="carousel-item">
				    	<img className="d-block w-100 slider-img" src="../images/iStock-503300108.jpg" alt="Third slide" />
				    </div>
				  </div>
				  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				  	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				    <span className="carousel-control-next-icon" aria-hidden="true"></span>
				    <span className="sr-only">Next</span>
				  </a>
				</div>
			</div>
	    </div>
	
		<div className="container col-container">
			<div className="row">	
				<div className="col-sm-6 beginning-col-content">
					<img className="col-img" src="../images/page-icon.png" alt="" />
					<span className="beginning-col-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> 
				</div>

				<div className="col-sm-6 beginning-col-content">
					<img className="col-img" src="../images/page-icon.png" alt="" />   
					<span className="beginning-col-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> 
				</div>	
			</div>

			<div className="row">
				<div className="col-sm-6 beginning-col-content">
					<img className="col-img" src="../images/page-icon.png" alt="" />
					<span className="beginning-col-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> 
				</div>

				<div className="col-sm-6 beginning-col-content">
					<img className="col-img" src="../images/page-icon.png" alt="" />   
					<span className="beginning-col-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> 
				</div>	
			</div>	 
		</div>

		<div className="row">
			<div className="col-md-12 text-overlay-container">
				<span className="text-overlay">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
 				<img className="d-block w-100 gradient-img" src="../images/slanted-gradient-background.png" alt="" />
			</div>
		</div>
			
    </div>
);

export default ContentBeginning;