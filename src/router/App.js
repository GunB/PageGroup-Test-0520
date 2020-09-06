import React from "react";

export default function BasicExample() {
  return (
    <>
      <div id="page-content">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <h1 className="font-weight-light mt-4 text-dark">
                Sticky Footer using Flexbox
              </h1>
              <p className="lead text-black-50">
                Use just two Bootstrap 4 utility classNamees and three custom
                CSS rules and you will have a flexbox enabled sticky footer for
                your website!
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </>
  );
}
