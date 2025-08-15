import React from 'react'

function Persons() {
  return (
    <div className="nk-content nk-content-fluid">
                    <div className="container-xl wide-xl">
                        <div className="nk-content-body">
                            <div className="nk-block-head nk-block-head-sm">
                                <div className="nk-block-between">
                                    <div className="nk-block-head-content">
                                        <h3 className="nk-block-title page-title">Customers List</h3>
                                        <div className="nk-block-des text-soft">
                                            <p>You have total 1,261 users.</p>
                                        </div>
                                    </div>
                                    <div className="nk-block-head-content">
                                        <div className="toggle-wrap nk-block-tools-toggle"><a href="#"
                                                className="btn btn-icon btn-trigger toggle-expand me-n1"
                                                data-target="pageMenu"><em className="icon ni ni-menu-alt-r"></em></a>
                                            <div className="toggle-expand-content" data-content="pageMenu">
                                                <ul className="nk-block-tools g-3">
                                                    <li><a href="#" className="btn btn-white btn-outline-light"><em
                                                                className="icon ni ni-download-cloud"></em><span>Export</span></a>
                                                    </li>
                                                    <li className="nk-block-tools-opt">
                                                        <div className="drodown"><a href="#"
                                                                className="dropdown-toggle btn btn-icon btn-primary"
                                                                data-bs-toggle="dropdown"><em
                                                                    className="icon ni ni-plus"></em></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <ul className="link-list-opt no-bdr">
                                                                    <li><a href="#"><span>Add Customer</span></a></li>
                                                                    <li><a href="#"><span>Import Customer</span></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-block">
                                <div className="card card-stretch">
                                    <div className="card-inner-group">
                                        <div className="card-inner position-relative card-tools-toggle">
                                            <div className="card-title-group">
                                                <div className="card-tools">
                                                    <div className="form-inline flex-nowrap gx-3">
                                                        <div className="form-wrap w-150px"><select
                                                                className="form-select js-select2" data-search="off"
                                                                data-placeholder="Bulk Action">
                                                                <option value="">Bulk Action</option>
                                                                <option value="email">Send Email</option>
                                                                <option value="suspend">Suspend</option>
                                                                <option value="delete">Delete</option>
                                                            </select></div>
                                                        <div className="btn-wrap"><span className="d-none d-md-block"><button
                                                                    className="btn btn-dim btn-outline-light disabled">Apply</button></span><span
                                                                className="d-md-none"><button
                                                                    className="btn btn-dim btn-outline-light btn-icon disabled"><em
                                                                        className="icon ni ni-arrow-right"></em></button></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-tools me-n1">
                                                    <ul className="btn-toolbar gx-1">
                                                        <li><a href="#" className="btn btn-icon search-toggle toggle-search"
                                                                data-target="search"><em
                                                                    className="icon ni ni-search"></em></a></li>
                                                        <li className="btn-toolbar-sep"></li>
                                                        <li>
                                                            <div className="toggle-wrap"><a href="#"
                                                                    className="btn btn-icon btn-trigger toggle"
                                                                    data-target="cardTools"><em
                                                                        className="icon ni ni-menu-right"></em></a>
                                                                <div className="toggle-content" data-content="cardTools">
                                                                    <ul className="btn-toolbar gx-1">
                                                                        <li className="toggle-close"><a href="#"
                                                                                className="btn btn-icon btn-trigger toggle"
                                                                                data-target="cardTools"><em
                                                                                    className="icon ni ni-arrow-left"></em></a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="dropdown"><a href="#"
                                                                                    className="btn btn-trigger btn-icon dropdown-toggle"
                                                                                    data-bs-toggle="dropdown">
                                                                                    <div className="dot dot-primary"></div>
                                                                                    <em
                                                                                        className="icon ni ni-filter-alt"></em>
                                                                                </a>
                                                                                <div
                                                                                    className="filter-wg dropdown-menu dropdown-menu-xl dropdown-menu-end">
                                                                                    <div className="dropdown-head"><span
                                                                                            className="sub-title dropdown-title">Filter
                                                                                            Customers</span></div>
                                                                                    <div
                                                                                        className="dropdown-body dropdown-body-rg">
                                                                                        <div className="row gx-6 gy-3">
                                                                                            <div className="col-6">
                                                                                                <div
                                                                                                    className="custom-control custom-control-sm custom-checkbox">
                                                                                                    <input
                                                                                                        type="checkbox"
                                                                                                        className="custom-control-input"
                                                                                                        id="hasBalance" /><label
                                                                                                        className="custom-control-label"
                                                                                                        htmlFor="hasBalance" >
                                                                                                        Have
                                                                                                        Balance</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div
                                                                                                    className="custom-control custom-control-sm custom-checkbox">
                                                                                                    <input
                                                                                                        type="checkbox"
                                                                                                        className="custom-control-input"
                                                                                                        id="hasKYC" /><label
                                                                                                        className="custom-control-label"
                                                                                                        htmlFor="hasKYC">
                                                                                                        KYC
                                                                                                        Verified</label>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div className="form-group">
                                                                                                    <label
                                                                                                        className="overline-title overline-title-alt">Card
                                                                                                        Type</label><select
                                                                                                        className="form-select js-select2">
                                                                                                        <option
                                                                                                            value="any">
                                                                                                            Any Card
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Visa">
                                                                                                            Visa
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="Mastercard">
                                                                                                            Mastercard
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="AmericanExpress">
                                                                                                            American
                                                                                                            Express
                                                                                                        </option>
                                                                                                    </select></div>
                                                                                            </div>
                                                                                            <div className="col-6">
                                                                                                <div className="form-group">
                                                                                                    <label
                                                                                                        className="overline-title overline-title-alt">Status</label><select
                                                                                                        className="form-select js-select2">
                                                                                                        <option
                                                                                                            value="any">
                                                                                                            Any Status
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="new">
                                                                                                            New</option>
                                                                                                        <option
                                                                                                            value="active">
                                                                                                            Active
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="suspend">
                                                                                                            Suspend
                                                                                                        </option>
                                                                                                        <option
                                                                                                            value="deleted">
                                                                                                            Deleted
                                                                                                        </option>
                                                                                                    </select></div>
                                                                                            </div>
                                                                                            <div className="col-12">
                                                                                                <div className="form-group">
                                                                                                    <button
                                                                                                        type="button"
                                                                                                        className="btn btn-secondary">Filter</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="dropdown-foot between">
                                                                                        <a className="clickable"
                                                                                            href="#">Reset Filter</a><a
                                                                                            href="#">Save Filter</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="dropdown"><a href="#"
                                                                                    className="btn btn-trigger btn-icon dropdown-toggle"
                                                                                    data-bs-toggle="dropdown"><em
                                                                                        className="icon ni ni-setting"></em></a>
                                                                                <div
                                                                                    className="dropdown-menu dropdown-menu-xs dropdown-menu-end">
                                                                                    <ul className="link-check">
                                                                                        <li><span>Show</span></li>
                                                                                        <li className="active"><a
                                                                                                href="#">10</a></li>
                                                                                        <li><a href="#">20</a></li>
                                                                                        <li><a href="#">50</a></li>
                                                                                    </ul>
                                                                                    <ul className="link-check">
                                                                                        <li><span>Order</span></li>
                                                                                        <li className="active"><a
                                                                                                href="#">DESC</a></li>
                                                                                        <li><a href="#">ASC</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="card-search search-wrap" data-search="search">
                                                <div className="card-body">
                                                    <div className="search-content"><a href="#"
                                                            className="search-back btn btn-icon toggle-search"
                                                            data-target="search"><em
                                                                className="icon ni ni-arrow-left"></em></a><input
                                                            type="text"
                                                            className="form-control border-transparent form-focus-none"
                                                            placeholder="Search by name" /><button
                                                            className="search-submit btn btn-icon"><em
                                                                className="icon ni ni-search"></em></button></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-inner p-0">
                                            <div className="nk-tb-list nk-tb-ulist">
                                                <div className="nk-tb-item nk-tb-head">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid" /><label className="custom-control-label"
                                                                htmlFor="cid"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><span className="sub-text">Customer</span></div>
                                                    <div className="nk-tb-col tb-col-sm"><span className="sub-text">Email</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">Phone</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Company</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">Payment
                                                            Methods</span></div>
                                                    <div className="nk-tb-col tb-col-xxl"><span
                                                            className="sub-text">Joined</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Status</span></div>
                                                    <div className="nk-tb-col text-end"><span
                                                            className="sub-text">Actions</span></div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid1" /><label className="custom-control-label"
                                                                htmlFor="cid1"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-primary"><span>BG</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Bobby
                                                                        Gilbert <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">bobby@softnio.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+342
                                                            675-6578</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Softnio</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-blue icon ni ni-visa"></em><span
                                                                className="sub-text">**** 1955</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">12 Dec
                                                            2021, 12:12 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid2" /><label className="custom-control-label"
                                                                htmlFor="cid2"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-danger"><span>OP</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Olivia
                                                                        Poulsen <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">olivia@apple.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+782
                                                            332-8328</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">Apple</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-danger icon ni ni-mc"></em><span
                                                                className="sub-text">**** 7473</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">08 Dec
                                                            2021, 04:03 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid3" /><label className="custom-control-label"
                                                                htmlFor="cid3"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-primary"><img
                                                                        src="images/avatar/b-sm.jpg" alt="" /></div>
                                                                <div className="user-name"><span className="tb-lead">Heather
                                                                        Marshall <span
                                                                            className="dot dot-info d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">marshall@reakitt.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+342
                                                            545-5639</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Reakitt</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-indigo icon ni ni-american-express"></em><span
                                                                className="sub-text">**** 4355</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">02 Dec
                                                            2021, 02:34 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-info">Inactive</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid4" /><label className="custom-control-label"
                                                                htmlFor="cid4"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-indigo"><span>BH</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Benjamin
                                                                        Harris <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">info@mediavest.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+342
                                                            675-6578</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">MediaVest</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-blue icon ni ni-visa"></em><span
                                                                className="sub-text">**** 3472</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">29 Nov
                                                            2021, 03:19 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid5" /><label className="custom-control-label"
                                                                htmlFor="cid5"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-orange"><span>JK</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Joshua
                                                                        Kennedy <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">joshua@softnio.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+323
                                                            345-8676</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Softnio</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-blue icon ni ni-visa"></em><span
                                                                className="sub-text">**** 9878</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">24 Nov
                                                            2021, 04:21 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid6" /><label className="custom-control-label"
                                                                htmlFor="cid6"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-primary"><img
                                                                        src="images/avatar/c-sm.jpg" alt="" /></div>
                                                                <div className="user-name"><span className="tb-lead">Justine
                                                                        Bauwens <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">bauwens@kline.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+657
                                                            879-3214</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">Kline</span>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-danger icon ni ni-mc"></em><span
                                                                className="sub-text">**** 7657</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">19 Nov
                                                            2021, 09:56 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid7" /><label className="custom-control-label"
                                                                htmlFor="cid7"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-purple"><span>EH</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Ethan
                                                                        Hunter <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">ethan@bergerpaints.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+435
                                                            675-2345</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">Berger
                                                            Paints</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-blue icon ni ni-visa"></em><span
                                                                className="sub-text">**** 5435</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">13 Nov
                                                            2021, 05:45 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid8" /><label className="custom-control-label"
                                                                htmlFor="cid8"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-primary"><span>JB</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Justine
                                                                        Bauwens <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">justine@acstext.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+978
                                                            546-2342</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span className="sub-text">ACS
                                                            Textiles</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-blue icon ni ni-visa"></em><span
                                                                className="sub-text">**** 6577</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">06 Nov
                                                            2021, 06:34 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid9" /><label className="custom-control-label"
                                                                htmlFor="cid9"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-primary"><img
                                                                        src="images/avatar/d-sm.jpg" alt="" /></div>
                                                                <div className="user-name"><span className="tb-lead">Summer
                                                                        Powell <span
                                                                            className="dot dot-danger d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">info@youngone.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+435
                                                            433-8767</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Youngone</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-indigo icon ni ni-american-express"></em><span
                                                                className="sub-text">**** 5432</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">27 Oct
                                                            2021, 01:43 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-danger">Suspended</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="nk-tb-item">
                                                    <div className="nk-tb-col nk-tb-col-check">
                                                        <div
                                                            className="custom-control custom-control-sm custom-checkbox notext">
                                                            <input type="checkbox" className="custom-control-input"
                                                                id="cid10" /><label className="custom-control-label"
                                                                htmlFor="cid10"></label></div>
                                                    </div>
                                                    <div className="nk-tb-col"><a href="customer-details.html">
                                                            <div className="user-card">
                                                                <div className="user-avatar xs bg-dark"><span>SM</span>
                                                                </div>
                                                                <div className="user-name"><span className="tb-lead">Sofia Maier
                                                                        <span
                                                                            className="dot dot-success d-lg-none ms-1"></span></span>
                                                                </div>
                                                            </div>
                                                        </a></div>
                                                    <div className="nk-tb-col tb-col-sm"><span
                                                            className="sub-text">sofia@unilever.com</span></div>
                                                    <div className="nk-tb-col tb-col-md"><span className="sub-text">+432
                                                            435-1233</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="sub-text">Unilever</span></div>
                                                    <div className="nk-tb-col tb-col-md">
                                                        <div className="icon-text"><em
                                                                className="text-blue icon ni ni-visa"></em><span
                                                                className="sub-text">**** 6786</span></div>
                                                    </div>
                                                    <div className="nk-tb-col tb-col-xxl"><span className="sub-text">18 Oct
                                                            2021, 07:37 am</span></div>
                                                    <div className="nk-tb-col tb-col-lg"><span
                                                            className="tb-status text-success">Active</span></div>
                                                    <div className="nk-tb-col nk-tb-col-tools">
                                                        <ul className="nk-tb-actions gx-1">
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Details"><em
                                                                        className="icon ni ni-eye-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Send Email"><em
                                                                        className="icon ni ni-mail-fill"></em></a></li>
                                                            <li className="nk-tb-action-hidden"><a href="#"
                                                                    className="btn btn-trigger btn-icon"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="Suspend"><em
                                                                        className="icon ni ni-cross-fill-c"></em></a></li>
                                                            <li>
                                                                <div className="drodown"><a href="#"
                                                                        className="dropdown-toggle btn btn-icon btn-trigger"
                                                                        data-bs-toggle="dropdown"><em
                                                                            className="icon ni ni-more-h"></em></a>
                                                                    <div className="dropdown-menu dropdown-menu-end">
                                                                        <ul className="link-list-opt no-bdr">
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-eye"></em><span>View
                                                                                        Details</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-mail"></em><span>Send
                                                                                        Mail</span></a></li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-cart"></em><span>Orders</span></a>
                                                                            </li>
                                                                            <li><a href="#"><em
                                                                                        className="icon ni ni-na"></em><span>Suspend</span></a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-inner">
                                            <div className="nk-block-between-md g-3">
                                                <div className="g">
                                                    <ul
                                                        className="pagination justify-content-center justify-content-md-start">
                                                        <li className="page-item"><a className="page-link" href="#">Prev</a>
                                                        </li>
                                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                        <li className="page-item"><span className="page-link"><em
                                                                    className="icon ni ni-more-h"></em></span></li>
                                                        <li className="page-item"><a className="page-link" href="#">6</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">7</a></li>
                                                        <li className="page-item"><a className="page-link" href="#">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="g">
                                                    <div
                                                        className="pagination-goto d-flex justify-content-center justify-content-md-start gx-3">
                                                        <div>Page</div>
                                                        <div><select className="form-select js-select2" data-search="on"
                                                                data-dropdown="xs center">
                                                                <option value="page-1">1</option>
                                                                <option value="page-2">2</option>
                                                                <option value="page-4">4</option>
                                                                <option value="page-5">5</option>
                                                                <option value="page-6">6</option>
                                                                <option value="page-7">7</option>
                                                                <option value="page-8">8</option>
                                                                <option value="page-9">9</option>
                                                                <option value="page-10">10</option>
                                                                <option value="page-11">11</option>
                                                                <option value="page-12">12</option>
                                                                <option value="page-13">13</option>
                                                                <option value="page-14">14</option>
                                                                <option value="page-15">15</option>
                                                                <option value="page-16">16</option>
                                                                <option value="page-17">17</option>
                                                                <option value="page-18">18</option>
                                                                <option value="page-19">19</option>
                                                                <option value="page-20">20</option>
                                                            </select></div>
                                                        <div>OF 102</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Persons