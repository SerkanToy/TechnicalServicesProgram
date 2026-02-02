interface personModel {
    id: string;
    name: string;
    surName: string | null;
    tCNo: string;
    sex: number;
    emailConfirmed: boolean | false;
    email: string;
    phoneNumber: string | null;
}

export default personModel