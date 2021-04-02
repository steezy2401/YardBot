import React from "react"
import { Link } from "react-router-dom"



const UsersColumns = () => [
  {
    dataField: "username",
    text: "Username",
    sort: true,
    formatter: (cellContent, row) => (
      <Link to={'/user/' + row.id} className="text-dark fw-bold">
        {row.username}
      </Link>
    ),
  },
  {
    dataField: "telegram_link",
    text: "Telegram",
    sort: true,
    formatter: (cellContent, row) => (
      <a rel="noreferrer" target="_blank" href={'https://t.me/' + row.telegram_link}>
        {'@' + row.telegram_link}
      </a>
    ),
  },
  {
    dataField: "user_rank",
    text: "Rank",
    sort: true,
  },
  {
    dataField: "reg_count",
    text: "Regs",
    sort: true,
  },
  {
    dataField: "win_count",
    text: "Wins",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent, row) => {

      return (
        <>
          <Link to={'/user/' + row.id} className="px-3 text-primary"><i className="uil uil-eye font-size-18"></i></Link>
        </>
      );
    },
  },
]

export default UsersColumns
