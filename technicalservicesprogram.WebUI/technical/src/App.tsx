import { Routes, Route } from "react-router-dom"
import Breadcrumb from "./Components/Breadcrumb"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import Index from "./Pages/Index"
import Persons from "./Pages/Person/Persons"
import Persondetail from "./Pages/Person/Persondetail"
import Addperson from "./Pages/Person/Addperson"

function App() {

  return (
    <>
      <div className="nk-app-root">
        <div className="nk-main ">
          
          <Nav />

          <div className="nk-wrap ">

            <Breadcrumb />

                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/persons" element={<Persons />} />
                    <Route path="/persondetail" element={<Persondetail />} />
                    <Route path="/addperson" element={<Addperson />} />
                </Routes>

            <Footer />

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
      </a></div>
      <a className="pmo-st pmo-dark" target="_blank" href="https://softnio.com/get-early-access/">
        <div className="pmo-st-img"><img src="/src/assets/images/landing/promo-investorm.png" alt="Investorm" /></div>
        <div className="pmo-st-text">Looking for Advanced <br /> Investment Platform?</div>
      </a>
    </>
  )
}

export default App
