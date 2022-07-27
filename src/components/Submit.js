const Submit = ({ onSubmit }) => {
    return(
        <div className="footerBtn">
            <div>
                <button className="login btn btn-success" id="submitBtn" onClick={onSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Submit