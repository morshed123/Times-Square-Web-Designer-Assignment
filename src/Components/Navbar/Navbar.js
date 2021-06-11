import React from 'react';
import { FaUser, FaSearch, FaCartPlus}  from "react-icons/fa";

const Navbar = () => {
    return (

    <nav class="navbar navbar-expand-lg navbar-light bg-danger ">
    <div class="container-fluid col-12">
    <div class="row">

            <div class="collapse navbar-collapse col-6 col-sm-3" id="navbarSupportedContent">
            <a class="navbar-brand text-white" href="#">Navbar</a>
                <button class="nav-item dropdown me-0">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                </button>
                <form class="d-flex col-10">
                    <input class="form-control me-1 " type="search" placeholder="Search You..." aria-label="Search"/>
                    <button class="btn btn-light" type="submit"><FaSearch/></button>
                </form>
            </div>
            <div class="col-6 col-sm-3">
                <ul class="navbar-nav  mb-2 mb-lg-2">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white" href="#"><FaUser/> Sign in</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled text-white" href="#" tabindex="-1" aria-disabled="true"><FaCartPlus/> Cart</a>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-sm-12">
                <ul class="navbar-nav mb-2 mb-lg-1 px-5">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Weekly Ad</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Sell On</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#"></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Smart Cart</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Inventor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Factory Direct</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Farmers Direct</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Export</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Travel/Ticket</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">TREASURE HUNT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Shop super deals</a>
                    </li>
                </ul>
            </div>
    </div>
    </div>
    </nav>
    
    );
};

export default Navbar;