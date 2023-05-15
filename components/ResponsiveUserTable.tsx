import { useEffect, useState } from 'react';
import UserTableDesktop from './UserTableDesktop';
import UserTableTablet from './UserTableTablet';
import UserTableMobile from './UserTableMobile';

const ResponsiveUserTable = ({ users }) => {
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    if (windowWidth === null) {
        return null; // или можете вернуть загрузочный индикатор
    }

    if (windowWidth >= 1224) {
        return <UserTableDesktop users={users} />;
    } else if (windowWidth >= 768) {
        return <UserTableTablet users={users} />;
    } else {
        return <UserTableMobile users={users} />;
    }
};

export default ResponsiveUserTable;
