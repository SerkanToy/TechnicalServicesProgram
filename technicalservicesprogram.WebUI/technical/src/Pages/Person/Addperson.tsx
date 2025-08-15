import React from 'react'

function Addperson() {
    return (
        <div className="nk-content nk-content-fluid">
            <div className="container-xl wide-xl">
                <div className="nk-content-body">
                    <div className="nk-block-head nk-block-head-sm">
                        <div className="nk-block-between">
                            <div className="nk-block-head-content">
                                <h3 className="nk-block-title page-title">Personel Kaydet</h3>
                            </div>
                        </div>
                    </div>
                    <div className="nk-block">
                        <div className="card card-bordered">
                            <div className="card-inner">
                                <div className="row gy-4">
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label"
                                            htmlFor="first-name">First Name</label>
                                            <div className="form-control-wrap"><input type="text"
                                                className="form-control" id="first-name"
                                                placeholder="First Name" required /></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label"
                                            htmlFor="last-name">Last Name</label>
                                            <div className="form-control-wrap"><input type="text"
                                                className="form-control" id="last-name"
                                                placeholder="Last Name" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Gender</label>
                                            <div className="form-control-wrap"><select
                                                className="form-select js-select2"
                                                data-placeholder="Select Gender">
                                                <option value="">Select Gender</option>
                                                <option value="option_select_gender">Male</option>
                                                <option value="option_select_gender">Female</option>
                                                <option value="option_select_gender">Other</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Date of
                                            Birth</label>
                                            <div className="form-control-wrap">
                                                <div className="form-icon form-icon-right"><em
                                                    className="icon ni ni-calendar"></em></div><input
                                                    type="text" className="form-control date-picker-alt"
                                                    data-date-format="yyyy-mm-dd" placeholder="yyyy-mm-dd" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label"
                                            htmlFor="phone-no">Phone</label>
                                            <div className="form-control-wrap"><input type="number"
                                                className="form-control" id="phone-no"
                                                placeholder="Phone no" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label"
                                            htmlFor="email">Email</label>
                                            <div className="form-control-wrap"><input type="email"
                                                className="form-control" id="email" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label"
                                            htmlFor="password">Password</label>
                                            <div className="form-control-wrap"><input type="password"
                                                className="form-control" id="password"
                                                placeholder="Password" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Adddress</label>
                                            <div className="form-control-wrap"><input type="text"
                                                className="form-control" id="address" placeholder="Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label
                                            className="form-label">Designation</label>
                                            <div className="form-control-wrap"><input type="text"
                                                className="form-control" id="designation"
                                                placeholder="Designation" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Department</label>
                                            <div className="form-control-wrap"><select
                                                className="form-select js-select2"
                                                data-placeholder="Select Department">
                                                <option value="">Select</option>
                                                <option value="default_option">Allergy and immunology
                                                </option>
                                                <option value="option_select_department">Anesthesiology
                                                </option>
                                                <option value="option_select_department">Cardiology
                                                </option>
                                                <option value="option_select_department">Dermatology
                                                </option>
                                                <option value="option_select_department">Diagnostic
                                                    radiology</option>
                                                <option value="option_select_department">Emergency
                                                    medicine</option>
                                                <option value="option_select_department">Neurology
                                                </option>
                                                <option value="option_select_department">Obstetrics and
                                                    gynecology</option>
                                                <option value="option_select_department">Ophthalmology
                                                </option>
                                                <option value="option_select_department">Pathology
                                                </option>
                                                <option value="option_select_department">Pediatrics
                                                </option>
                                                <option value="option_select_department">Psychiatry
                                                </option>
                                                <option value="option_select_department">Surgery
                                                </option>
                                                <option value="option_select_department">Urology
                                                </option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Specialist</label>
                                            <div className="form-control-wrap"><input type="text"
                                                className="form-control" id="specialist"
                                                placeholder="Specialist" /></div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Upload
                                            Photo</label>
                                            <div className="form-control-wrap">
                                                <div className="form-file"><input type="file" multiple
                                                    className="form-file-input" id="customFile" /><label
                                                        className="form-file-label" htmlFor="customFile">Choose
                                                        file</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">National
                                            ID</label>
                                            <div className="form-control-wrap">
                                                <div className="form-file"><input type="file" multiple
                                                    className="form-file-input" id="nid" /><label
                                                        className="form-file-label" htmlFor="nid">Choose
                                                        file</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label
                                            className="form-label">Certificates</label>
                                            <div className="form-control-wrap">
                                                <div className="form-file"><input type="file" multiple
                                                    className="form-file-input" id="certificates" /><label
                                                        className="form-file-label" htmlFor="certificates">Choose
                                                        files</label></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Joining
                                            Date</label>
                                            <div className="form-control-wrap">
                                                <div className="form-icon form-icon-right"><em
                                                    className="icon ni ni-calendar"></em></div><input
                                                    type="text" className="form-control date-picker"
                                                    data-date-format="yyyy-mm-dd" placeholder="yyyy-mm-dd" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-md-4">
                                        <div className="form-group"><label className="form-label">Status</label>
                                            <div className="form-control-wrap"><select
                                                className="form-select js-select2">
                                                <option value="default_option">Active</option>
                                                <option value="option_select_status">Inactive</option>
                                                <option value="option_select_status">Pending</option>
                                            </select></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group"><label className="form-label">Açıklama</label>
                                            <div className="form-control-wrap">
                                                <div className="quill-basic">
                                                    <p>Merhaba!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary">
                                                Akademisyen / Memur / Sürekli İşçi 
                                                <br />Kaydet
                                            </button>
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

export default Addperson