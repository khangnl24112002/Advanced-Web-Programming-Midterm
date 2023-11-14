import React, { useState } from "react";
import styles from "./Sidebar.module.sass";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import Icon from "../Icon";
import Image from "../Image";
import Theme from "../Theme";

const navigation = [
    {
        title: "Trang chủ",
        icon: "home",
        url: "/dashboard",
    },
];

const Sidebar = ({ className, onClose }) => {
    const [visibleHelp, setVisibleHelp] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div
                className={cn(styles.sidebar, className, {
                    [styles.active]: visible,
                })}
            >
                <Link className={styles.logo} to="/dashboard" onClick={onClose}>
                    <Image
                        className={styles.pic}
                        src="/assets/logo-dark.png"
                        srcDark="/assets/logo-light.png"
                        alt="Core"
                    />
                </Link>
                <div className={styles.menu}>
                    {navigation.map(
                        (x, index) =>
                            x.url && (
                                <NavLink
                                    className={styles.item}
                                    activeclassname={styles.active}
                                    to={x.url}
                                    key={index}
                                    exact
                                    onClick={onClose}
                                >
                                    <Icon name={x.icon} size="24" />
                                    {x.title}
                                </NavLink>
                            )
                    )}
                </div>
                <div className={styles.foot}>
                    <Theme className={styles.theme} visibleSidebar={visible} />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
