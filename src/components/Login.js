import {useState, useEffect} from "react";
import Submit from "./Submit";
import Swal from "sweetalert2";

const Login = ({ isActive }) => {
    const initialValues = {username: "", password: ""};
    const [loginValues, setLoginValues] = useState(initialValues);
    const [loginErrors, setLoginErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setLoginValues({ ...loginValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginErrors(validate(loginValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        if(Object.keys(loginErrors).length === 0 && isSubmit) {
            console.log(loginValues);
        }
    }, [loginErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        if(!values.username) {
            errors.username = "Username is required*"
        }
        if(!values.password) {
            errors.password = "Password is required*"
        } else if(!regex.test(values.password)) {
            errors.password = "Minimum eight characters, at least one letter and one number"
        }
        if(values.username && regex.test(values.password)) {
            Swal.fire({
                title: 'Thank You!',
                icon: 'success'
            })
        }
        return errors;
    }

    return(
        <>
            <input
                className="login input-details"
                onClick={isActive}
                onChange={handleChange}
                type="text"
                placeholder="Set username"
                name="username"
                value={loginValues.username}
            />
            <p className="errorMessage"> {loginErrors.username} </p>
            <input
                className="login input-details"
                onClick={isActive}
                onChange={handleChange}
                type="password"
                placeholder="Set password"
                name="password"
                value={loginValues.password}
            />
            <p className="errorMessage"> {loginErrors.password} </p>

            <Submit onSubmit={handleSubmit} />
        </>
    )
}

export default Login