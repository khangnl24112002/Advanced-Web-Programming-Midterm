import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

import Page from "../../components/Page";

const ProtectedLayout = () => {
    const { token } = useAuth();
    const outlet = useOutlet();

    if (!token) {
        return <Navigate to="/auth/sign-in" />;
    }

    return (
        <main className="protectedLayout">
            {/* <MainNavigation />
            <div>{outlet}</div> */}
            <Page>{outlet}</Page>
        </main>
    );
};

export default ProtectedLayout;
