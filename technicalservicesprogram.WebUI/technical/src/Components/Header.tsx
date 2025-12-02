import React from 'react'
import Nav from './Nav'

function Header() {
    return (
        <div className="nk-header nk-header-fixed is-light  nk-header-fixed">
            <div className="container-lg wide-xl">
                <div className="nk-header-wrap">
                    {/*<div className="nk-header-brand">
                        <a href="index.html" className="logo-link">
                            <img
                                className="logo-light logo-img"
                                src="images/logo.png"
                                srcSet="/demo4/images/logo2x.png 2x"
                                alt="logo"
                            />
                            <img
                                className="logo-dark logo-img"
                                src="images/logo-dark.png"
                                srcSet="/demo4/images/logo-dark2x.png 2x"
                                alt="logo-dark"
                            />
                        </a>
                    </div>*/}
                    
                    <Nav />

                    <div className="nk-header-tools">
                        <ul className="nk-quick-nav">
                            <li className="dropdown language-dropdown d-none d-sm-block me-n1">
                                <a
                                    href="#"
                                    className="dropdown-toggle nk-quick-nav-icon"
                                    data-bs-toggle="dropdown"
                                >
                                    <div className="quick-icon border border-light">
                                        <img
                                            className="icon"
                                            src="images/flags/english-sq.png"
                                            alt=""
                                        />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-s1">
                                    <ul className="language-list">
                                        <li>
                                            <a href="#" className="language-item">
                                                <img
                                                    src="images/flags/english.png"
                                                    alt=""
                                                    className="language-flag"
                                                />
                                                <span className="language-name">English</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="language-item">
                                                <img
                                                    src="images/flags/spanish.png"
                                                    alt=""
                                                    className="language-flag"
                                                />
                                                <span className="language-name">Español</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="language-item">
                                                <img
                                                    src="images/flags/french.png"
                                                    alt=""
                                                    className="language-flag"
                                                />
                                                <span className="language-name">Français</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="language-item">
                                                <img
                                                    src="images/flags/turkey.png"
                                                    alt=""
                                                    className="language-flag"
                                                />
                                                <span className="language-name">Türkçe</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown notification-dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle nk-quick-nav-icon"
                                    data-bs-toggle="dropdown"
                                >
                                    <div className="icon-status icon-status-info">
                                        <em className="icon ni ni-bell" />
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end dropdown-menu-s1">
                                    <div className="dropdown-head">
                                        <span className="sub-title nk-dropdown-title">
                                            Notifications
                                        </span>
                                        <a href="#">Mark All as Read</a>
                                    </div>
                                    <div className="dropdown-body">
                                        <div className="nk-notification">
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">
                                                        You have requested to
                                                        <span>Widthdrawl</span>
                                                    </div>
                                                    <div className="nk-notification-time">
                                                        2 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">
                                                        Your <span>Deposit Order</span> is placed
                                                    </div>
                                                    <div className="nk-notification-time">
                                                        2 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">
                                                        You have requested to
                                                        <span>Widthdrawl</span>
                                                    </div>
                                                    <div className="nk-notification-time">
                                                        2 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">
                                                        Your <span>Deposit Order</span> is placed
                                                    </div>
                                                    <div className="nk-notification-time">
                                                        2 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-warning-dim ni ni-curve-down-right" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">
                                                        You have requested to
                                                        <span>Widthdrawl</span>
                                                    </div>
                                                    <div className="nk-notification-time">
                                                        2 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="nk-notification-item dropdown-inner">
                                                <div className="nk-notification-icon">
                                                    <em className="icon icon-circle bg-success-dim ni ni-curve-down-left" />
                                                </div>
                                                <div className="nk-notification-content">
                                                    <div className="nk-notification-text">
                                                        Your <span>Deposit Order</span> is placed
                                                    </div>
                                                    <div className="nk-notification-time">
                                                        2 hrs ago
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-foot center">
                                        <a href="#">View All</a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown user-dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle me-lg-n1"
                                    data-bs-toggle="dropdown"
                                >
                                    <div className="user-toggle">
                                        <div className="user-avatar sm">
                                            <em className="icon ni ni-user-alt" />
                                        </div>
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                                    <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                        <div className="user-card">
                                            <div className="user-avatar">
                                                <span>AB</span>
                                            </div>
                                            <div className="user-info">
                                                <span className="lead-text">Abu Bin Ishtiyak</span>
                                                <span className="sub-text">info@softnio.com</span>
                                            </div>
                                            <div className="user-action">
                                                <a
                                                    className="btn btn-icon me-n2"
                                                    href="user-profile-setting.html"
                                                >
                                                    <em className="icon ni ni-setting" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li>
                                                <a href="user-profile-regular.html">
                                                    <em className="icon ni ni-user-alt" />
                                                    <span>View Profile</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-profile-setting.html">
                                                    <em className="icon ni ni-setting-alt" />
                                                    <span>Account Setting</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-profile-activity.html">
                                                    <em className="icon ni ni-activity-alt" />
                                                    <span>Login Activity</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown-inner">
                                        <ul className="link-list">
                                            <li>
                                                <a href="#">
                                                    <em className="icon ni ni-signout" />
                                                    <span>Sign out</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="d-lg-none">
                                <a
                                    href="#"
                                    className="toggle nk-quick-nav-icon me-n1"
                                    data-target="sideNav"
                                >
                                    <em className="icon ni ni-menu" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header