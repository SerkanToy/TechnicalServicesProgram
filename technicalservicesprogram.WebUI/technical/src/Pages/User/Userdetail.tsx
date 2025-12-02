import React from 'react'

function Userdetail() {
    return (
        <div className="nk-content-wrap">
            <div className="nk-block-head">
                <div className="nk-block-between g-3">
                    <div className="nk-block-head-content">
                        <h3 className="nk-block-title page-title">
                            Users /{" "}
                            <strong className="text-primary small">Abu Bin Ishtiyak</strong>
                        </h3>
                        <div className="nk-block-des text-soft">
                            <ul className="list-inline">
                                <li>
                                    User ID: <span className="text-base">UD003054</span>
                                </li>
                                <li>
                                    Last Login:{" "}
                                    <span className="text-base">15 Feb, 2019 01:02 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nk-block-head-content">
                        <a
                            href="user-list-regular.html"
                            className="btn btn-outline-light bg-white d-none d-sm-inline-flex"
                        >
                            <em className="icon ni ni-arrow-left" />
                            <span>Back</span>
                        </a>
                        <a
                            href="user-list-regular.html"
                            className="btn btn-icon btn-outline-light bg-white d-inline-flex d-sm-none"
                        >
                            <em className="icon ni ni-arrow-left" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="nk-block">
                <div className="card card-bordered">
                    <ul className="nav nav-tabs nav-tabs-mb-icon nav-tabs-card">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <em className="icon ni ni-user-circle" />
                                <span>Personal</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <em className="icon ni ni-repeat" />
                                <span>Transactions</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <em className="icon ni ni-file-text" />
                                <span>Documents</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <em className="icon ni ni-bell" />
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <em className="icon ni ni-activity" />
                                <span>Activities</span>
                            </a>
                        </li>
                    </ul>
                    <div className="card-inner">
                        <div className="nk-block">
                            <div className="nk-block-head">
                                <h5 className="title">Personal Information</h5>
                                <p>
                                    Basic info, like your name and address, that you use on Nio
                                    Platform.
                                </p>
                            </div>
                            <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Title</span>
                                        <span className="profile-ud-value">Mr.</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Full Name</span>
                                        <span className="profile-ud-value">Abu Bin Ishtiyak</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Date of Birth</span>
                                        <span className="profile-ud-value">10 Aug, 1980</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Surname</span>
                                        <span className="profile-ud-value">IO</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Mobile Number</span>
                                        <span className="profile-ud-value">01713040400</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Email Address</span>
                                        <span className="profile-ud-value">info@softnio.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nk-block">
                            <div className="nk-block-head nk-block-head-line">
                                <h6 className="title overline-title text-base">
                                    Additional Information
                                </h6>
                            </div>
                            <div className="profile-ud-list">
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Joining Date</span>
                                        <span className="profile-ud-value">08-16-2018 09:04PM</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Reg Method</span>
                                        <span className="profile-ud-value">Email</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Country</span>
                                        <span className="profile-ud-value">United State</span>
                                    </div>
                                </div>
                                <div className="profile-ud-item">
                                    <div className="profile-ud wider">
                                        <span className="profile-ud-label">Nationality</span>
                                        <span className="profile-ud-value">United State</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="nk-divider divider md" />
                        <div className="nk-block">
                            <div className="nk-block-head nk-block-head-sm nk-block-between">
                                <h5 className="title">Admin Note</h5>
                                <a href="#" className="link link-sm">
                                    + Add Note
                                </a>
                            </div>
                            <div className="bq-note">
                                <div className="bq-note-item">
                                    <div className="bq-note-text">
                                        <p>
                                            Aproin at metus et dolor tincidunt feugiat eu id quam.
                                            Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Aenean sollicitudin non
                                            nunc vel pharetra.{" "}
                                        </p>
                                    </div>
                                    <div className="bq-note-meta">
                                        <span className="bq-note-added">
                                            Added on <span className="date">November 18, 2019</span> at
                                            <span className="time">5:34 PM</span>
                                        </span>
                                        <span className="bq-note-sep sep">|</span>
                                        <span className="bq-note-by">
                                            By <span>Softnio</span>
                                        </span>
                                        <a href="#" className="link link-sm link-danger">
                                            Delete Note
                                        </a>
                                    </div>
                                </div>
                                <div className="bq-note-item">
                                    <div className="bq-note-text">
                                        <p>
                                            Aproin at metus et dolor tincidunt feugiat eu id quam.
                                            Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Aenean sollicitudin non
                                            nunc vel pharetra.{" "}
                                        </p>
                                    </div>
                                    <div className="bq-note-meta">
                                        <span className="bq-note-added">
                                            Added on <span className="date">November 18, 2019</span> at
                                            <span className="time">5:34 PM</span>
                                        </span>
                                        <span className="bq-note-sep sep">|</span>
                                        <span className="bq-note-by">
                                            By <span>Softnio</span>
                                        </span>
                                        <a href="#" className="link link-sm link-danger">
                                            Delete Note
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

export default Userdetail