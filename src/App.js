import "./styles.css";
import React from "react";

function App() {
  const handleLinkClick = (url) => {
    console.log("Link clicked:", url);
  };

  const navLinks = [
    { text: "About", url: "/about/" },
    { text: "Home", url: "/home/" },

    {
      text: "Login",
      url:
        "/base/login/?next=/companies/private-space-register/3d886ae847d7862cd43f57386b474472ed9bea70/"
    }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const icons = [
    {
      name: "Silk icons",
      url: "http://www.famfamfam.com/lab/icons/silk/"
    },
    {
      name: "iconspedia.com",
      url: "http://www.iconspedia.com/"
    }
  ];
  return (
    <>
      <div id="logo_row" className="snipcss-RLjP9">
        <div className="logo_wrapper">
          <div className="logo theme_logo">
            <a href="https://new.siemens.com/global/en/company/about/businesses/digital-industries.html">
              <img
                src="https://assessments.reliscore.com/site_media/company_logos/siemens-logo.png"
                alt="Siemens Logo"
              />
            </a>
          </div>
        </div>
        <div className="nav_wrapper">
          <ul className="first">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} onClick={() => handleLinkClick(link.url)}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div id="middle_row" className="snipcss-Svb1q">
        <div id="pagebody">
          <div className="rs_page">
            <h1>Invitation: Frontend Engineer - Siemens Digital Industries</h1>
            <div className="user box_large">
              <div id="show_returning_user">
                Returning User? Already registered?
                <a href=" ">Click here</a>
              </div>
              <div id="new_users">
                If this is the first time you're coming to this site, fill in
                the details below.
              </div>
            </div>
            <div className="user box_large">
              To get started, please provide the information below. Clicking on
              "Continue" will automatically create a login/password on this
              system for you. (We will not spam you. Your email address will
              only be used to communicate with you regarding this activity.)
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  defaultValue="cfqgePj1uPFEQkQIIX8EG1ecEanxG1553RafKgkvbyGgPd3ZaDUVOyHwzmmaHUQN"
                />
                <input type="hidden" name="pin" id="id_pin" />
                <div id="div_id_first_name" className="form-group">
                  <label htmlFor="id_first_name" className="">
                    First name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="first_name"
                      maxLength={30}
                      className="textinput textInput form-control"
                      id="id_first_name"
                    />
                  </div>
                </div>
                <div id="div_id_last_name" className="form-group">
                  <label htmlFor="id_last_name" className="">
                    Last name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="last_name"
                      maxLength={30}
                      className="textinput textInput form-control"
                      id="id_last_name"
                    />
                  </div>
                </div>
                <div id="div_id_username" className="form-group required">
                  <label htmlFor="id_username" className=" requiredField">
                    Create username
                    <span className="asteriskField">*</span>
                  </label>
                  <div>
                    <input
                      type="text"
                      name="username"
                      maxLength={150}
                      className="textinput textInput form-control"
                      required=""
                      id="id_username"
                    />
                    <small
                      id="hint_id_username"
                      className="form-text text-muted"
                    >
                      Required. 150 characters or fewer. Letters, digits and
                      @/./+/-/_ only.
                    </small>
                  </div>
                </div>
                <div id="div_id_email" className="form-group required">
                  <label htmlFor="id_email" className=" requiredField">
                    E-mail
                    <span className="asteriskField">*</span>
                  </label>
                  <div>
                    <input
                      type="email"
                      name="email"
                      className="emailinput form-control"
                      required=""
                      id="id_email"
                    />
                  </div>
                </div>
                <div id="div_id_password1" className="form-group required">
                  <label htmlFor="id_password1" className=" requiredField">
                    Password
                    <span className="asteriskField">*</span>
                  </label>
                  <div>
                    <input
                      type="password"
                      name="password1"
                      autoComplete="new-password"
                      className="textinput textInput form-control"
                      required=""
                      id="id_password1"
                    />
                  </div>
                </div>
                <div id="div_id_password2" className="form-group required">
                  <label htmlFor="id_password2" className=" requiredField">
                    Password confirmation
                    <span className="asteriskField">*</span>
                  </label>
                  <div>
                    <input
                      type="password"
                      name="password2"
                      autoComplete="new-password"
                      className="textinput textInput form-control"
                      required=""
                      id="id_password2"
                    />
                    <small
                      id="hint_id_password2"
                      className="form-text text-muted"
                    >
                      Enter the same password as before, for verification.
                    </small>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="contact_number"
                  id="id_contact_number"
                />
                <input
                  type="submit"
                  name="submit"
                  defaultValue="Continue"
                  className="btn btn-primary"
                  id="submit-id-submit"
                />
              </form>
            </div>
          </div>
        </div>
        <div id="sidebar_wrapper">
          <div className="sidebar">
            Powered by:
            <div id="powered_by_reliscore">
              <div className="box_large">
                <a href="https://reliscore.com/">
                  <img
                    src="https://assessments.reliscore.com/static/images/logo.png"
                    alt="Reliscore Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer" className="snipcss-XDat9">
        <div className="copyright_wrapper">
          <div className="copyright">
            Copyright © 2011 -
            <a href="https://reliscore.com" title="reliscore.com">
              PuneTech Software Pvt. Ltd
            </a>
            .
            <br />
            Credits: Icons taken from
            {icons.map((icon, index) => (
              <span key={index}>
                <a href={icon.url} title={icon.name} onClick={handleLinkClick}>
                  {icon.name}
                </a>
                {index !== icons.length - 1 && ","}
              </span>
            ))}
            .
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
