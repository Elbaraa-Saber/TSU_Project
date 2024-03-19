import '../Css/navbar.css'

function Navbar() {
    return(
        <>
            <div className="navbar">
                <div className="logo">ELBARAA<span>.</span></div>
                <div className='btns'>
                    <div className="desktop-btn">
                        <a href="#" title="Desktop view" className="icon-desktop"><i class="fa-solid fa-desktop"></i></a>
                    </div>
                    <div className="tablet-btn">
                        <a href="#" title="Tablet view" className="icon-tablet"><i class="fa-solid fa-tablet-screen-button"></i></a>
                    </div>
                    <div className="mobile-btn">
                        <a href="#" title="Mobile view" className="icon-mobile"><i class="fa-light fa-mobile"></i></a>
                    </div>
                    <div className="remove-btn">
                        <a href="#" title="Close this bar" className="icon-remove"><i class="fa-solid fa-x"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;