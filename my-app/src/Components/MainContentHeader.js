import React from "react";

const MainContentHeader = () => (
	<div>
	    <div className="row">
			<div className="col-md-12">
				<nav className="navbar sticky-top navbar-light bg-light">
	  				<img className="navbar-brand mx-auto d-block" src="../images/igniter-logo-white.png" width="150" height="50" alt="" />
				</nav>
			</div>
	    </div>

	    <div className="row">
			<div className="col-md-12">
				<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <img className="d-block w-100" src="../images/hero-img.jpg" alt="First slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="../images/hero-img.jpg" alt="Second slide" />
				    </div>
				    <div className="carousel-item">
				      <img className="d-block w-100" src="../images/hero-img.jpg" alt="Third slide" />
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

		 <div className="row">
			<div className="col-md-6">
				<div className="text-center">
					<img className="" src="../images/page-icon.png" alt="" />
					bjklbljhjbjhjhbjhbjbhjbhjbhj
				</div>
			</div>	

			<div className="col-md-6">
				<div className="text-center">
					<img className="" src="../images/page-icon.png" alt="" />
					bjklbljhjbjhjhbjhbjbhjbhjbhj
				</div>    
			</div>
		</div>

		<div className="row">
			<div className="col-md-6">
				<div className="text-center">
					<img className="" src="../images/page-icon.png" alt="" />
					bjklbljhjbjhjhbjhbjbhjbhjbhj
				</div>
			</div>	

			<div className="col-md-6">
				<div className="text-center">
					<img className="" src="../images/page-icon.png" alt="" />
					bjklbljhjbjhjhbjhbjbhjbhjbhj
				</div>    
			</div>
		</div>	 

		<div className="row">
			<div className="col-md-12">
 				<img className="d-block w-100" src="../images/slanted-gradient-background.png" alt="" />
			</div>
		</div>
			
    </div>
);

export default MainContentHeader;