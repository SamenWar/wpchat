import { useState, useEffect } from 'react';
import UserTableDesktop from './UserTableDesktop';
import UserTableMobile from './UserTableMobile';
import UserTableTablet from "./UserTableTablet";
import { UserTableProps } from './UserTypes'; // замените на правильный путь

const ResponsiveUserTable: React.FC<UserTableProps> = ({ users }) => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    if (windowWidth === null) {
        return null;
    }

    return (
        <>
            {windowWidth > 1024 ? (
                <UserTableDesktop users={users} />
            ) : windowWidth > 720 ? (
                <UserTableTablet users={users} />
            ) : (
                <UserTableMobile users={users} />
            )}
        </>
    );
};

export default ResponsiveUserTable;
