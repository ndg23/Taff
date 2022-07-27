import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer className="footer container bg-light ">
        <div class="row container py-2">
          <div className="col-lg-3 col-sm-4 col-md-3 col-xs-4 col-md-4">
            <div className="text-3xl font-weight-bold">
              {" "}
              <h2>Sycolo.</h2>
            </div>{" "}
            <ul>
              <li>
                <span>
                  <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                </span>
                <span>Colobane,Dakar</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-mobile" aria-hidden="true"></i>
                </span>
                <span className="ml-2">+221 77 749 39 10</span>
              </li>
              <li>
                <span>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                <span className="ml-2">marvinndg242@gmail.com</span>{" "}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 flex-col">
            <i class="fa fa-handshake-o text-5xl" aria-hidden="true"></i>
            <h2>Confiance</h2>
          </div>

          <div className="col-lg-3 flex-col ">
            <i class="fa fa-address-card text-5xl" aria-hidden="true"></i>
            <h2>Verification</h2>
          </div>

          <div class="col-md-3 col-lg-3  ml-auto">
            <h5 class="heading">Entreprise</h5>
            <ul class="card-text">
              <li> A-propos</li>
              <li>Nous-Contacter</li>
              <li>Rejoignez-nous</li>
            </ul>
          </div>
        </div>
        <div class="divider"> </div>
        <div class="flex justify-content-between align-items-center ">
          <div class="text-muted">
            <div class="pull-left flex ml-3 align-items-center justify-content-evenly">
              <i class="fa fa-copyright"></i> <div className="mx-1"></div>
              <p>2020</p>
              <div className="mx-1"></div>
              <p>Sycolo</p>
            </div>
          </div>
          <div class="text-sm">
            <div class="pull-right mr-4 d-flex policy">
              <div>Conditions d'utilisateur</div>
              <div>Politique de confidentialite</div>
              <div>Cookies</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}