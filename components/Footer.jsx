import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="container-fluid row row-cols-1 row-cols-sm-2 row-cols-md-5 p-5 border-top m-0">
      <div className="col mb-3">
        <h5 className="text-white">BROWSE</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              TV Shows
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Movies
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Originals
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Networks
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Kids
            </Link>
          </li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5 className="text-white">HELP</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Account & Billing
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Plan & Pricing
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Supported Devices
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Accessibility
            </Link>
          </li>
        </ul>
      </div>
      <div className="col mb-3">
        <h5 className="text-white">ABOUT US</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Shop Zulu
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Support
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Press
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Jobs
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link href="#" className="nav-link p-0 text-muted">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
