import React from 'react'

function Header() {
  return (
    <div>
      {/* Main Navigation */}
        <header>
        {/* Jumbotron */}
        <div class="p-3 text-center bg-white border-bottom">
            <div class="container">
            <div class="row gy-3">
                {/* Left elements */}
                <div class="col-lg-2 col-sm-4 col-4">
                <a href="https://mdbootstrap.com/" target="_blank" class="float-start">
                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" />
                </a>
                </div>
                {/* Left elements */}

                {/* Center elements */}
                <div class="order-lg-last col-lg-5 col-sm-8 col-8">
                <div class="d-flex float-end">
                    <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i class="fas fa-user-alt m-1 me-md-2"></i><p class="d-none d-md-block mb-0">Sign in</p> </a>
                    <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i class="fas fa-heart m-1 me-md-2"></i><p class="d-none d-md-block mb-0">Wishlist</p> </a>
                    <a href="https://github.com/mdbootstrap/bootstrap-material-design" class="border rounded py-1 px-3 nav-link d-flex align-items-center" target="_blank"> <i class="fas fa-shopping-cart m-1 me-md-2"></i><p class="d-none d-md-block mb-0">My cart</p> </a>
                </div>
                </div>
                {/* Center elements */}

                {/* Right elements */}
                <div class="col-lg-5 col-md-12 col-12">
                <div class="input-group float-center">
                    <div class="form-outline">
                    <input type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1">Search</label>
                    </div>
                    <button type="button" class="btn btn-primary shadow-0">
                    <i class="fas fa-search"></i>
                    </button>
                </div>
                </div>
                {/* Right elements */}
            </div>
            </div>
        </div>
        {/* Jumbotron */}

        {/* Navbar */}
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            {/* Container wrapper */}
            <div class="container justify-content-center justify-content-md-between">
            {/* Toggle button */}
            <button
                    class="navbar-toggler border py-2 text-dark"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarLeftAlignExample"
                    aria-controls="navbarLeftAlignExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                <i class="fas fa-bars"></i>
            </button>

            {/* Collapsible wrapper */}
            <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
                {/* Left links */}
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link text-dark" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Categories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Hot offers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Gift boxes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Menu item</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Menu name</a>
                </li>
                {/* Navbar dropdown */}
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                    Others
                    </a>
                    {/* Dropdown menu */}
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item" href="#">Action</a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li><hr class="dropdown-divider" /></li>
                    <li>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                    </ul>
                </li>
                </ul>
                {/* Left links */}
            </div>
            </div>
            {/* Container wrapper */}
        </nav>
        {/* Navbar */}
        {/* Jumbotron */}
        <div class="bg-primary text-white py-5">
            <div class="container py-5">
            <h1>
                Best products & <br />
                brands in our store
            </h1>
            <p>
                Trendy Products, Factory Prices, Excellent Service
            </p>
            <button type="button" class="btn btn-outline-light">
                Learn more
            </button>
            <button type="button" class="btn btn-light shadow-0 text-primary pt-2 border border-white">
                <span class="pt-1">Purchase now</span>
            </button>
            </div>
        </div>
        {/* Jumbotron */}
        </header>
    </div>
  )
}

export default Header;