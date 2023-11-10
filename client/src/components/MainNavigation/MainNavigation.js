import { NavLink } from "react-router-dom";

import "./style.css";
import { useAuth } from "../../hooks/useAuth";

const MainNavigation = () => {
    const { user, logout } = useAuth();
    return (
        <header className="header">
            <div>Chào mửng trở lại, {user.firstName}</div>
            <nav>
                <ul className="list">
                    <li>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                isActive ? "active" : "unactive"
                            }
                            end
                        >
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/profile"
                            className={({ isActive }) =>
                                isActive ? "active" : "unactive"
                            }
                        >
                            Hồ sơ
                        </NavLink>
                    </li>
                    <li>
                        <div onClick={() => logout()} className="logOutButton">
                            Đăng xuất
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
