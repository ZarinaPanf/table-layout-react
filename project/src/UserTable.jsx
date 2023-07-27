import { useEffect, useState } from "react";
import "./userTable.css";
import arrow from "./assets/arrow.svg";

const HeaderCell = ({column, sorting}) => {
    return (
    <th key={column} className="user-table-cell user-table-header">
    {column}
    <span className="arrow"><img alt="arrow" src={arrow} /> </span>
    </th>
   )
}

const Header = ({columns, sorting}) => {
    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <HeaderCell column={column} sorting={sorting} key={column}/>
                ))}
            </tr>
        </thead>
    )
}

const Content = ({entries, columnKeys}) => {
    return (
        <tbody>
            {entries.map((entry) => (
                <tr key={entry.id} className="user-table-content">
                    {columnKeys.map(column => (
                        <td key={column} className="user-table-cell">{entry[column]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

const UserTable = () => {

    const [users, setUsers] = useState([]);
    const [sorting, setSorting] = useState({column: 'id', order: 'asc'});
    const columns = ['ID', 'Заголовок', 'Описание'];
    const columnKeys = ['id', 'title', 'body'];
    console.log(users)

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then((res) => res.json())
        .then((users) => {setUsers(users);
        })
    }, []);

    return (
        <div>
            SEARCH BAR 
            <table className="user-table">
                <Header columns={columns} sorting={sorting}/>
                <Content entries={users} columnKeys={columnKeys} />
            </table>
        </div>
    )
}

export default UserTable;