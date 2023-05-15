import React from 'react';
import styles from './UserTableDesktop.module.css';

import { UserTableProps } from './UserTypes';

const UserTableDesktop: React.FC<UserTableProps> = ({ users }) => {
    return (
        <table style={{ margin: '30px auto' }}>

        <thead>
            <tr>
                {Object.keys(users[0]).map((key) => {
                    return <th key={key}>{key}</th>;
                })}
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, i) => (
                <tr key={i}>
                    {Object.entries(user).map(([key, value], j) => {
                        if (key === 'photo') {
                            return (
                                <td
                                    key={j}
                                    className={`${styles.td} standard-cell cell-with-grid-row`}
                                >
                                    <img
                                        src={value.url}
                                        alt={value.title}
                                        className={styles.img}
                                    />
                                </td>
                            );
                        }
                        return <td
                            className={styles.td}
                            key={j}>{value}</td>;
                    })}
                    <td className={styles.td}>
                        <button disabled={user.status === 'offline'}>
                            {user.status === 'online' ? 'Active' : 'Inactive'}
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default UserTableDesktop;
