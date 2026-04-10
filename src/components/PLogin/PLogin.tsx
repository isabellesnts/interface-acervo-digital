import type { JSX } from "react";
import FormLogin from "../FormLogin/FormLogin";

function PLogin(): JSX.Element {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <FormLogin />
        </div>
    );
}

export default PLogin;