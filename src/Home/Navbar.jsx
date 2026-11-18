import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-2">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            App
          </NavLink>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/about">
                  About
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/download">
                  Download
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Product
                </NavLink>
              </li>

              {/* Feedback Button */}
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  <i className="fa-solid fa-comment"></i> Send Feedback
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">...</div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>

              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
