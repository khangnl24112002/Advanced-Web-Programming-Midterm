import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

const ProtectedLayout = () => {
    const { token } = useAuth();
    const outlet = useOutlet();

    if (!token) {
        return <Navigate to="/auth/sign-in" />;
    }

    return (
        <>
            <MainNavigation />
            <div>{outlet}</div>
        </>
    );
};

export default ProtectedLayout;
