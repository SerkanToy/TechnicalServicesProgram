import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Index from '../Pages/Index'
import Persons from '../Pages/Person/Persons'
import Persondetail from '../Pages/Person/Persondetail'
import Addperson from '../Pages/Person/Addperson'

function MobileNav() {
    return (
        <div
            className="nk-aside"
            data-content="sideNav"
            data-toggle-overlay="true"
            data-toggle-screen="lg"
            data-toggle-body="true"
        >
            <div className="nk-sidebar-menu" data-simplebar="">
                <ul className="nk-menu nk-menu-main">
                    <li className="nk-menu-item">
                        <a href="/" className="nk-menu-link">
                            <span className="nk-menu-text">Anasayfa</span>
                        </a>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-text">Apps</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a href="apps-messages.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Messages</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="apps-inbox.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Inbox / Mail</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="apps-file-manager.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">File Manager</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="apps-chats.html" className="nk-menu-link">
                                    <span className="nk-menu-text">
                                        Chats / Messenger
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="apps-calendar.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Calendar</span>
                                    <span className="nk-menu-badge">New</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="apps-kanban.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Kanban Board</span>
                                    <span className="nk-menu-badge">New</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item">
                        <a href="components.html" className="nk-menu-link">
                            <span className="nk-menu-text">Components</span>
                        </a>
                    </li>
                    <li className="nk-menu-item">
                        <a href="support-kb.html" className="nk-menu-link">
                            <span className="nk-menu-text">Support</span>
                        </a>
                    </li>
                    <li className="nk-menu-item">
                        <a href="pages/contact.html" className="nk-menu-link">
                            <span className="nk-menu-text">Contact</span>
                        </a>
                    </li>
                </ul>
                <ul className="nk-menu">
                    <li className="nk-menu-heading">
                        <h6 className="overline-title text-primary-alt">
                            Use-Case Concept
                        </h6>
                    </li>
                    <li className="nk-menu-item">
                        <a
                            href="subscription/index.html"
                            className="nk-menu-link"
                            target="_blank"
                        >
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-calendar-booking" />
                            </span>
                            <span className="nk-menu-text">
                                Subscription - SaaS
                            </span>
                        </a>
                    </li>
                    <li className="nk-menu-heading">
                        <h6 className="overline-title text-primary-alt">
                            Dashboards
                        </h6>
                    </li>
                    <li className="nk-menu-item">
                        <a href="index.html" className="nk-menu-link">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-dashlite" />
                            </span>
                            <span className="nk-menu-text">SaaS Dashboard</span>
                        </a>
                    </li>
                    <li className="nk-menu-item">
                        <a href="index-analytics.html" className="nk-menu-link">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-growth" />
                            </span>
                            <span className="nk-menu-text">
                                Analytics Dashboard
                            </span>
                        </a>
                    </li>
                    <li className="nk-menu-heading">
                        <h6 className="overline-title text-primary-alt">
                            Pre-Built Pages
                        </h6>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-tile-thumb" />
                            </span>
                            <span className="nk-menu-text">Projects</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a href="project-card.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Project Cards</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="project-list.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Project List</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-users" />
                            </span>
                            <span className="nk-menu-text">User Manage</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a
                                    href="user-list-regular.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        User List - Regular
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="user-list-compact.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        User List - Compact
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="user-details-regular.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        User Details - Regular
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="user-profile-regular.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        User Profile - Regular
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="user-card.html" className="nk-menu-link">
                                    <span className="nk-menu-text">
                                        User Contact - Card
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-user-list" />
                            </span>
                            <span className="nk-menu-text">Customers</span>
                            <span className="nk-menu-badge">New</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a href="customer-list.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Customer List</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="customer-details.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Customer Details
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-tranx" />
                            </span>
                            <span className="nk-menu-text">
                                Order &amp; Invoice
                            </span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a
                                    href="history-payment.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Payment History
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="history-invoice-list.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">Invoice List</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="history-invoice.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">Invoice Detail</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-card-view" />
                            </span>
                            <span className="nk-menu-text">Products</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a href="product-list.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Product List</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="product-card.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Product Card</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="product-details.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Product Details
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item">
                        <a href="pricing-table.html" className="nk-menu-link">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-view-col" />
                            </span>
                            <span className="nk-menu-text">Pricing Table</span>
                        </a>
                    </li>
                    <li className="nk-menu-item">
                        <a href="gallery.html" className="nk-menu-link">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-img" />
                            </span>
                            <span className="nk-menu-text">Image Gallery</span>
                        </a>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-help-alt" />
                            </span>
                            <span className="nk-menu-text">
                                Support &amp; Ticket
                            </span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a href="support-kb.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Support - KB</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="support-kb-topics.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Support - KB Topic
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="support-kb-details.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Support - KB Details
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="ticket-list.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Ticket List</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="ticket-details.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">Ticket Details</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="history-invoice.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">Invoice Detail</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-signin" />
                            </span>
                            <span className="nk-menu-text">Auth Pages</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a
                                    href="pages/auths/auth-login.html"
                                    className="nk-menu-link"
                                    target="_blank"
                                >
                                    <span className="nk-menu-text">Login / Signin</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/auths/auth-register.html"
                                    className="nk-menu-link"
                                    target="_blank"
                                >
                                    <span className="nk-menu-text">
                                        Register / Signup
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/auths/auth-reset.html"
                                    className="nk-menu-link"
                                    target="_blank"
                                >
                                    <span className="nk-menu-text">
                                        Forgot Password
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/auths/auth-success.html"
                                    className="nk-menu-link"
                                    target="_blank"
                                >
                                    <span className="nk-menu-text">
                                        Success / Confirm
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-text">
                                        Classic Version - v2
                                    </span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-login-v2.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Login / Signin
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-register-v2.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Register / Signup
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-reset-v2.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Forgot Password
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-success-v2.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Success / Confirm
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nk-menu-item">
                                <a href="#" className="nk-menu-link nk-menu-toggle">
                                    <span className="nk-menu-text">
                                        No Slider Version - v3
                                    </span>
                                </a>
                                <ul className="nk-menu-sub">
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-login-v3.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Login / Signin
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-register-v3.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Register / Signup
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-reset-v3.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Forgot Password
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nk-menu-item">
                                        <a
                                            href="pages/auths/auth-success-v3.html"
                                            className="nk-menu-link"
                                            target="_blank"
                                        >
                                            <span className="nk-menu-text">
                                                Success / Confirm
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-files" />
                            </span>
                            <span className="nk-menu-text">Error Pages</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a
                                    href="pages/errors/404-classic.html"
                                    target="_blank"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">404 Classic</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/errors/504-classic.html"
                                    target="_blank"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">504 Classic</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/errors/404-s1.html"
                                    target="_blank"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">404 Modern</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/errors/504-s1.html"
                                    target="_blank"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">504 Modern</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-item has-sub">
                        <a href="#" className="nk-menu-link nk-menu-toggle">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-files" />
                            </span>
                            <span className="nk-menu-text">Other Pages</span>
                        </a>
                        <ul className="nk-menu-sub">
                            <li className="nk-menu-item">
                                <a href="_blank.html" className="nk-menu-link">
                                    <span className="nk-menu-text">
                                        Blank / Startup
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="pages/pricing.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Pricing Plan</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="pages/faqs.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Faqs / Help</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a href="pages/contact.html" className="nk-menu-link">
                                    <span className="nk-menu-text">Contact</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/terms-policy.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">Terms / Policy</span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/regular-v1.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Regular Page - v1
                                    </span>
                                </a>
                            </li>
                            <li className="nk-menu-item">
                                <a
                                    href="pages/regular-v2.html"
                                    className="nk-menu-link"
                                >
                                    <span className="nk-menu-text">
                                        Regular Page - v2
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nk-menu-heading">
                        <h6 className="overline-title text-primary-alt">
                            Others
                        </h6>
                    </li>
                    <li className="nk-menu-item">
                        <a href="email-templates.html" className="nk-menu-link">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-text-rich" />
                            </span>
                            <span className="nk-menu-text">Email Template</span>
                        </a>
                    </li>
                    <li className="nk-menu-item">
                        <a href="components.html" className="nk-menu-link">
                            <span className="nk-menu-icon">
                                <em className="icon ni ni-layers" />
                            </span>
                            <span className="nk-menu-text">All Components</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nk-aside-close">
                <a href="#" className="toggle" data-target="sideNav">
                    <em className="icon ni ni-cross" />
                </a>
            </div>
        </div>
    )
}

export default MobileNav