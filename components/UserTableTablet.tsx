import React from 'react';
import styles from './UserTableTablet.module.css';

const UserTableTablet = ({ users }) => {
    return (
        <>
            {users.map((user, index) => (
                <table key={index} className={styles['user-table']}>
                    <tbody>
                    <tr>
                        <td rowSpan="2" className={styles['user-cell']}>
                            <img src={user.photo.url} alt={user.photo.title} className={styles['user-photo']} />
                        </td>
                        <td colSpan="2" rowSpan="2" className={styles['user-cell']}>
                            {user.name}
                        </td>
                    </tr>
                    <tr>
                        {/* Ячейка 2 продолжается */}
                        {/* Ячейка 3 продолжается */}
                    </tr>
                    <tr>
                        <td className={styles['user-cell']}>
                            {user.age}
                        </td>
                        <td className={styles['user-cell']}>
                            {user.status}
                        </td>
                        <td className={styles['user-cell']}>
                            <button disabled={user.status === 'offline'}>{user.status === 'online' ? 'Active' : 'Inactive'}</button>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3" className={styles['user-cell']}>
                            {user.registration}
                        </td>
                    </tr>
                    </tbody>
                </table>
            ))}
        </>
    );
};

export default UserTableTablet;
