import React from 'react'

function Login() {
    return (
        <div className="nk-app-root">
            <div className="nk-main ">
                <div className="nk-wrap nk-wrap-nosidebar">
                    <div className="nk-content ">
                        <div className="nk-split nk-split-page nk-split-lg">
                            <div className="nk-split-content nk-block-area nk-block-area-column nk-auth-container bg-white">
                                <div className="absolute-top-right d-lg-none p-3 p-sm-5"><a href="#"
                                    className="toggle btn-white btn btn-icon btn-light" data-target="athPromo"><em
                                        className="icon ni ni-info"></em></a></div>
                                <div className="nk-block nk-block-middle nk-auth-body">
                                    <div className="brand-logo pb-5"><a href="../../index.html" className="logo-link"><img
                                        className="logo-light logo-img logo-img-lg" src="/src/assets/images/logo.png"
                                        srcSet="/demo9/images/logo2x.png 2x" alt="logo" /><img
                                            className="logo-dark logo-img logo-img-lg" src="/src/assets/images/logo-dark.png"
                                            srcSet="/demo9/images/logo-dark2x.png 2x" alt="logo-dark" /></a></div>
                                    <div className="nk-block-head">
                                        <div className="nk-block-head-content">
                                            <h5 className="nk-block-title">Bilgi İşlem Daire Başkanlığı</h5>
                                            <div className="nk-block-des">
                                                <p>Size daha iyi hizmet verebilmek için buradayız.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form action="#" className="form-validate is-alter" autoComplete="off">
                                        <div className="form-group">
                                            <div className="form-label-group"><label className="form-label"
                                                htmlFor="email-address">EPosta</label>
                                            </div>
                                            <div className="form-control-wrap"><input autoComplete="off" type="text"
                                                className="form-control form-control-lg" required id="email-address"
                                                placeholder="@sakarya.edu.tr" /></div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-label-group">
                                                <label className="form-label" htmlFor="password">Şifre</label>
                                            </div>
                                            <div className="form-control-wrap">
                                                <a tabIndex={-1} href="#" className="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                    <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                </a>
                                                <input autoComplete="new-password" type="password" className="form-control form-control-lg" required id="password"
                                                    placeholder="*******" />
                                            </div>
                                        </div>
                                        <div className="form-group"><button className="btn btn-lg btn-primary btn-block">Giriş Yap</button></div>
                                    </form>
                                    <div className="form-note-s2 pt-4"> Kayıt olmak formu doldurup <a href="auth-register.html">th@sakarya.edu.tr.</a> <br/>Adresine mail atin.</div>
                                </div>
                                <div className="nk-block nk-auth-footer">
                                    <div className="nk-block-between">
                                        <ul className="nav nav-sm">
                                            <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3"
                                                href="#">Şartlar & Koşullar</a></li>
                                            <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3"
                                                href="#">Politika</a></li>
                                            <li className="nav-item"><a className="link link-primary fw-normal py-2 px-3"
                                                href="#">Yardım</a></li>
                                            <li className="nav-item dropup">
                                                <a className="dropdown-toggle dropdown-indicator has-indicator link link-primary fw-normal py-2 px-3" data-bs-toggle="dropdown" data-offset="0,10">
                                                    <small>Türkçe</small>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-end">
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
                                        </ul>
                                    </div>
                                    <div className="mt-3">
                                        <p>&copy; 2025 Teknik Hizmetler Şube Müdürlüğü.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-split-content nk-split-stretch bg-lighter d-flex toggle-break-lg toggle-slide toggle-slide-right"
                                data-toggle-body="true" data-content="athPromo" data-toggle-screen="lg"
                                data-toggle-overlay="true">
                                <div className="slider-wrap w-100 w-max-550px p-3 p-sm-5 m-auto">
                                    <div className="slider-init" data-slick='{"dots":true, "arrows":false}'>
                                        <div className="slider-item">
                                            <div className="nk-feature nk-feature-center">
                                                <div className="nk-feature-img">
                                                    <img className="round" width={"100%"} src="/src/assets/images/slides/promo-aa.png" srcSet="/src/assets/images/slides/promo-aa.png 2x" alt="" />
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-dots"></div>
                                    <div className="slider-arrows"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login