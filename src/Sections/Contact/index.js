import "./index.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Background from "../../assets/logos/footer-bg.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LanguageIcon from "@material-ui/icons/Language";
import logo from "../../assets/logos/Asset 3112.png";


const Contact = () => {
  return (
    <footer
      id="contact"
      class="footer-section"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div
        class="footer-top background-img-2"
        style={{ padding: "30px 0 0 0" }}
      >
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
              <div class="footer-nav-wrap text-white">
                <img
                  src={logo}
                  alt="footer logo"
                  width="10px"
                  class="img-fluid mb-3"
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi non quis exercitationem culpa nesciunt nihil aut
                  nostrum explicabo reprehenderit optio amet ab temporibus
                  asperiores quasi cupiditate. Voluptatum ducimus voluptates
                  voluptas?
                </p>

                <div class="social-list-wrap">
                  <ul>
                    <li>
                      <a href="#" target="_blank" title="Facebook">
                        <span class="ti-facebook">
                          <FacebookIcon />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="Twitter">
                        <span class="ti-twitter">
                          <TwitterIcon />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="Instagram">
                        <span class="ti-instagram">
                          <InstagramIcon />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" title="printerst">
                        <span class="ti-pinterest">
                          <PinterestIcon />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-8">
              <div class="row">
                <div class="col-sm-6 col-md-4 col-lg-4 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                  <div class="footer-nav-wrap text-white">
                    <h5 class="mb-3 text-white">Company</h5>
                    <ul class="list-unstyled support-list">
                      <li class="mb-2">
                        <a href="#">About Us</a>
                      </li>
                      <li class="mb-2">
                        <a href="#">Careers</a>
                      </li>
                      <li class="mb-2">
                        <a href="#">Customers</a>
                      </li>
                      <li class="mb-2">
                        <a href="#">Community</a>
                      </li>
                      <li class="mb-2">
                        <a href="#">Our Team</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4">
                  <div class="footer-nav-wrap text-white">
                    <h5 class="mb-3 text-white">Location</h5>
                    <ul class="list-unstyled support-list">
                      <li class="mb-2 d-flex align-items-center">
                        <span class="ti-location-pin mr-2">
                          <RoomIcon />
                        </span>
                        121 King Melbourne
                        <br />
                        Australia 3000
                      </li>
                      <li class="mb-2 d-flex align-items-center">
                        <span class="ti-mobile mr-2">
                          <PhoneIphoneIcon />
                        </span>
                        <a href="tel:+61283766284"> +61 2 8376 6284</a>
                      </li>
                      <li class="mb-2 d-flex align-items-center">
                        <span class="ti-email mr-2">
                          <MailOutlineIcon />
                        </span>
                        <a href="mailto:mail@example.com">mail@example.com</a>
                      </li>
                      <li class="mb-2 d-flex align-items-center">
                        <span class="ti-world mr-2">
                          <LanguageIcon />
                        </span>
                        <a href="https://webixun.com">webixun</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom border-gray-light mt-5 py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-7">
                <div class="copyright-wrap small-text">
                  <p class="mb-0 text-white">
                    Quality Product By
                    <a href={"http://google.com"}>Google</a>
                  </p>
                </div>
              </div>
              <div class="col-md-6 col-lg-5">
                <div class="terms-policy-wrap text-lg-right text-md-right text-left">
                  <ul class="list-inline">
                    <li>
                      <a class="small-text" href="#">
                        Terms
                      </a>
                    </li>
                    <li>
                      <a class="small-text" href="#">
                        Security
                      </a>
                    </li>
                    <li>
                      <a class="small-text" href="#">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
