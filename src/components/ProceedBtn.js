const ProceedBtn = ({ onProceed }) => {
    return(
        <div className="footerBtn">
            <div>
                <button
                    className='personal btn btn-primary'
                    onClick={onProceed}
                    id="proceedBtn">
                    Proceed
                </button>
            </div>
        </div>
    )
}

export default ProceedBtn