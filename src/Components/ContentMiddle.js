import React from "react";

const ContentMiddle = () => (
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h1 className="text-center main-header"><span className="header-1">Loperm</span> <span className="header-2">Ipsum</span></h1>
			</div>

		</div>

		<div className="row">
			<div className="col-md-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Purus viverra accumsan in nisl nisi scelerisque eu. Duis ut diam quam nulla porttitor. Suspendisse sed nisi lacus sed viverra.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Purus viverra accumsan in nisl nisi scelerisque eu. Duis ut diam quam nulla porttitor. Suspendisse sed nisi lacus sed viverra.</p>
			</div>

			<div className="col-md-6 center-btn-container">
				<button type="button" className="btn text-center paragraph-btn">Button</button>
			</div>
		</div>

		<div className="row middle-col-content">
			<div className="col-md-4">
				<div className="text-center">
					<div className="percentage animated pulse slow infinite">240%</div>
					<p className="percentage-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>

			<div className="col-md-4">
				<div className="text-center">
					<div className="percentage animated pulse slow infinite">105%</div>
					<p className="percentage-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>

			<div className="col-md-4">
				<div className="text-center">
					<div className="percentage animated pulse slow infinite">159%</div>
					<p className="percentage-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</div>
		</div>
	</div>
);

export default ContentMiddle;