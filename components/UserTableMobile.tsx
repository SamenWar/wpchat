import React from 'react';
import styles from './UserTableMobile.module.css';

const UserTableMobile = ({ users }) => {
    return (
        <>
            {users.map((user, index) => (
                <table key={index} className={styles['user-table']}>
                    <tbody>
                    <tr>
                        <td rowSpan="2" className={styles['user-cell-photo']}>
                            <img src={user.photo.url} alt={user.photo.title} className={styles['user-photo']} />
                        </td>
                        <td className={styles['user-cell-status']}>
                            {user.status}
                        </td>
                        <td rowSpan="2" className={styles['user-cell-action']}>
                            <button disabled={user.status === 'offline'}>{user.status === 'online' ? 'Active' : 'Inactive'}</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles['user-cell-age']}>
                            {user.age}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" className={styles['user-cell-username']}>
                            {user.name}
                        </td>
                        <td className={styles['user-cell-registration']}>
                            {user.registration}
                        </td>
                    </tr>
                    </tbody>
                </table>
            ))}
        </>
    );
};

export default UserTableMobile;
