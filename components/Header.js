export default function Header() {
  return <div className="navbar navbar-light bg-light box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <div className="h-50">
                Formverk
              </div>
            </a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
}
