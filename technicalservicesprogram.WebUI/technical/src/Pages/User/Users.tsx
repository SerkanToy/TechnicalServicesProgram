import React, { useState } from 'react'

function Users() {

    /*const { data } = useGetUserListQuery(null);
    const [user, setUserState] = useState<userlistModel[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);*/

    return (
        <div className="nk-content-wrap">
            <div className="nk-block-head nk-block-head-sm">
                <div className="nk-block-between">
                    <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">Users Card</h3>
                        <div className="nk-block-des text-soft">
                            <p>You have total 95 projects.</p>
                        </div>
                    </div>
                    <div className="nk-block-head-content">
                        <div className="toggle-wrap nk-block-tools-toggle">
                            <a
                                href="#"
                                className="btn btn-icon btn-trigger toggle-expand me-n1"
                                data-target="pageMenu"
                            >
                                <em className="icon ni ni-menu-alt-r" />
                            </a>
                            <div className="toggle-expand-content" data-content="pageMenu">
                                <ul className="nk-block-tools g-3">
                                    <li>
                                        <a href="#" className="btn btn-white btn-outline-light">
                                            <em className="icon ni ni-download-cloud" />
                                            <span>Export</span>
                                        </a>
                                    </li>
                                    <li className="nk-block-tools-opt">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-icon btn-primary"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-plus" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <span>Add User</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span>Add Team</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span>Import User</span>
                                                        </a>
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
                <div className="row g-gs">
                    <div className="col-sm-6 col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="team">
                                    <div className="team-status bg-danger text-white">
                                        <em className="icon ni ni-na" />
                                    </div>
                                    <div className="team-options">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-focus" />
                                                            <span>Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-eye" />
                                                            <span>View Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-mail" />
                                                            <span>Send Email</span>
                                                        </a>
                                                    </li>
                                                    <li className="divider" />
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-star" />
                                                            <span>Reset Pass</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-off" />
                                                            <span>Reset 2FA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-na" />
                                                            <span>Suspend User</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar md bg-primary">
                                            <span>AB</span>
                                            <div className="status dot dot-lg dot-success" />
                                        </div>
                                        <div className="user-info">
                                            <h6>Abu Bin Ishtiyak</h6>
                                            <span className="sub-text">@ishtiyak</span>
                                        </div>
                                    </div>
                                    <div className="team-details">
                                        <p>I am an UI/UX Designer and Love to be creative.</p>
                                    </div>
                                    <ul className="team-statistics">
                                        <li>
                                            <span>213</span>
                                            <span>Projects</span>
                                        </li>
                                        <li>
                                            <span>87.5%</span>
                                            <span>Performed</span>
                                        </li>
                                        <li>
                                            <span>587</span>
                                            <span>Tasks</span>
                                        </li>
                                    </ul>
                                    <div className="team-view">
                                        <a
                                            href="user-details-regular.html"
                                            className="btn btn-round btn-outline-light w-150px"
                                        >
                                            <span>View Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="team">
                                    <div className="team-status bg-light text-black">
                                        <em className="icon ni ni-check-thick" />
                                    </div>
                                    <div className="team-options">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-focus" />
                                                            <span>Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-eye" />
                                                            <span>View Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-mail" />
                                                            <span>Send Email</span>
                                                        </a>
                                                    </li>
                                                    <li className="divider" />
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-star" />
                                                            <span>Reset Pass</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-off" />
                                                            <span>Reset 2FA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-na" />
                                                            <span>Suspend User</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar md bg-primary">
                                            <img src="images/avatar/a-sm.jpg" alt="" />
                                            <div className="status dot dot-lg dot-success" />
                                        </div>
                                        <div className="user-info">
                                            <h6>Ashley Lawson</h6>
                                            <span className="sub-text">@ashley</span>
                                        </div>
                                    </div>
                                    <div className="team-details">
                                        <p>I am an UI/UX Designer and Love to be creative.</p>
                                    </div>
                                    <ul className="team-statistics">
                                        <li>
                                            <span>213</span>
                                            <span>Projects</span>
                                        </li>
                                        <li>
                                            <span>87.5%</span>
                                            <span>Performed</span>
                                        </li>
                                        <li>
                                            <span>587</span>
                                            <span>Tasks</span>
                                        </li>
                                    </ul>
                                    <div className="team-view">
                                        <a
                                            href="user-details-regular.html"
                                            className="btn btn-round btn-outline-light w-150px"
                                        >
                                            <span>View Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="team">
                                    <div className="team-status bg-success text-white">
                                        <em className="icon ni ni-check-thick" />
                                    </div>
                                    <div className="team-options">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-focus" />
                                                            <span>Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-eye" />
                                                            <span>View Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-mail" />
                                                            <span>Send Email</span>
                                                        </a>
                                                    </li>
                                                    <li className="divider" />
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-star" />
                                                            <span>Reset Pass</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-off" />
                                                            <span>Reset 2FA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-na" />
                                                            <span>Suspend User</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar md bg-info">
                                            <span>JL</span>
                                            <div className="status dot dot-lg dot-success" />
                                        </div>
                                        <div className="user-info">
                                            <h6>Joe Larson</h6>
                                            <span className="sub-text">@larson</span>
                                        </div>
                                    </div>
                                    <div className="team-details">
                                        <p>I am an UI/UX Designer and Love to be creative.</p>
                                    </div>
                                    <ul className="team-statistics">
                                        <li>
                                            <span>213</span>
                                            <span>Projects</span>
                                        </li>
                                        <li>
                                            <span>87.5%</span>
                                            <span>Performed</span>
                                        </li>
                                        <li>
                                            <span>587</span>
                                            <span>Tasks</span>
                                        </li>
                                    </ul>
                                    <div className="team-view">
                                        <a
                                            href="user-details-regular.html"
                                            className="btn btn-round btn-outline-light w-150px"
                                        >
                                            <span>View Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-block nk-block-lg">
                <div className="nk-block-head">
                    <div className="nk-block-head-content">
                        <h4 className="title nk-block-title">User Cards Alternet</h4>
                        <p>An alternet version of user card here.</p>
                    </div>
                </div>
                <div className="row g-gs">
                    <div className="col-sm-6 col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="team">
                                    <div className="team-options">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-focus" />
                                                            <span>Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-eye" />
                                                            <span>View Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-mail" />
                                                            <span>Send Email</span>
                                                        </a>
                                                    </li>
                                                    <li className="divider" />
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-star" />
                                                            <span>Reset Pass</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-off" />
                                                            <span>Reset 2FA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-na" />
                                                            <span>Suspend User</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar lg bg-primary">
                                            <span>AB</span>
                                            <div className="status dot dot-lg dot-success" />
                                        </div>
                                        <div className="user-info">
                                            <h6>Abu Bin Ishtiyak</h6>
                                            <span className="sub-text">UI/UX Designer</span>
                                        </div>
                                    </div>
                                    <ul className="team-info">
                                        <li>
                                            <span>Join Date</span>
                                            <span>24 Jun 2015</span>
                                        </li>
                                        <li>
                                            <span>Contact</span>
                                            <span>+88 01713-123656</span>
                                        </li>
                                        <li>
                                            <span>Email</span>
                                            <span>info@softnio.com</span>
                                        </li>
                                    </ul>
                                    <div className="team-view">
                                        <a
                                            href="user-details-regular.html"
                                            className="btn btn-block btn-dim btn-primary"
                                        >
                                            <span>View Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="team">
                                    <div className="team-options">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-focus" />
                                                            <span>Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-eye" />
                                                            <span>View Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-mail" />
                                                            <span>Send Email</span>
                                                        </a>
                                                    </li>
                                                    <li className="divider" />
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-star" />
                                                            <span>Reset Pass</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-off" />
                                                            <span>Reset 2FA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-na" />
                                                            <span>Suspend User</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar lg bg-primary">
                                            <img src="images/avatar/a-sm.jpg" alt="" />
                                            <div className="status dot dot-lg dot-success" />
                                        </div>
                                        <div className="user-info">
                                            <h6>Ashley Lawson</h6>
                                            <span className="sub-text">UI/UX Designer</span>
                                        </div>
                                    </div>
                                    <ul className="team-info">
                                        <li>
                                            <span>Join Date</span>
                                            <span>24 Jun 2015</span>
                                        </li>
                                        <li>
                                            <span>Contact</span>
                                            <span>+88 01713-123656</span>
                                        </li>
                                        <li>
                                            <span>Email</span>
                                            <span>info@softnio.com</span>
                                        </li>
                                    </ul>
                                    <div className="team-view">
                                        <a
                                            href="user-details-regular.html"
                                            className="btn btn-block btn-dim btn-primary"
                                        >
                                            <span>View Profile</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="team">
                                    <div className="team-options">
                                        <div className="drodown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
                                                data-bs-toggle="dropdown"
                                            >
                                                <em className="icon ni ni-more-h" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <ul className="link-list-opt no-bdr">
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-focus" />
                                                            <span>Quick View</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-eye" />
                                                            <span>View Details</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-mail" />
                                                            <span>Send Email</span>
                                                        </a>
                                                    </li>
                                                    <li className="divider" />
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-star" />
                                                            <span>Reset Pass</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-shield-off" />
                                                            <span>Reset 2FA</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <em className="icon ni ni-na" />
                                                            <span>Suspend User</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="user-card user-card-s2">
                                        <div className="user-avatar lg bg-info">
                                            <span>JL</span>
                                            <div className="status dot dot-lg dot-success" />
                                        </div>
                                        <div className="user-info">
                                            <h6>Joe Larson</h6>
                                            <span className="sub-text">UI/UX Designer</span>
                                        </div>
                                    </div>
                                    <ul className="team-info">
                                        <li>
                                            <span>Join Date</span>
                                            <span>24 Jun 2015</span>
                                        </li>
                                        <li>
                                            <span>Contact</span>
                                            <span>+88 01713-123656</span>
                                        </li>
                                        <li>
                                            <span>Email</span>
                                            <span>info@softnio.com</span>
                                        </li>
                                    </ul>
                                    <div className="team-view">
                                        <a
                                            href="user-details-regular.html"
                                            className="btn btn-block btn-dim btn-primary"
                                        >
                                            <span>View Profile</span>
                                        </a>
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

export default Users