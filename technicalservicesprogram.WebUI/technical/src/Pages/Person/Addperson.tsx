import React from 'react'
import { useCreatePersonMutation } from './Api/personApi'

function Addperson() {

    const [ AddPerson, result ] = useCreatePersonMutation();

    return (
        <div className="nk-content-wrap">
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
                            <div className="col-xxl-6 col-md-4">
                                <div className="form-group"><label className="form-label"
                                    htmlFor="first-name">İsim</label>
                                    <div className="form-control-wrap">
                                        <input type="text" className="form-control" id="first-name" placeholder="İsim" required />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-4">
                                <div className="form-group"><label className="form-label"
                                    htmlFor="last-name">Soyisim</label>
                                    <div className="form-control-wrap">
                                        <input type="text" className="form-control" id="last-name" placeholder="Soyisim" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-4">
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
                            <div className="col-xxl-6 col-md-4">
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
                            <div className="col-xxl-6 col-md-4">
                                <div className="form-group"><label className="form-label"
                                    htmlFor="phone-no">Telefon</label>
                                    <div className="form-control-wrap"><input type="number"
                                        className="form-control" id="phone-no"
                                        placeholder="0264 295 00 00" /></div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-4">
                                <div className="form-group"><label className="form-label"
                                    htmlFor="email">E-Posta</label>
                                    <div className="form-control-wrap"><input type="email"
                                        className="form-control" id="email" placeholder="sau@sakarya.edu.tr" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-4">
                                <div className="form-group"><label className="form-label"
                                    htmlFor="password">Password</label>
                                    <div className="form-control-wrap"><input type="password"
                                        className="form-control" id="password"
                                        placeholder="Password" /></div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-md-4">
                                <div className="form-group"><label className="form-label">Status</label>
                                    <div className="form-control-wrap"><select
                                        className="form-select js-select2">
                                        <option value="default_option">Active</option>
                                        <option value="option_select_status">Inactive</option>
                                        <option value="option_select_status">Pending</option>
                                    </select></div>
                                </div>
                            </div>
                            <div className="col-xxl-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-label">Rektörlük/Fakülte/Yüksek Okul/Daire Başkanlığı/Müdürlük/Koordinatörlük/Meslek Yüksek Okulu</label>
                                    <div className="form-control-wrap">
                                        <select className="form-select js-select2" data-placeholder="Select Gender">
                                            <option value="">Select Gender</option>
                                            <option value="option_select_gender">Male</option>
                                            <option value="option_select_gender">Female</option>
                                            <option value="option_select_gender">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12 col-md-4">
                                <div className="form-group">
                                    <label className="form-label">Department</label>
                                    <div className="form-control-wrap">
                                        <select className="form-select js-select2" data-placeholder="Select Department">
                                            <option value="">Select Department</option>
                                            <option value="option_select_department">Allergy and immunology</option>
                                            <option value="option_select_department">Anesthesiology</option>
                                            <option value="option_select_department">Cardiology</option>
                                            <option value="option_select_department">Dermatology</option>
                                            <option value="option_select_department">Diagnostic radiology</option>
                                            <option value="option_select_department">Emergency medicine</option>
                                            <option value="option_select_department">Neurology </option>
                                            <option value="option_select_department">Obstetrics and gynecology</option>
                                            <option value="option_select_department">Ophthalmology </option>
                                            <option value="option_select_department">Pathology</option>
                                            <option value="option_select_department">Pediatrics</option>
                                            <option value="option_select_department">Psychiatry</option>
                                            <option value="option_select_department">Surgery</option>
                                            <option value="option_select_department">Urology</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group"><label className="form-label">Açıklama</label>
                                    <div className="form-control-wrap">
                                        <textarea className="form-control" rows={8}></textarea>
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
    )
}

export default Addperson