// Import Components
import SigninForm from "./signinForm";
import RegisterForm from "./registerForm";

export default function AuthModal() {
    return (<>
        <div className="modal fade text-light" id="loginForm" tabIndex="-1" aria-labelledby="loginFormLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="loginFormTitleLabel">Login Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <SigninForm />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-link" data-bs-toggle="modal" data-bs-target="#registerForm">Don't have an account? Register Now!</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade text-light" id="registerForm" tabIndex="-1" aria-labelledby="registerFormLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="registerFormTitleLabel">Registration Form</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <RegisterForm />
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-link" data-bs-toggle="modal" data-bs-target="#loginForm">Already have an account? Login here!</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}