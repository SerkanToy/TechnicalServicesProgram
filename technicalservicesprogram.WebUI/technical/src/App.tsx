

function App() {

  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main ">
          <div className="nk-sidebar is-light nk-sidebar-fixed " data-content="sidebarMenu">
            <div className="nk-sidebar-element nk-sidebar-head">
              <div className="nk-sidebar-brand">
                <a href="index.html" className="logo-link nk-sidebar-logo">
                  <img className="logo-light logo-img" src="/src/assets/images/logo.png" srcSet="/src/assets/images/logo2x.png 2x" alt="logo" />
                  <img className="logo-dark logo-img" src="/src/assets/images/logo-dark.png" srcSet="/src/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
                  <img className="logo-small logo-img logo-img-small" src="/src/assets/images/logo-small.png" srcSet="/src/assets/images/logo-small2x.png 2x" alt="logo-small" />
                </a>
              </div>
              <div className="nk-menu-trigger me-n2"><a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none"
                data-target="sidebarMenu"><em className="icon ni ni-arrow-left"></em></a></div>
            </div>
            <div className="nk-sidebar-element">
              <div className="nk-sidebar-content">
                <div className="nk-sidebar-menu" data-simplebar>
                  <ul className="nk-menu">
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">Use-Case Preview</h6>
                    </li>
                    <li className="nk-menu-item"><a href="copywriter/index.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-bag"></em></span><span
                        className="nk-menu-text">AI Copywriter</span><span
                          className="nk-menu-badge">HOT</span></a></li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">Dashboards</h6>
                    </li>
                    <li className="nk-menu-item"><a href="index.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-presentation"></em></span><span
                        className="nk-menu-text">Default Dashboard</span></a></li>
                    <li className="nk-menu-item"><a href="index-sales.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-cc-alt2"></em></span><span
                        className="nk-menu-text">Sales Dashboard</span></a></li>
                    <li className="nk-menu-item"><a href="index-invest.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-coins"></em></span><span
                        className="nk-menu-text">Invest Dashboard</span></a></li>
                    <li className="nk-menu-item"><a href="index-crypto.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-bitcoin-cash"></em></span><span
                        className="nk-menu-text">Crypto Dashboard</span></a></li>
                    <li className="nk-menu-item"><a href="index-analytics.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-growth"></em></span><span
                        className="nk-menu-text">Analytics Dashboard</span></a></li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">Applications</h6>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-tile-thumb"></em></span><span
                        className="nk-menu-text">Projects</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="project-card.html" className="nk-menu-link"><span
                          className="nk-menu-text">Project Cards</span></a></li>
                        <li className="nk-menu-item"><a href="project-list.html" className="nk-menu-link"><span
                          className="nk-menu-text">Project List</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-users"></em></span><span
                        className="nk-menu-text">User Manage</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="user-list-regular.html"
                          className="nk-menu-link"><span className="nk-menu-text">User List -
                            Regular</span></a></li>
                        <li className="nk-menu-item"><a href="user-list-compact.html"
                          className="nk-menu-link"><span className="nk-menu-text">User List -
                            Compact</span></a></li>
                        <li className="nk-menu-item"><a href="user-details-regular.html"
                          className="nk-menu-link"><span className="nk-menu-text">User Details -
                            Regular</span></a></li>
                        <li className="nk-menu-item"><a href="user-profile-regular.html"
                          className="nk-menu-link"><span className="nk-menu-text">User Profile -
                            Regular</span></a></li>
                        <li className="nk-menu-item"><a href="user-card.html" className="nk-menu-link"><span
                          className="nk-menu-text">User Contact - Card</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-user-list"></em></span><span
                        className="nk-menu-text">Customers</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="customer-list.html" className="nk-menu-link"><span
                          className="nk-menu-text">Customer List</span></a></li>
                        <li className="nk-menu-item"><a href="customer-details.html"
                          className="nk-menu-link"><span className="nk-menu-text">Customer
                            Details</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-file-docs"></em></span><span
                        className="nk-menu-text">AML / KYCs</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="kyc-list-regular.html"
                          className="nk-menu-link"><span className="nk-menu-text">KYC List -
                            Regular</span></a></li>
                        <li className="nk-menu-item"><a href="kyc-details-regular.html"
                          className="nk-menu-link"><span className="nk-menu-text">KYC Details -
                            Regular</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-tranx"></em></span><span
                        className="nk-menu-text">Transactions</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="transaction-basic.html"
                          className="nk-menu-link"><span className="nk-menu-text">Tranx List -
                            Basic</span></a></li>
                        <li className="nk-menu-item"><a href="transaction-crypto.html"
                          className="nk-menu-link"><span className="nk-menu-text">Tranx List -
                            Crypto</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-grid-alt"></em></span><span
                        className="nk-menu-text">Applications</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="apps-messages.html" className="nk-menu-link"><span
                          className="nk-menu-text">Messages</span></a></li>
                        <li className="nk-menu-item"><a href="apps-inbox.html" className="nk-menu-link"><span
                          className="nk-menu-text">Inbox / Mail</span></a></li>
                        <li className="nk-menu-item"><a href="apps-file-manager.html"
                          className="nk-menu-link"><span className="nk-menu-text">File Manager</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="apps-chats.html" className="nk-menu-link"><span
                          className="nk-menu-text">Chats / Messenger</span></a></li>
                        <li className="nk-menu-item"><a href="apps-calendar.html" className="nk-menu-link"><span
                          className="nk-menu-text">Calendar</span></a></li>
                        <li className="nk-menu-item"><a href="apps-kanban.html" className="nk-menu-link"><span
                          className="nk-menu-text">Kanban Board</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-file-docs"></em></span><span
                        className="nk-menu-text">Invoice</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="invoice-list.html" className="nk-menu-link"><span
                          className="nk-menu-text">Invoice List</span></a></li>
                        <li className="nk-menu-item"><a href="invoice-details.html"
                          className="nk-menu-link"><span className="nk-menu-text">Invoice
                            Details</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-card-view"></em></span><span
                        className="nk-menu-text">Products</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="product-list.html" className="nk-menu-link"><span
                          className="nk-menu-text">Product List</span></a></li>
                        <li className="nk-menu-item"><a href="product-card.html" className="nk-menu-link"><span
                          className="nk-menu-text">Product Card</span></a></li>
                        <li className="nk-menu-item"><a href="product-details.html"
                          className="nk-menu-link"><span className="nk-menu-text">Product
                            Details</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item"><a href="pricing-table.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-view-col"></em></span><span
                        className="nk-menu-text">Pricing Table</span></a></li>
                    <li className="nk-menu-item"><a href="gallery.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-img"></em></span><span
                        className="nk-menu-text">Image Gallery</span></a></li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">Misc Pages</h6>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-signin"></em></span><span
                        className="nk-menu-text">Auth Pages</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="pages/auths/auth-login.html"
                          className="nk-menu-link" target="_blank"><span className="nk-menu-text">Login /
                            Signin</span></a></li>
                        <li className="nk-menu-item"><a href="pages/auths/auth-register.html"
                          className="nk-menu-link" target="_blank"><span className="nk-menu-text">Register
                            / Signup</span></a></li>
                        <li className="nk-menu-item"><a href="pages/auths/auth-reset.html"
                          className="nk-menu-link" target="_blank"><span className="nk-menu-text">Forgot
                            Password</span></a></li>
                        <li className="nk-menu-item"><a href="pages/auths/auth-success.html"
                          className="nk-menu-link" target="_blank"><span className="nk-menu-text">Success
                            / Confirm</span></a></li>
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">classNameic
                            Version - v2</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="pages/auths/auth-login-v2.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Login / Signin</span></a></li>
                            <li className="nk-menu-item"><a href="pages/auths/auth-register-v2.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Register / Signup</span></a></li>
                            <li className="nk-menu-item"><a href="pages/auths/auth-reset-v2.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Forgot Password</span></a></li>
                            <li className="nk-menu-item"><a href="pages/auths/auth-success-v2.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Success / Confirm</span></a></li>
                          </ul>
                        </li>
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">No Slider
                            Version - v3</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="pages/auths/auth-login-v3.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Login / Signin</span></a></li>
                            <li className="nk-menu-item"><a href="pages/auths/auth-register-v3.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Register / Signup</span></a></li>
                            <li className="nk-menu-item"><a href="pages/auths/auth-reset-v3.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Forgot Password</span></a></li>
                            <li className="nk-menu-item"><a href="pages/auths/auth-success-v3.html"
                              className="nk-menu-link" target="_blank"><span
                                className="nk-menu-text">Success / Confirm</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-files"></em></span><span
                        className="nk-menu-text">Error Pages</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="pages/errors/404-classNameic.html" target="_blank"
                          className="nk-menu-link"><span className="nk-menu-text">404 classNameic</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="pages/errors/504-classNameic.html" target="_blank"
                          className="nk-menu-link"><span className="nk-menu-text">504 classNameic</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="pages/errors/404-s1.html" target="_blank"
                          className="nk-menu-link"><span className="nk-menu-text">404 Modern</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="pages/errors/504-s1.html" target="_blank"
                          className="nk-menu-link"><span className="nk-menu-text">504 Modern</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-files"></em></span><span
                        className="nk-menu-text">Other Pages</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="_blank.html" className="nk-menu-link"><span
                          className="nk-menu-text">Blank / Startup</span></a></li>
                        <li className="nk-menu-item"><a href="pages/faqs.html" className="nk-menu-link"><span
                          className="nk-menu-text">Faqs / Help</span></a></li>
                        <li className="nk-menu-item"><a href="pages/terms-policy.html"
                          className="nk-menu-link"><span className="nk-menu-text">Terms /
                            Policy</span></a></li>
                        <li className="nk-menu-item"><a href="pages/regular-v1.html"
                          className="nk-menu-link"><span className="nk-menu-text">Regular Page -
                            v1</span></a></li>
                        <li className="nk-menu-item"><a href="pages/regular-v2.html"
                          className="nk-menu-link"><span className="nk-menu-text">Regular Page -
                            v2</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-heading">
                      <h6 className="overline-title text-primary-alt">Components</h6>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-layers"></em></span><span
                        className="nk-menu-text">Ui Elements</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/elements/alerts.html"
                          className="nk-menu-link"><span className="nk-menu-text">Alerts</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/accordions.html"
                          className="nk-menu-link"><span className="nk-menu-text">Accordions</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/elements/avatar.html"
                          className="nk-menu-link"><span className="nk-menu-text">Avatar</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/badges.html"
                          className="nk-menu-link"><span className="nk-menu-text">Badges</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/buttons.html"
                          className="nk-menu-link"><span className="nk-menu-text">Buttons</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/buttons-group.html"
                          className="nk-menu-link"><span className="nk-menu-text">Button Group</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/elements/breadcrumb.html"
                          className="nk-menu-link"><span className="nk-menu-text">Breadcrumb</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/elements/cards.html"
                          className="nk-menu-link"><span className="nk-menu-text">Cards</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/carousel.html"
                          className="nk-menu-link"><span className="nk-menu-text">Carousel</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/list-dropdown.html"
                          className="nk-menu-link"><span className="nk-menu-text">List Dropdown</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/elements/modals.html"
                          className="nk-menu-link"><span className="nk-menu-text">Modals</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/pagination.html"
                          className="nk-menu-link"><span className="nk-menu-text">Pagination</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/elements/popover.html"
                          className="nk-menu-link"><span className="nk-menu-text">Popovers</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/progress.html"
                          className="nk-menu-link"><span className="nk-menu-text">Progress</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/preloader.html"
                          className="nk-menu-link"><span className="nk-menu-text">Preloader</span> <span
                            className="nk-menu-badge">New</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/placeholders.html"
                          className="nk-menu-link"><span className="nk-menu-text">Placeholders</span>
                          <span className="nk-menu-badge">New</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/spinner.html"
                          className="nk-menu-link"><span className="nk-menu-text">Spinner</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/tabs.html"
                          className="nk-menu-link"><span className="nk-menu-text">Tabs</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/toast.html"
                          className="nk-menu-link"><span className="nk-menu-text">Toasts</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/tooltip.html"
                          className="nk-menu-link"><span className="nk-menu-text">Tooltip</span></a></li>
                        <li className="nk-menu-item"><a href="components/elements/typography.html"
                          className="nk-menu-link"><span className="nk-menu-text">Typography</span></a>
                        </li>
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span
                            className="nk-menu-text">Utilities</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="components/elements/util-border.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Border</span></a></li>
                            <li className="nk-menu-item"><a href="components/elements/util-colors.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Colors</span></a></li>
                            <li className="nk-menu-item"><a href="components/elements/util-display.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Display</span></a></li>
                            <li className="nk-menu-item"><a href="components/elements/util-embeded.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Embeded</span></a></li>
                            <li className="nk-menu-item"><a href="components/elements/util-flex.html"
                              className="nk-menu-link"><span className="nk-menu-text">Flex</span></a>
                            </li>
                            <li className="nk-menu-item"><a href="components/elements/util-text.html"
                              className="nk-menu-link"><span className="nk-menu-text">Text</span></a>
                            </li>
                            <li className="nk-menu-item"><a href="components/elements/util-sizing.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Sizing</span></a></li>
                            <li className="nk-menu-item"><a href="components/elements/util-spacing.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Spacing</span></a></li>
                            <li className="nk-menu-item"><a href="components/elements/util-others.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Others</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-dot-box"></em></span><span
                        className="nk-menu-text">Crafted Icons</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/misc/svg-icons.html"
                          className="nk-menu-link"><span className="nk-menu-text">SVG Icon -
                            Exclusive</span></a></li>
                        <li className="nk-menu-item"><a href="components/misc/nioicon.html"
                          className="nk-menu-link"><span className="nk-menu-text">Nioicon -
                            HandCrafted</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item"><a href="components/misc/icons.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-menu-circled"></em></span><span
                        className="nk-menu-text">Icon Libraries</span></a></li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-table-view"></em></span><span
                        className="nk-menu-text">Tables</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/tables/table-basic.html"
                          className="nk-menu-link"><span className="nk-menu-text">Basic Tables</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/tables/table-special.html"
                          className="nk-menu-link"><span className="nk-menu-text">Special
                            Tables</span></a></li>
                        <li className="nk-menu-item"><a href="components/tables/table-datatable.html"
                          className="nk-menu-link"><span className="nk-menu-text">DataTables</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-card-view"></em></span><span
                        className="nk-menu-text">Forms</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/forms/form-elements.html"
                          className="nk-menu-link"><span className="nk-menu-text">Form Elements</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/forms/checkbox-radio.html"
                          className="nk-menu-link"><span className="nk-menu-text">Checkbox
                            Radio</span></a></li>
                        <li className="nk-menu-item"><a href="components/forms/advanced-controls.html"
                          className="nk-menu-link"><span className="nk-menu-text">Advanced
                            Controls</span></a></li>
                        <li className="nk-menu-item"><a href="components/forms/input-group.html"
                          className="nk-menu-link"><span className="nk-menu-text">Input Group</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/forms/form-upload.html"
                          className="nk-menu-link"><span className="nk-menu-text">Form Upload</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/forms/datetime-picker.html"
                          className="nk-menu-link"><span className="nk-menu-text">Date &amp; Time
                            Picker</span></a></li>
                        <li className="nk-menu-item"><a href="components/forms/number-spinner.html"
                          className="nk-menu-link"><span className="nk-menu-text">Number
                            Spinner</span></a></li>
                        <li className="nk-menu-item"><a href="components/forms/nouislider.html"
                          className="nk-menu-link"><span className="nk-menu-text">noUiSlider</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/forms/form-layouts.html"
                          className="nk-menu-link"><span className="nk-menu-text">Form Layouts</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/forms/form-validation.html"
                          className="nk-menu-link"><span className="nk-menu-text">Form
                            Validation</span></a></li>
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span
                            className="nk-menu-text">Wizard</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="components/forms/form-wizard.html"
                              className="nk-menu-link"><span className="nk-menu-text">Basic
                                Demo</span></a></li>
                            <li className="nk-menu-item"><a
                              href="components/forms/wizard/create-project.html"
                              className="nk-menu-link"><span className="nk-menu-text">Create
                                Project</span></a></li>
                            <li className="nk-menu-item"><a
                              href="components/forms/wizard/create-profile.html"
                              className="nk-menu-link"><span className="nk-menu-text">Create
                                Profile</span></a></li>
                            <li className="nk-menu-item"><a
                              href="components/forms/wizard/two-factor-auth.html"
                              className="nk-menu-link"><span className="nk-menu-text">Two Factor
                                Auth</span></a></li>
                            <li className="nk-menu-item"><a target="_blank"
                              href="components/forms/wizard/survey-v1.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Survey</span></a></li>
                            <li className="nk-menu-item"><a target="_blank"
                              href="components/forms/wizard/survey-v2.html"
                              className="nk-menu-link"><span className="nk-menu-text">Survey
                                v2</span></a></li>
                          </ul>
                        </li>
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span className="nk-menu-text">Rich
                            Editor</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="components/forms/form-summernote.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Summernote</span></a></li>
                            <li className="nk-menu-item"><a href="components/forms/form-quill.html"
                              className="nk-menu-link"><span className="nk-menu-text">Quill</span></a>
                            </li>
                            <li className="nk-menu-item"><a href="components/forms/form-tinymce.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Tinymce</span></a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-pie"></em></span><span
                        className="nk-menu-text">Charts</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/charts/chartjs.html"
                          className="nk-menu-link"><span className="nk-menu-text">Chart JS</span></a></li>
                        <li className="nk-menu-item"><a href="components/charts/knob.html"
                          className="nk-menu-link"><span className="nk-menu-text">Knob JS</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-puzzle"></em></span><span
                        className="nk-menu-text">Widgets</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/widgets/cards.html"
                          className="nk-menu-link"><span className="nk-menu-text">Card Widgets</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/widgets/charts.html"
                          className="nk-menu-link"><span className="nk-menu-text">Chart Widgets</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/widgets/ratings.html"
                          className="nk-menu-link"><span className="nk-menu-text">Ratings
                            Widgets</span></a></li>
                      </ul>
                    </li>
                    <li className="nk-menu-item has-sub"><a href="#" className="nk-menu-link nk-menu-toggle"><span
                      className="nk-menu-icon"><em className="icon ni ni-block-over"></em></span><span
                        className="nk-menu-text">Miscellaneous</span></a>
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item"><a href="components/misc/slick-sliders.html"
                          className="nk-menu-link"><span className="nk-menu-text">Slick Slider</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/misc/toastr.html"
                          className="nk-menu-link"><span className="nk-menu-text">Toastr</span></a></li>
                        <li className="nk-menu-item"><a href="components/misc/sweet-alert.html"
                          className="nk-menu-link"><span className="nk-menu-text">Sweet Alert</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/misc/js-tree.html"
                          className="nk-menu-link"><span className="nk-menu-text">jsTree</span></a></li>
                        <li className="nk-menu-item"><a href="components/misc/dual-listbox.html"
                          className="nk-menu-link"><span className="nk-menu-text">Dual Listbox</span></a>
                        </li>
                        <li className="nk-menu-item"><a href="components/misc/dragula.html"
                          className="nk-menu-link"><span className="nk-menu-text">Dragula</span></a></li>
                        <li className="nk-menu-item"><a href="components/misc/map.html"
                          className="nk-menu-link"><span className="nk-menu-text">Google Map</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="nk-menu-item"><a href="email-templates.html" className="nk-menu-link"><span
                      className="nk-menu-icon"><em className="icon ni ni-text-rich"></em></span><span
                        className="nk-menu-text">Email Template</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-wrap ">
            <div className="nk-header is-light nk-header-fixed is-light">
              <div className="container-xl wide-xl">
                <div className="nk-header-wrap">
                  <div className="nk-menu-trigger d-xl-none ms-n1 me-3"><a href="#"
                    className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em
                      className="icon ni ni-menu"></em></a></div>
                  <div className="nk-header-brand d-xl-none">
                    <a href="index.html" className="logo-link">
                      <img className="logo-light logo-img" src="/src/assets/images/logo.png" srcSet="/src/assets/images/logo2x.png 2x" alt="logo" />
                      <img className="logo-dark logo-img" src="/src/assets/images/logo-dark.png" srcSet="/src/assets/images/logo-dark2x.png 2x" alt="logo-dark" />
                    </a>
                  </div>
                  <div className="nk-header-menu is-light">
                    <div className="nk-header-menu-inner">
                      <ul className="nk-menu nk-menu-main">
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span
                            className="nk-menu-text">Dashboards</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="index.html" className="nk-menu-link"><span
                              className="nk-menu-text">Default Dashboard</span></a></li>
                            <li className="nk-menu-item"><a href="index-sales.html"
                              className="nk-menu-link"><span className="nk-menu-text">Sales
                                Dashboard</span></a></li>
                            <li className="nk-menu-item"><a href="index-invest.html"
                              className="nk-menu-link"><span className="nk-menu-text">Invest
                                Dashboard</span></a></li>
                            <li className="nk-menu-item"><a href="index-crypto.html"
                              className="nk-menu-link"><span className="nk-menu-text">Crypto
                                Dashboard</span></a></li>
                            <li className="nk-menu-item"><a href="index-analytics.html"
                              className="nk-menu-link"><span className="nk-menu-text">Analytics
                                Dashboard</span></a></li>
                          </ul>
                        </li>
                        <li className="nk-menu-item has-sub"><a href="#"
                          className="nk-menu-link nk-menu-toggle"><span
                            className="nk-menu-text">Apps</span></a>
                          <ul className="nk-menu-sub">
                            <li className="nk-menu-item"><a href="apps-messages.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Messages</span></a></li>
                            <li className="nk-menu-item"><a href="apps-inbox.html"
                              className="nk-menu-link"><span className="nk-menu-text">Inbox /
                                Mail</span></a></li>
                            <li className="nk-menu-item"><a href="apps-file-manager.html"
                              className="nk-menu-link"><span className="nk-menu-text">File
                                Manager</span></a></li>
                            <li className="nk-menu-item"><a href="apps-chats.html"
                              className="nk-menu-link"><span className="nk-menu-text">Chats /
                                Messenger</span></a></li>
                            <li className="nk-menu-item"><a href="apps-calendar.html"
                              className="nk-menu-link"><span
                                className="nk-menu-text">Calendar</span></a></li>
                            <li className="nk-menu-item"><a href="apps-kanban.html"
                              className="nk-menu-link"><span className="nk-menu-text">Kanban
                                Board</span></a></li>
                          </ul>
                        </li>
                        <li className="nk-menu-item"><a href="components.html" className="nk-menu-link"><span
                          className="nk-menu-text">Components</span></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="nk-header-tools">
                    <ul className="nk-quick-nav">
                      <li className="dropdown chats-dropdown hide-mb-sm"><a href="#"
                        className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                        <div className="icon-status icon-status-na"><em
                          className="icon ni ni-comments"></em></div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head"><span className="sub-title nk-dropdown-title">Recent
                            Chats</span><a href="#">Setting</a></div>
                          <div className="dropdown-body">
                            <ul className="chat-list">
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar"><span>IH</span><span
                                  className="status dot dot-lg dot-gray"></span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Iliash Hossain</div><span
                                      className="time">Now</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">You: Please confrim if you got my
                                      last messages.</div>
                                    <div className="status delivered"><em
                                      className="icon ni ni-check-circle-fill"></em>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item is-unread"><a className="chat-link"
                                href="apps-chats.html">
                                <div className="chat-media user-avatar bg-pink">
                                  <span>AB</span><span
                                    className="status dot dot-lg dot-success"></span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Abu Bin Ishtiyak</div><span
                                      className="time">4:49 AM</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">Hi, I am Ishtiyak, can you help me
                                      with this problem ?</div>
                                    <div className="status unread"><em
                                      className="icon ni ni-bullet-fill"></em></div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar">
                                  <img src="/src/assets/images/avatar/b-sm.jpg" alt="" />
                                </div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">George Philips</div><span
                                      className="time">6 Apr</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">Have you seens the claim from
                                      Rose?</div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar user-avatar-multiple">
                                  <div className="user-avatar">
                                    <img src="/src/assets/images/avatar/c-sm.jpg" alt="" />
                                  </div>
                                  <div className="user-avatar"><span>AB</span></div>
                                </div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Softnio Group</div><span
                                      className="time">27 Mar</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">You: I just bought a new computer
                                      but i am having some problem</div>
                                    <div className="status sent"><em
                                      className="icon ni ni-check-circle"></em></div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar">
                                  <img src="/src/assets/images/avatar/a-sm.jpg" alt="" />
                                  <span className="status dot dot-lg dot-success"></span>
                                </div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Larry Hughes</div><span
                                      className="time">3 Apr</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">Hi Frank! How is you doing?</div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="chat-item"><a className="chat-link" href="apps-chats.html">
                                <div className="chat-media user-avatar bg-purple">
                                  <span>TW</span></div>
                                <div className="chat-info">
                                  <div className="chat-from">
                                    <div className="name">Tammy Wilson</div><span
                                      className="time">27 Mar</span>
                                  </div>
                                  <div className="chat-context">
                                    <div className="text">You: I just bought a new computer
                                      but i am having some problem</div>
                                    <div className="status sent"><em
                                      className="icon ni ni-check-circle"></em></div>
                                  </div>
                                </div>
                              </a></li>
                            </ul>
                          </div>
                          <div className="dropdown-foot center"><a href="apps-chats.html">View All</a>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown notification-dropdown"><a href="#"
                        className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                        <div className="icon-status icon-status-info"><em className="icon ni ni-bell"></em>
                        </div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-xl dropdown-menu-end">
                          <div className="dropdown-head"><span
                            className="sub-title nk-dropdown-title">Notifications</span><a
                              href="#">Mark All as Read</a></div>
                          <div className="dropdown-body">
                            <div className="nk-notification">
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon"><em
                                  className="icon icon-circle bg-primary-dim ni ni-share"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">Iliash shared
                                    <span>Dashlite-v2</span> with you.</div>
                                  <div className="nk-notification-time">Just now</div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon"><em
                                  className="icon icon-circle bg-info-dim ni ni-edit"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">Iliash
                                    <span>invited</span> you to edit <span>DashLite</span>
                                    folder</div>
                                  <div className="nk-notification-time">2 hrs ago</div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon"><em
                                  className="icon icon-circle bg-primary-dim ni ni-share"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">You have shared
                                    <span>project v2</span> with Parvez.</div>
                                  <div className="nk-notification-time">7 days ago</div>
                                </div>
                              </div>
                              <div className="nk-notification-item dropdown-inner">
                                <div className="nk-notification-icon"><em
                                  className="icon icon-circle bg-success-dim ni ni-spark"></em>
                                </div>
                                <div className="nk-notification-content">
                                  <div className="nk-notification-text">Your
                                    <span>Subscription</span> renew successfully.</div>
                                  <div className="nk-notification-time">2 month ago</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="dropdown-foot center"><a href="#">View All</a></div>
                        </div>
                      </li>
                      <li className="dropdown language-dropdown d-none d-sm-block me-n1"><a href="#"
                        className="dropdown-toggle nk-quick-nav-icon" data-bs-toggle="dropdown">
                        <div className="quick-icon border border-light">
                          <img className="icon" src="/src/assets/images/flags/english-sq.png" alt="" />
                        </div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <ul className="language-list">
                            <li>
                              <a href="#" className="language-item">
                                <img src="/src/assets/images/flags/english.png" alt="" className="language-flag" />
                                <span className="language-name">English</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <img src="/src/assets/images/flags/spanish.png" alt="" className="language-flag" />
                                <span className="language-name">Español</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <img src="/src/assets/images/flags/french.png" alt="" className="language-flag" />
                                <span className="language-name">Français</span>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="language-item">
                                <img src="/src/assets/images/flags/turkey.png" alt="" className="language-flag" />
                                <span className="language-name">Türkçe</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown user-dropdown"><a href="#" className="dropdown-toggle"
                        data-bs-toggle="dropdown">
                        <div className="user-toggle">
                          <div className="user-avatar sm"><em className="icon ni ni-user-alt"></em></div>
                        </div>
                      </a>
                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end">
                          <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                            <div className="user-card">
                              <div className="user-avatar"><span>AB</span></div>
                              <div className="user-info"><span className="lead-text">Abu Bin
                                Ishtiyak</span><span
                                  className="sub-text">info@softnio.com</span></div>
                            </div>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li><a href="user-profile-regular.html"><em
                                className="icon ni ni-user-alt"></em><span>View
                                  Profile</span></a></li>
                              <li><a href="user-profile-setting.html"><em
                                className="icon ni ni-setting-alt"></em><span>Account
                                  Setting</span></a></li>
                              <li><a href="user-profile-activity.html"><em
                                className="icon ni ni-activity-alt"></em><span>Login
                                  Activity</span></a></li>
                            </ul>
                          </div>
                          <div className="dropdown-inner">
                            <ul className="link-list">
                              <li><a href="#"><em className="icon ni ni-signout"></em><span>Sign
                                out</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-content nk-content-fluid">
              <div className="container-xl wide-xl">
                <div className="nk-content-body">
                  <div className="nk-block-head nk-block-head-sm">
                    <div className="nk-block-between">
                      <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">Campaign Management</h3>
                        <div className="nk-block-des text-soft">
                          <p>Welcome to Campaign Management Dashboard.</p>
                        </div>
                      </div>
                      <div className="nk-block-head-content">
                        <div className="toggle-wrap nk-block-tools-toggle"><a href="#"
                          className="btn btn-icon btn-trigger toggle-expand me-n1"
                          data-target="pageMenu"><em className="icon ni ni-more-v"></em></a>
                          <div className="toggle-expand-content" data-content="pageMenu">
                            <ul className="nk-block-tools g-3">
                              <li><a href="#"
                                className="dropdown-toggle btn btn-white btn-dim btn-outline-light"
                                data-bs-toggle="dropdown"><em
                                  className="icon ni ni-plus"></em><span><span
                                    className="d-md-none">Add</span><span
                                      className="d-none d-md-block">Add
                                    Campaign</span></span></a></li>
                              <li className="nk-block-tools-opt"><a href="#"
                                className="btn btn-primary"><em
                                  className="icon ni ni-reports"></em><span>Reports</span></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="nk-block">
                    <div className="row g-gs">
                      <div className="col-lg-3 col-sm-6">
                        <div className="card h-100 bg-primary">
                          <div className="nk-cmwg nk-cmwg1">
                            <div className="card-inner pt-3">
                              <div className="d-flex justify-content-between">
                                <div className="flex-item">
                                  <div className="text-white d-flex flex-wrap"><span
                                    className="fs-2 me-1">56.8K</span><span
                                      className="align-self-end fs-14px pb-1"><em
                                        className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                  </div>
                                  <h6 className="text-white">Running Campaign</h6>
                                </div>
                                <div className="card-tools me-n1">
                                  <div className="dropdown"><a href="#"
                                    className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark"
                                    data-bs-toggle="dropdown"><em
                                      className="icon ni ni-more-v"></em></a>
                                    <div
                                      className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#" className="active"><span>15
                                          Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                        <li><a href="#"><span>3 Months</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-ck-wrap mt-auto overflow-hidden rounded-bottom">
                              <div className="nk-cmwg1-ck"><canvas
                                className="campaign-line-chart-s1 rounded-bottom"
                                id="runningCampaign"></canvas></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="card h-100 bg-info">
                          <div className="nk-cmwg nk-cmwg1">
                            <div className="card-inner pt-3">
                              <div className="d-flex justify-content-between">
                                <div className="flex-item">
                                  <div className="text-white d-flex flex-wrap"><span
                                    className="fs-2 me-1">857.6K</span><span
                                      className="align-self-end fs-14px pb-1"><em
                                        className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                  </div>
                                  <h6 className="text-white">Total Audience</h6>
                                </div>
                                <div className="card-tools me-n1">
                                  <div className="dropdown"><a href="#"
                                    className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark"
                                    data-bs-toggle="dropdown"><em
                                      className="icon ni ni-more-v"></em></a>
                                    <div
                                      className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#" className="active"><span>15
                                          Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                        <li><a href="#"><span>3 Months</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-cmwg1-ck mt-auto"><canvas
                              className="campaign-line-chart-s1 rounded-bottom"
                              id="totalAudience"></canvas></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="card h-100 bg-warning">
                          <div className="nk-cmwg nk-cmwg1">
                            <div className="card-inner pt-3">
                              <div className="d-flex justify-content-between">
                                <div className="flex-item">
                                  <div className="text-white d-flex flex-wrap"><span
                                    className="fs-2 me-1">9.3K</span><span
                                      className="align-self-end fs-14px pb-1"><em
                                        className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                  </div>
                                  <h6 className="text-white">Avg. Rating</h6>
                                </div>
                                <div className="card-tools me-n1">
                                  <div className="dropdown"><a href="#"
                                    className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark"
                                    data-bs-toggle="dropdown"><em
                                      className="icon ni ni-more-v"></em></a>
                                    <div
                                      className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#" className="active"><span>15
                                          Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                        <li><a href="#"><span>3 Months</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-ck-wrap mt-auto overflow-hidden rounded-bottom">
                              <div className="nk-cmwg1-ck"><canvas
                                className="campaign-bar-chart-s1 rounded-bottom"
                                id="avgRating"></canvas></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6">
                        <div className="card h-100 bg-danger">
                          <div className="nk-cmwg nk-cmwg1">
                            <div className="card-inner pt-3">
                              <div className="d-flex justify-content-between">
                                <div className="flex-item">
                                  <div className="text-white d-flex flex-wrap"><span
                                    className="fs-2 me-1">175.2K</span><span
                                      className="align-self-end fs-14px pb-1"><em
                                        className="icon ni ni-arrow-long-up"></em>12.4%</span>
                                  </div>
                                  <h6 className="text-white">Subscriber</h6>
                                </div>
                                <div className="card-tools me-n1">
                                  <div className="dropdown"><a href="#"
                                    className="dropdown-toggle btn btn-icon btn-sm btn-trigger on-dark"
                                    data-bs-toggle="dropdown"><em
                                      className="icon ni ni-more-v"></em></a>
                                    <div
                                      className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                      <ul className="link-list-opt no-bdr">
                                        <li><a href="#" className="active"><span>15
                                          Days</span></a></li>
                                        <li><a href="#"><span>30 Days</span></a></li>
                                        <li><a href="#"><span>3 Months</span></a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-ck-wrap mt-auto overflow-hidden rounded-bottom">
                              <div className="nk-cmwg1-ck"><canvas
                                className="campaign-line-chart-s1 rounded-bottom"
                                id="newSubscriber"></canvas></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-8 col-lg-7">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Performance Overview</h6>
                              </div>
                              <div className="card-tools">
                                <ul className="card-tools-nav">
                                  <li><a href="#"><span>Week</span></a></li>
                                  <li className="active"><a href="#"><span>Month</span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner pt-0">
                            <ul className="d-flex justify-content-center flex-wrap gx-3 mb-2">
                              <li className="align-center"><span className="dot"
                                data-bg="#733AEA"></span><span className="ms-1">Social</span>
                              </li>
                              <li className="align-center"><span className="dot"
                                data-bg="#0FCA7A"></span><span className="ms-1">Email</span>
                              </li>
                              <li className="align-center"><span className="dot"
                                data-bg="#F2426E"></span><span className="ms-1">Courses</span>
                              </li>
                              <li className="align-center"><span className="dot"
                                data-bg="#FD9722"></span><span className="ms-1">Google
                                  Ads</span></li>
                            </ul>
                            <div className="nk-cmwg2-ck"><canvas className="campaign-line-chart-s2"
                              id="performanceOverview"></canvas></div>
                            <div className="chart-label-group ms-5">
                              <div className="chart-label">03 Jan</div>
                              <div className="chart-label d-none d-sm-block">10 Jan</div>
                              <div className="chart-label d-none d-sm-block">17 Jan</div>
                              <div className="chart-label d-none d-sm-block">24 Jan</div>
                              <div className="chart-label">31 Jan</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-lg-5">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Top Channels</h6>
                              </div>
                              <div className="card-tools"><a href="#" className="link">View All</a></div>
                            </div>
                          </div>
                          <div className="card-inner pt-0">
                            <ul className="gy-4">
                              <li
                                className="justify-between align-center border-bottom border-0 border-dashed">
                                <div className="align-center">
                                  <div className="user-avatar sq bg-transparent">
                                    <img src="/src/assets/images/icons/campaign/brand/google.png" alt="" />
                                  </div>
                                  <div className="ms-2">
                                    <div className="lead-text">Google </div>
                                    <div className="sub-text">SEO & PPC</div>
                                  </div>
                                </div>
                                <div className="align-center">
                                  <div className="sub-text me-2">70%</div>
                                  <div className="progress rounded-pill w-80px">
                                    <div className="progress-bar bg-success rounded-pill"
                                      data-progress="70"></div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="justify-between align-center border-bottom border-0 border-dashed">
                                <div className="align-center">
                                  <div className="user-avatar sq bg-transparent">
                                    <img
                                      src="/src/assets/images/icons/campaign/brand/instagram.png"
                                      alt="" /></div>
                                  <div className="ms-2">
                                    <div className="lead-text">Instagram </div>
                                    <div className="sub-text">Social Media</div>
                                  </div>
                                </div>
                                <div className="align-center">
                                  <div className="sub-text me-2">86%</div>
                                  <div className="progress rounded-pill w-80px">
                                    <div className="progress-bar bg-primary rounded-pill"
                                      data-progress="86"></div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="justify-between align-center border-bottom border-0 border-dashed">
                                <div className="align-center">
                                  <div className="user-avatar sq bg-transparent"><img
                                    src="/src/assets/images/icons/campaign/brand/linkedin.png"
                                    alt="" /></div>
                                  <div className="ms-2">
                                    <div className="lead-text">Linked In </div>
                                    <div className="sub-text">Social Media</div>
                                  </div>
                                </div>
                                <div className="align-center">
                                  <div className="sub-text me-2">75%</div>
                                  <div className="progress rounded-pill w-80px">
                                    <div className="progress-bar bg-danger rounded-pill"
                                      data-progress="75"></div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="justify-between align-center border-bottom border-0 border-dashed">
                                <div className="align-center">
                                  <div className="user-avatar sq bg-transparent"><img
                                    src="/src/assets/images/icons/campaign/brand/slack.png" alt="" />
                                  </div>
                                  <div className="ms-2">
                                    <div className="lead-text">Slack </div>
                                    <div className="sub-text">Messanger</div>
                                  </div>
                                </div>
                                <div className="align-center">
                                  <div className="sub-text me-2">64%</div>
                                  <div className="progress rounded-pill w-80px">
                                    <div className="progress-bar bg-info rounded-pill"
                                      data-progress="64"></div>
                                  </div>
                                </div>
                              </li>
                              <li className="justify-between align-center">
                                <div className="align-center">
                                  <div className="user-avatar sq bg-transparent"><img
                                    src="/src/assets/images/icons/campaign/brand/twitter.png"
                                    alt="" /></div>
                                  <div className="ms-2">
                                    <div className="lead-text">Twitter </div>
                                    <div className="sub-text">Social Media</div>
                                  </div>
                                </div>
                                <div className="align-center">
                                  <div className="sub-text me-2">54%</div>
                                  <div className="progress rounded-pill w-80px">
                                    <div className="progress-bar bg-warning rounded-pill"
                                      data-progress="54"></div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-8">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Active Campaign</h6>
                              </div>
                              <div className="card-tools"><a href="#" className="link">View All</a></div>
                            </div>
                          </div>
                          <div className="card-inner py-0 mt-n2">
                            <div className="nk-tb-list nk-tb-flush nk-tb-dashed">
                              <div className="nk-tb-item nk-tb-head">
                                <div className="nk-tb-col"><span>Subject</span></div>
                                <div className="nk-tb-col tb-col-mb"><span>Channels</span></div>
                                <div className="nk-tb-col tb-col-sm"><span>Status</span></div>
                                <div className="nk-tb-col tb-col-md"><span>Assignee</span></div>
                                <div className="nk-tb-col text-end"><span>Date Range</span></div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead">Happy Christmas
                                  <span
                                    className="dot dot-success d-sm-none ms-1"></span></span><span
                                      className="tb-sub">Created on 01 Dec 22</span></div>
                                <div className="nk-tb-col tb-col-mb">
                                  <ul className="d-flex gx-1">
                                    <li className="text-facebook"><em
                                      className="icon ni ni-facebook-f"></em></li>
                                    <li className="text-instagram"><em
                                      className="icon ni ni-instagram"></em></li>
                                    <li className="text-linkedin"><em
                                      className="icon ni ni-linkedin"></em></li>
                                    <li className="text-twitter"><em
                                      className="icon ni ni-twitter"></em></li>
                                    <li className="text-youtube"><em
                                      className="icon ni ni-youtube-fill"></em></li>
                                  </ul>
                                </div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="badge badge-dim bg-success">Live Now</div>
                                </div>
                                <div className="nk-tb-col tb-col-md">
                                  <div className="user-avatar-group">
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/e-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/f-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/g-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><span>2+</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead">Black Friday <span
                                  className="dot dot-success d-sm-none ms-1"></span></span><span
                                    className="tb-sub">Created on 01 Dec 22</span></div>
                                <div className="nk-tb-col tb-col-mb">
                                  <ul className="d-flex gx-1">
                                    <li className="text-linkedin"><em
                                      className="icon ni ni-linkedin"></em></li>
                                    <li className="text-facebook"><em
                                      className="icon ni ni-facebook-f"></em></li>
                                    <li className="text-instagram"><em
                                      className="icon ni ni-instagram"></em></li>
                                    <li className="text-youtube"><em
                                      className="icon ni ni-youtube-fill"></em></li>
                                  </ul>
                                </div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="badge badge-dim bg-success">Live Now</div>
                                </div>
                                <div className="nk-tb-col tb-col-md">
                                  <div className="user-avatar-group">
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/h-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/i-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/j-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><span>7+</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead">Tree Plantation
                                  <span
                                    className="dot dot-warning d-sm-none ms-1"></span></span><span
                                      className="tb-sub">Created on 01 Jan 23</span></div>
                                <div className="nk-tb-col tb-col-mb">
                                  <ul className="d-flex gx-1">
                                    <li className="text-twitter"><em
                                      className="icon ni ni-twitter"></em></li>
                                    <li className="text-instagram"><em
                                      className="icon ni ni-instagram"></em></li>
                                    <li className="text-linkedin"><em
                                      className="icon ni ni-linkedin"></em></li>
                                  </ul>
                                </div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="badge badge-dim bg-warning">Paused</div>
                                </div>
                                <div className="nk-tb-col tb-col-md">
                                  <div className="user-avatar-group">
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/k-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs bg-pink"><span>AE</span>
                                    </div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/e-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><span>3+</span></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span>
                                </div>
                              </div>
                              <div className="nk-tb-item">
                                <div className="nk-tb-col"><span className="tb-lead">Getaway Trailer
                                  <span
                                    className="dot dot-success d-sm-none ms-1"></span></span><span
                                      className="tb-sub">Created on 12 Dec 22</span></div>
                                <div className="nk-tb-col tb-col-mb">
                                  <ul className="d-flex gx-1">
                                    <li className="text-linkedin"><em
                                      className="icon ni ni-linkedin"></em></li>
                                    <li className="text-twitter"><em
                                      className="icon ni ni-twitter"></em></li>
                                    <li className="text-facebook"><em
                                      className="icon ni ni-facebook-f"></em></li>
                                    <li className="text-youtube"><em
                                      className="icon ni ni-youtube-fill"></em></li>
                                  </ul>
                                </div>
                                <div className="nk-tb-col tb-col-sm">
                                  <div className="badge badge-dim bg-success">Live Now</div>
                                </div>
                                <div className="nk-tb-col tb-col-md">
                                  <div className="user-avatar-group">
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/i-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/k-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/e-sm.jpg" alt="" /></div>
                                    <div className="user-avatar xs"><img
                                      src="/src/assets/images/avatar/g-sm.jpg" alt="" /></div>
                                  </div>
                                </div>
                                <div className="nk-tb-col text-end"><span>01 Dec - 07 Dec</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-md-6">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Key Statistics</h6>
                              </div>
                              <div className="card-tools me-n1 mt-n1">
                                <div className="dropdown"><a href="#"
                                  className="dropdown-toggle btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"><em
                                    className="icon ni ni-more-h"></em></a>
                                  <div
                                    className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li><a href="#" className="active"><span>15
                                        Days</span></a></li>
                                      <li><a href="#"><span>30 Days</span></a></li>
                                      <li><a href="#"><span>3 Months</span></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner pt-0">
                            <ul className="gy-4">
                              <li className="border-bottom border-0 border-dashed">
                                <div className="mb-1"><span
                                  className="fs-2 lh-1 mb-1 text-head">85.6K</span>
                                  <div className="sub-text">Average Like</div>
                                </div>
                                <div className="align-center">
                                  <div className="small text-primary me-2">54%</div>
                                  <div
                                    className="progress progress-md rounded-pill w-100 bg-primary-dim">
                                    <div className="progress-bar bg-primary rounded-pill"
                                      data-progress="54"></div>
                                  </div>
                                  <div className="dropdown ms-3"><a
                                    className="dropdown-toggle dropdown-indicator sub-text"
                                    href="#" type="button" data-bs-toggle="dropdown"
                                    data-bs-offset="0, 10">Dec 22 - Feb 22</a>
                                    <div className="dropdown-menu dropdown-menu-end text-right">
                                      <ul className="link-list-opt">
                                        <li><a href="#"><span>Dec 22 - Feb 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Oct 22 - Dec 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Aug 22 - Oct 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Jun 22 - Aug 22</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="border-bottom border-0 border-dashed">
                                <div className="mb-1"><span
                                  className="fs-2 lh-1 mb-1 text-head">42.7K</span>
                                  <div className="sub-text">Average Comments</div>
                                </div>
                                <div className="align-center">
                                  <div className="small text-danger me-2">84%</div>
                                  <div
                                    className="progress progress-md rounded-pill w-100 bg-danger-dim">
                                    <div className="progress-bar bg-danger rounded-pill"
                                      data-progress="84"></div>
                                  </div>
                                  <div className="dropdown ms-3"><a
                                    className="dropdown-toggle dropdown-indicator sub-text"
                                    href="#" type="button" data-bs-toggle="dropdown"
                                    data-bs-offset="0, 10">Dec 22 - Feb 22</a>
                                    <div className="dropdown-menu dropdown-menu-end text-right">
                                      <ul className="link-list-opt">
                                        <li><a href="#"><span>Dec 22 - Feb 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Oct 22 - Dec 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Aug 22 - Oct 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Jun 22 - Aug 22</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="mb-1"><span
                                  className="fs-2 lh-1 mb-1 text-head">25.4K</span>
                                  <div className="sub-text">Average Shares</div>
                                </div>
                                <div className="align-center">
                                  <div className="small text-success me-2">62%</div>
                                  <div
                                    className="progress progress-md rounded-pill w-100 bg-success-dim">
                                    <div className="progress-bar bg-success rounded-pill"
                                      data-progress="62"></div>
                                  </div>
                                  <div className="dropdown ms-3"><a
                                    className="dropdown-toggle dropdown-indicator sub-text"
                                    href="#" type="button" data-bs-toggle="dropdown"
                                    data-bs-offset="0, 10">Dec 22 - Feb 22</a>
                                    <div className="dropdown-menu dropdown-menu-end text-right">
                                      <ul className="link-list-opt">
                                        <li><a href="#"><span>Dec 22 - Feb 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Oct 22 - Dec 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Aug 22 - Oct 22</span></a>
                                        </li>
                                        <li><a href="#"><span>Jun 22 - Aug 22</span></a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-md-6">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Instagram Campaign</h6>
                              </div>
                              <div className="card-tools">
                                <ul className="d-flex gx-2">
                                  <li><button
                                    className="btn btn-icon btn-sm btn-outline-light rounded-pill"><em
                                      className="icon ni ni-chevron-left"></em></button>
                                  </li>
                                  <li><button
                                    className="btn btn-icon btn-sm btn-outline-primary rounded-pill"><em
                                      className="icon ni ni-chevron-right"></em></button>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner pt-0">
                            <div className="rounded px-2 py-4 bg-primary">
                              <div className="d-flex">
                                <div className="w-50 px-4"><span
                                  className="fs-2 lh-1 mb-1 text-white">24.6K</span>
                                  <div className="fs-14px text-white text-opacity-75">New
                                    Followers</div>
                                </div>
                                <div className="border-start opacity-50"></div>
                                <div className="w-50 px-4"><span
                                  className="fs-2 lh-1 mb-1 text-white">120.0K</span>
                                  <div className="fs-14px text-white text-opacity-75">Followers
                                    Goal</div>
                                </div>
                              </div>
                            </div>
                            <div className="nk-cmwg3-ck mt-3"><canvas className="campaign-line-chart-s3"
                              id="instagramCampaign"></canvas></div>
                            <div className="chart-label-group ms-5 mt-0">
                              <div className="chart-label">03 Jan</div>
                              <div className="chart-label d-none d-sm-block">10 Jan</div>
                              <div className="chart-label d-none d-sm-block">17 Jan</div>
                              <div className="chart-label d-none d-sm-block">24 Jan</div>
                              <div className="chart-label">31 Jan</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-md-6">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Clicks by location</h6>
                              </div>
                              <div className="card-tools me-n1 mt-n1">
                                <div className="dropdown"><a href="#"
                                  className="dropdown-toggle btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"><em
                                    className="icon ni ni-more-h"></em></a>
                                  <div
                                    className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li><a href="#" className="active"><span>15
                                        Days</span></a></li>
                                      <li><a href="#"><span>30 Days</span></a></li>
                                      <li><a href="#"><span>3 Months</span></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner pt-0">
                            <ul className="my-n2">
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">United States</div>
                                <div className="sub-text">14,356</div>
                              </li>
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">Ireland</div>
                                <div className="sub-text">11,203</div>
                              </li>
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">United Kingdom</div>
                                <div className="sub-text">10,653</div>
                              </li>
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">Canada</div>
                                <div className="sub-text">7,215</div>
                              </li>
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">Australia</div>
                                <div className="sub-text">6,653</div>
                              </li>
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">Japan</div>
                                <div className="sub-text">3,945</div>
                              </li>
                              <li
                                className="align-center justify-between py-1 gx-1 border-bottom border-0 border-dashed">
                                <div className="lead-text">China</div>
                                <div className="sub-text">2,945</div>
                              </li>
                              <li className="align-center justify-between py-1 gx-1">
                                <div className="lead-text">France</div>
                                <div className="sub-text">954</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-4 col-md-6">
                        <div className="card card-full">
                          <div className="card-inner">
                            <div className="card-title-group">
                              <div className="card-title">
                                <h6 className="title">Web conv. rate</h6>
                              </div>
                              <div className="card-tools me-n1 mt-n1">
                                <div className="dropdown"><a href="#"
                                  className="dropdown-toggle btn btn-icon btn-trigger"
                                  data-bs-toggle="dropdown"><em
                                    className="icon ni ni-more-h"></em></a>
                                  <div
                                    className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                                    <ul className="link-list-opt no-bdr">
                                      <li><a href="#" className="active"><span>15
                                        Days</span></a></li>
                                      <li><a href="#"><span>30 Days</span></a></li>
                                      <li><a href="#"><span>3 Months</span></a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner pt-0">
                            <div className=""><span className="fs-2 lh-1 mb-1 text-head">3.86%</span>
                              <div className="fs-14px">This month</div>
                            </div>
                            <div className="nk-cmwg4-ck mt-4"><canvas className="campaign-line-chart-s3"
                              id="webConvRate"></canvas></div>
                            <div className="chart-label-group ms-5 mt-0">
                              <div className="chart-label">Jan</div>
                              <div className="chart-label d-none d-sm-block">Feb</div>
                              <div className="chart-label d-none d-sm-block">Mar</div>
                              <div className="chart-label d-none d-sm-block">Apr</div>
                              <div className="chart-label d-none d-sm-block">May</div>
                              <div className="chart-label">Jun</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-footer">
              <div className="container-xl wide-xl">
                <div className="nk-footer-wrap">
                  <div className="nk-footer-copyright"> &copy; 2024 DashLite. Template by <a
                    href="https://softnio.com/" target="_blank">Softnio</a></div>
                  <div className="nk-footer-links">
                    <ul className="nav nav-sm">
                      <li className="nav-item dropup">
                        <a href="" className="dropdown-toggle dropdown-indicator has-indicator nav-link text-base"
                          data-bs-toggle="dropdown" data-offset="0,10"><span>English</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
                          <ul className="language-list">
                            <li><a href="#" className="language-item"><span
                              className="language-name">English</span></a></li>
                            <li><a href="#" className="language-item"><span
                              className="language-name">Español</span></a></li>
                            <li><a href="#" className="language-item"><span
                              className="language-name">Français</span></a></li>
                            <li><a href="#" className="language-item"><span
                              className="language-name">Türkçe</span></a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="nav-item"><a data-bs-toggle="modal" href="#region" className="nav-link"><em
                        className="icon ni ni-globe"></em><span className="ms-1">Select
                          Region</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" tabIndex={-1} role="dialog" id="region">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content"><a href="#" className="close" data-bs-dismiss="modal"><em
            className="icon ni ni-cross-sm"></em></a>
            <div className="modal-body modal-body-md">
              <h5 className="title mb-4">Select Your Countryy</h5>
              <div className="nk-country-region">
                <ul className="country-list text-center gy-2">
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/arg.png" alt=""
                    className="country-flag" /><span className="country-name">Argentina</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/aus.png" alt=""
                    className="country-flag" /><span className="country-name">Australia</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/bangladesh.png" alt=""
                    className="country-flag" /><span className="country-name">Bangladesh</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/canada.png" alt=""
                    className="country-flag" /><span className="country-name">Canada
                      <small>(English)</small></span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/china.png" alt=""
                    className="country-flag" /><span className="country-name">Centrafricaine</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/china.png" alt=""
                    className="country-flag" /><span className="country-name">China</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/french.png" alt=""
                    className="country-flag" /><span className="country-name">France</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/germany.png" alt=""
                    className="country-flag" /><span className="country-name">Germany</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/iran.png" alt=""
                    className="country-flag" /><span className="country-name">Iran</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/italy.png" alt=""
                    className="country-flag" /><span className="country-name">Italy</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/mexico.png" alt=""
                    className="country-flag" /><span className="country-name">México</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/philipine.png" alt=""
                    className="country-flag" /><span className="country-name">Philippines</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/portugal.png" alt=""
                    className="country-flag" /><span className="country-name">Portugal</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/s-africa.png" alt=""
                    className="country-flag" /><span className="country-name">South Africa</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/spanish.png" alt=""
                    className="country-flag" /><span className="country-name">Spain</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/switzerland.png" alt=""
                    className="country-flag" /><span className="country-name">Switzerland</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/uk.png" alt=""
                    className="country-flag" /><span className="country-name">United Kingdom</span></a></li>
                  <li><a href="#" className="country-item"><img src="/src/assets/images/flags/english.png" alt=""
                    className="country-flag" /><span className="country-name">United State</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="nk-sticky-toolbar">
        <li className="demo-layout"><a className="toggle tipinfo" data-target="demoML" href="#" title="Main Demo Preview"><em
          className="icon ni ni-dashlite"></em></a></li>
        <li className="demo-thumb"><a className="toggle tipinfo" data-target="demoUC" href="#" title="Use Case Concept"><em
          className="icon ni ni-menu-squared"></em></a></li>
        <li className="demo-settings"><a className="toggle tipinfo" data-target="settingPanel" href="#"
          title="Demo Settings"><em className="icon ni ni-setting-alt"></em></a></li>
        <li className="demo-purchase"><a className="tipinfo" target="_blank" href="https://1.envato.market/e0y3g"
          title="Purchase"><em className="icon ni ni-cart"></em></a></li>
      </ul>
      <div className="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right" data-content="demoML"
        data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div className="nk-demo-head">
          <h6 className="mb-0">Switch Demo Layout</h6><a
            className="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2" data-target="demoML" href="#"><em
              className="icon ni ni-cross"></em></a>
        </div>
        <div className="nk-demo-list" data-simplebar>
          <div className="nk-demo-item"><a href="/src/assets/demo1/index.html">
            <div className="nk-demo-image bg-blue"><img className="bg-purple" src="/src/assets/images/landing/layout-1d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-1d2x.jpg 2x" alt="Demo Layout 1"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 1</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo2/index.html">
            <div className="nk-demo-image bg-purple"><img src="/src/assets/images/landing/layout-2d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-2d2x.jpg 2x" alt="Demo Layout 2"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 2</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo3/index.html">
            <div className="nk-demo-image bg-success"><img src="/src/assets/images/landing/layout-3d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-3d2x.jpg 2x" alt="Demo Layout 3"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 3</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo4/index.html">
            <div className="nk-demo-image bg-indigo"><img src="/src/assets/images/landing/layout-4d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-4d2x.jpg 2x" alt="Demo Layout 4"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 4</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo5/index.html">
            <div className="nk-demo-image bg-orange"><img src="/src/assets/images/landing/layout-5d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-5d2x.jpg 2x" alt="Demo Layout 5"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 5</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo6/index.html">
            <div className="nk-demo-image bg-purple"><img src="/src/assets/images/landing/layout-6d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-6d2x.jpg 2x" alt="Demo Layout 6"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 6</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo7/index.html">
            <div className="nk-demo-image bg-teal"><img src="/src/assets/images/landing/layout-7d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-7d2x.jpg 2x" alt="Demo Layout 7"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 7</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo8/index.html">
            <div className="nk-demo-image bg-azure"><img src="/src/assets/images/landing/layout-8d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-8d2x.jpg 2x" alt="Demo Layout 8"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 8</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="index.html">
            <div className="nk-demo-image bg-pink"><img src="/src/assets/images/landing/layout-9d.jpg"
              srcSet="https://dashlite.net/images/landing/layout-9d2x.jpg 2x" alt="Demo Layout 9"/></div>
            <span className="nk-demo-title"><strong>Demo Layout 9</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/landing/index.html">
            <div className="nk-demo-image bg-red"><img src="/src/assets/images/landing/main-landing.jpg"
              srcSet="https://dashlite.net/images/landing/main-landing2x.jpg 2x" alt="Landing Page"/></div>
            <span className="nk-demo-title"><strong>Landing Page</strong> <span
              className="badge badge-danger ml-1">Free</span></span>
          </a></div>
        </div>
      </div>
      <div className="nk-demo-panel nk-demo-panel-2x toggle-slide toggle-slide-right" data-content="demoUC"
        data-toggle-overlay="true" data-toggle-body="true" data-toggle-screen="any">
        <div className="nk-demo-head">
          <h6 className="mb-0">Use Case Concept</h6><a className="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
            data-target="demoUC" href="#"><em className="icon ni ni-cross"></em></a>
        </div>
        <div className="nk-demo-list" data-simplebar>
          <div className="nk-demo-item"><a href="copywriter/index.html">
            <div className="nk-demo-image bg-indigo"><img src="/src/assets/images/landing/demo-ai-copywriter.jpg"
              srcSet="https://dashlite.net/images/landing/demo-ai-copywriter2x.jpg 2x"
              alt="ai-copywriter"/></div><span className="nk-demo-title"><em
                className="text-primary">Demo9</em><br/><strong>Ai Copywriter Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo7/pharmacy/index.html">
            <div className="nk-demo-image bg-warning"><img src="/src/assets/images/landing/demo-pharmacy.jpg"
              srcSet="https://dashlite.net/images/landing/demo-pharmacy2x.jpg 2x" alt="pharmacy"/></div>
            <span className="nk-demo-title"><em className="text-primary">Demo7</em><br/><strong>Pharmacy Management
              Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo5/loan/index.html">
            <div className="nk-demo-image bg-purple"><img src="/src/assets/images/landing/demo-loan.jpg"
              srcSet="https://dashlite.net/images/landing/demo-loan2x.jpg 2x" alt="loan"/></div><span
                className="nk-demo-title"><em className="text-primary">Demo5</em><br/><strong>Loan Management
                  Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo2/ecommerce/index.html">
            <div className="nk-demo-image bg-dark"><img src="/src/assets/images/landing/demo-ecommerce.jpg"
              srcSet="https://dashlite.net/images/landing/demo-ecommerce2x.jpg 2x" alt="Ecommerce"/></div>
            <span className="nk-demo-title"><em className="text-primary">Demo2</em><br/><strong>E-Commerce
              Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo2/lms/index.html">
            <div className="nk-demo-image bg-danger"><img src="/src/assets/images/landing/demo-lms.jpg"
              srcSet="https://dashlite.net/images/landing/demo-lms2x.jpg 2x" alt="LMS"/></div><span
                className="nk-demo-title"><em className="text-primary">Demo2</em><br/><strong>LMS / Learning Management
                  System</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo1/crm/index.html">
            <div className="nk-demo-image bg-info"><img src="/src/assets/images/landing/demo-crm.jpg"
              srcSet="https://dashlite.net/images/landing/demo-crm2x.jpg 2x"
              alt="CRM / Customer Relationship"/></div><span className="nk-demo-title"><em
                className="text-primary">Demo1</em><br/><strong>CRM / Customer Relationship
                  Management</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo7/hospital/index.html">
            <div className="nk-demo-image bg-indigo"><img src="/src/assets/images/landing/demo-hospital.jpg"
              srcSet="https://dashlite.net/images/landing/demo-hospital2x.jpg 2x"
              alt="Hospital Managemen"/></div><span className="nk-demo-title"><em
                className="text-primary">Demo7</em><br/><strong>Hospital Management</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo1/hotel/index.html">
            <div className="nk-demo-image bg-pink"><img src="/src/assets/images/landing/demo-hotel.jpg"
              srcSet="https://dashlite.net/images/landing/demo-hotel2x.jpg 2x" alt="Hotel Managemen"/>
            </div><span className="nk-demo-title"><em className="text-primary">Demo1</em><br/><strong>Hotel
              Management</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo3/cms/index.html">
            <div className="nk-demo-image bg-dark"><img src="/src/assets/images/landing/demo-cms.jpg"
              srcSet="https://dashlite.net/images/landing/demo-cms2x.jpg 2x" alt="cms"/></div><span
                className="nk-demo-title"><em className="text-primary">Demo3</em><br/><strong>CMS Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo5/crypto/index.html">
            <div className="nk-demo-image bg-warning"><img src="/src/assets/images/landing/demo-buysell.jpg"
              srcSet="https://dashlite.net/images/landing/demo-buysell2x.jpg 2x"
              alt="Crypto BuySell / Wallet"/></div><span className="nk-demo-title"><em
                className="text-primary">Demo5</em><br/><strong>Crypto BuySell Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo6/invest/index.html">
            <div className="nk-demo-image bg-indigo"><img src="/src/assets/images/landing/demo-invest.jpg"
              srcSet="https://dashlite.net/images/landing/demo-invest2x.jpg 2x" alt="HYIP / Investment"/>
            </div><span className="nk-demo-title"><em className="text-primary">Demo6</em><br/><strong>HYIP / Investment
              Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo3/apps/file-manager.html">
            <div className="nk-demo-image bg-purple"><img src="/src/assets/images/landing/demo-file-manager.jpg"
              srcSet="https://dashlite.net/images/landing/demo-file-manager2x.jpg 2x" alt="File Manager"/>
            </div><span className="nk-demo-title"><em className="text-primary">Demo3</em><br/><strong>Apps - File
              Manager</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo4/subscription/index.html">
            <div className="nk-demo-image bg-primary"><img src="/src/assets/images/landing/demo-subscription.jpg"
              srcSet="https://dashlite.net/images/landing/demo-subscription2x.jpg 2x"
              alt="SAAS / Subscription"/></div><span className="nk-demo-title"><em
                className="text-primary">Demo4</em><br/><strong>SAAS / Subscription Panel</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/covid/index.html">
            <div className="nk-demo-image bg-danger"><img src="/src/assets/images/landing/demo-covid19.jpg"
              srcSet="https://dashlite.net/images/landing/demo-covid192x.jpg 2x" alt="Covid Situation"/>
            </div><span className="nk-demo-title"><em className="text-primary">Covid</em><br/><strong>Coronavirus
              Situation</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo3/apps/messages.html">
            <div className="nk-demo-image bg-success"><img src="/src/assets/images/landing/demo-messages.jpg"
              srcSet="https://dashlite.net/images/landing/demo-messages2x.jpg 2x" alt="Messages"/></div>
            <span className="nk-demo-title"><em className="text-primary">Demo3</em><br/><strong>Apps -
              Messages</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo3/apps/mailbox.html">
            <div className="nk-demo-image bg-purple"><img src="/src/assets/images/landing/demo-inbox.jpg"
              srcSet="https://dashlite.net/images/landing/demo-inbox2x.jpg 2x" alt="Inbox" /></div><span
                className="nk-demo-title"><em className="text-primary">Demo3</em><br /><strong>Apps -
                  Mailbox</strong></span>
          </a></div>
          <div className="nk-demo-item"><a href="/src/assets/demo3/apps/chats.html">
            <div className="nk-demo-image bg-purple"><img src="/src/assets/images/landing/demo-chats.jpg"
              srcSet="https://dashlite.net/images/landing/demo-chats2x.jpg 2x" alt="Chats / Messenger" />
            </div><span className="nk-demo-title"><em className="text-primary">Demo3</em><br/><strong>Apps -
              Chats</strong></span>
          </a></div>
        </div>
      </div>
      <div className="nk-demo-panel toggle-slide toggle-slide-right" data-content="settingPanel" data-toggle-overlay="true"
        data-toggle-body="true" data-toggle-screen="any">
        <div className="nk-demo-head">
          <h6 className="mb-0">Preview Settings</h6><a className="nk-demo-close toggle btn btn-icon btn-trigger revarse mr-n2"
            data-target="settingPanel" href="#"><em className="icon ni ni-cross"></em></a>
        </div>
        <div className="nk-opt-panel" data-simplebar>
          <div className="nk-opt-set">
            <div className="nk-opt-set-title">Direction Change</div>
            <div className="nk-opt-list col-2x">
              <div className="nk-opt-item only-text active" data-key="dir" data-update="ltr"><span
                className="nk-opt-item-bg"><span className="nk-opt-item-name">LTR Mode</span></span></div>
              <div className="nk-opt-item only-text" data-key="dir" data-update="rtl"><span
                className="nk-opt-item-bg"><span className="nk-opt-item-name">RTL Mode</span></span></div>
            </div>
          </div>
          <div className="nk-opt-set">
            <div className="nk-opt-set-title">Main UI Style</div>
            <div className="nk-opt-list col-2x">
              <div className="nk-opt-item only-text active" data-key="style" data-update="ui-rounder"><span
                className="nk-opt-item-bg"><span className="nk-opt-item-name">Default</span></span></div>
              <div className="nk-opt-item only-text" data-key="style" data-update="ui-bordered"><span
                className="nk-opt-item-bg"><span className="nk-opt-item-name">Bordered</span></span></div>
            </div>
          </div>
          <div className="nk-opt-set nk-opt-set-aside">
            <div className="nk-opt-set-title">Sidebar Style</div>
            <div className="nk-opt-list col-4x">
              <div className="nk-opt-item" data-key="aside" data-update="is-light"><span
                className="nk-opt-item-bg is-light"><span className="bg-lighter"></span></span><span
                  className="nk-opt-item-name">White</span></div>
              <div className="nk-opt-item active" data-key="aside" data-update="is-dark"><span
                className="nk-opt-item-bg"><span className="bg-dark"></span></span><span
                  className="nk-opt-item-name">Dark</span></div>
              <div className="nk-opt-item" data-key="aside" data-update="is-theme"><span className="nk-opt-item-bg"><span
                className="bg-theme"></span></span><span className="nk-opt-item-name">Theme</span></div>
            </div>
          </div>
          <div className="nk-opt-set nk-opt-set-skin">
            <div className="nk-opt-set-title">Primary Skin</div>
            <div className="nk-opt-list">
              <div className="nk-opt-item active" data-key="skin" data-update="default"><span
                className="nk-opt-item-bg"><span className="skin-default"></span></span><span
                  className="nk-opt-item-name">Default</span></div>
              <div className="nk-opt-item" data-key="skin" data-update="bluelite"><span className="nk-opt-item-bg"><span
                className="skin-bluelite"></span></span><span className="nk-opt-item-name">Blue Light</span>
              </div>
              <div className="nk-opt-item" data-key="skin" data-update="egyptian"><span className="nk-opt-item-bg"><span
                className="skin-egyptian"></span></span><span className="nk-opt-item-name">Egyptian</span></div>
              <div className="nk-opt-item" data-key="skin" data-update="purple"><span className="nk-opt-item-bg"><span
                className="skin-purple"></span></span><span className="nk-opt-item-name">Purple</span></div>
              <div className="nk-opt-item" data-key="skin" data-update="green"><span className="nk-opt-item-bg"><span
                className="skin-green"></span></span><span className="nk-opt-item-name">Green</span></div>
              <div className="nk-opt-item" data-key="skin" data-update="red"><span className="nk-opt-item-bg"><span
                className="skin-red"></span></span><span className="nk-opt-item-name">Red</span></div>
            </div>
          </div>
          <div className="nk-opt-set">
            <div className="nk-opt-set-title">Skin Mode</div>
            <div className="nk-opt-list col-2x">
              <div className="nk-opt-item active" data-key="mode" data-update="light-mode"><span
                className="nk-opt-item-bg is-light"><span className="theme-light"></span></span><span
                  className="nk-opt-item-name">Light Skin</span></div>
              <div className="nk-opt-item" data-key="mode" data-update="dark-mode"><span className="nk-opt-item-bg"><span
                className="theme-dark"></span></span><span className="nk-opt-item-name">Dark Skin</span></div>
            </div>
          </div>
          <div className="nk-opt-reset"><a href="#" className="reset-opt-setting">Reset Setting</a></div>
        </div>
      </div>
      <div className="pmo-lv pmo-dark"><a className="pmo-close" href="#"><em className="ni ni-cross"></em></a><a className="pmo-wrap"
        target="_blank" href="https://softnio.com/get-early-access/">
        <div className="pmo-text text-white">Looking for functional script for Investment Platform? Check out <em
          className="ni ni-arrow-long-right"></em></div>
      </a></div><a className="pmo-st pmo-dark" target="_blank" href="https://softnio.com/get-early-access/">
        <div className="pmo-st-img"><img src="/src/assets/images/landing/promo-investorm.png" alt="Investorm" /></div>
        <div className="pmo-st-text">Looking for Advanced <br /> Investment Platform?</div>
      </a>
    </>
  )
}

export default App
