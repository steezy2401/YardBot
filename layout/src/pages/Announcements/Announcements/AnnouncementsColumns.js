import React from "react"
import { Link } from "react-router-dom"


const AnnouncementsColumns = () => [
  {
    dataField: "work_name",
    text: "Name",
    sort: true,
    formatter: (cellContent, row) => (
      <Link to={'/raffle/'+row.id} className="text-dark fw-bold">
        {row.work_name}
      </Link>
    ),
  },
  {
    dataField: "message",
    text: "Message",
    sort: true,
    formatter: (cellContent, row) => {
      let message = row.message
      if (message.length > 20) {
        message = message.slice(0, 20)+'...'
      }
      return (
        message
      );
    },
  },
  {
    dataField: "publication_date",
    text: "Publication Date",
    sort: true,
    formatter: (cellContent, row) => {
      let date
      if (row.publication_date !== null) {
        let d = new Date(row.publication_date);
        date = ("0" + d.getDate()).slice(-2)+'.'+("0" + (d.getMonth()+1)).slice(-2)+'.'+d.getFullYear()+' '+("0" + d.getHours()).slice(-2)+':'+("0" + d.getMinutes()).slice(-2);  
      } else {
        date = 'N/A'
      }
      return (
        date
      );
    },
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: (cell, row) => (
      <>
        <Link to={'/raffle/edit/'+row.id} className="px-3 text-primary"><i className="uil uil-pen font-size-18"></i></Link>
        <Link to="#" className="px-3 text-danger"><i className="uil uil-trash-alt font-size-18"></i></Link>
      </>
    ),
  },
]

export default AnnouncementsColumns
