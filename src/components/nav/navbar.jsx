export default function Navbar() {
    return (<>
        <nav className="navbar bg-dark-subtle m-1 shadow" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Tournament Maker
                </a>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuSidebar" aria-controls="offcanvasRight">
                    Menu
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="menuSidebar" aria-labelledby="menuSidebarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="menuSidebarLabel">Menu</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <a className="nav-link" href="users">Users</a>
                        <button type="button" className="btn btn-primary w-75 position-absolute bottom-0 start-50 translate-middle">Sign Out</button>
                    </div>
                </div>
            </div>
        </nav>
    </>);
}