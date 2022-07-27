import {useState, useEffect} from "react";
import ProceedBtn from "./ProceedBtn";
import Login from "./Login";

const Personal = () => {
    const initialValues = {firstname: '', lastname: '', phone: '', email: ''}
    const [personalValues, setPersonalValues] = useState(initialValues);
    const [personalErrors, setPersonalErrors] = useState({});
    const [isProceed, setIsProceed] = useState(false);
    const [showInputs, setShowInputs] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setPersonalValues({...personalValues, [name]: value})
    }

    const handleProceed = (e) => {
        e.preventDefault();
        setPersonalErrors(validate(personalValues));
        setIsProceed(true);
    }

    useEffect(() => {
        if(Object.keys(personalErrors).length === 0 && isProceed) {
            console.log(personalValues);
        }
    }, [personalErrors])

    const validate = (values) => {
        const errors = {};
        if(!values.firstname) {
            errors.firstname = "Firstname is required*"
        }
        if(!values.lastname) {
            errors.lastname = "Lastname is required*"
        }
        if(!values.phone) {
            errors.phone = "Phone is required*"
        }
        if(!values.email) {
            errors.email = "Email is required*"
        }
        if (values.firstname && values.lastname && values.phone && values.email) {

            setShowInputs(true)

            let personalInfo = document.querySelectorAll('.personal')
            let loginInfo = document.querySelectorAll('.login')

            for(let i = 0; i < personalInfo.length; i++) {
                personalInfo[i].style.display = 'none';
            }

            for(let i = 0; i < loginInfo.length; i++) {
                loginInfo[i].style.display = 'block';
            }
        }

        return errors;
    }

    return(
        <>
            <input
                className="personal input-details"
                onChange={handleChange}
                type="text"
                placeholder="Firstname"
                name="firstname"
                value={personalValues.firstname}
            />
            <p className="errorMessage"> {personalErrors.firstname} </p>
            <input
                className="personal input-details"
                onChange={handleChange}
                type="text"
                placeholder="Lastname"
                name="lastname"
                value={personalValues.lastname}
            />
            <p className="errorMessage"> {personalErrors.lastname} </p>
            <input
                className="personal input-details"
                onChange={handleChange}
                type="tel"
                pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                placeholder="0554567890"
                name="phone"
                value={personalValues.phone}
            />
            <p className="errorMessage"> {personalErrors.phone} </p>
            <input
                className="personal input-details"
                onChange={handleChange}
                type="email"
                placeholder="example@email.com"
                name="email"
                value={personalValues.email}
            />
            <p className="errorMessage"> {personalErrors.email} </p>
            <ProceedBtn onProceed={handleProceed} />
            {showInputs && <Login />}
        </>
    )
}

export default Personal