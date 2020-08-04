
const validateFormContact = (data) => {
    /*
    * Function for check the fields required in data (name, description) must has input value.
    * => if has the field in list => false
    * => validate is true => no fields in list or []
    * */
    return Object.keys(data).filter(idKey => !data[idKey].trim()).length === 0;
}

export default validateFormContact;