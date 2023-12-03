export default function RegisterForm() {
    return (<>
        <form>
            <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="registerEmail"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="registerPassword"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="registerConfirmPassword"></input>
            </div>
            <button type="button" className="btn btn-primary w-100">Register</button>
        </form>
    </>)
}