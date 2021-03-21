import React from "react"
import {
  Badge,
} from "reactstrap"
import { Link } from "react-router-dom"

function statusFromatter (cell, row) {
  let badgeClass = ''
  let badgeTitle = ''
  switch (row.status) {
    case 0: 
      badgeTitle = 'Inactive'
      badgeClass = 'danger'
      break
    case 1: 
      badgeTitle = 'Active'
      badgeClass = 'warning'
      break
    case 2: 
      badgeTitle = 'Finished'
      badgeClass = 'success'
      break
    default:
      badgeTitle = 'Unpublished'
      badgeClass = 'danger'
      break
  }

  return (
    <Badge
        className={"badge bg-pill font-size-12 bg-soft-" + badgeClass}
        color={badgeClass}
        pill
      >
        {badgeTitle}
    </Badge>
  )
}

const RafflesColumns = () => [
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
    dataField: "publication_date",
    text: "Publication Date",
    sort: true,
    formatter: (cellContent, row) => {
      let d = new Date(row.publication_date);
      let date = ("0" + d.getDate()).slice(-2)+'.'+("0" + (d.getMonth()+1)).slice(-2)+'.'+d.getFullYear()+' '+("0" + d.getHours()).slice(-2)+':'+("0" + d.getMinutes()).slice(-2);

      return (
        date
      );
    },
  },
  {
    dataField: "close_date",
    text: "Closing Date",
    sort: true,
    formatter: (cellContent, row) => {
      let d = new Date(row.results_date);
      let date = ("0" + d.getDate()).slice(-2)+'.'+("0" + (d.getMonth()+1)).slice(-2)+'.'+d.getFullYear()+' '+("0" + d.getHours()).slice(-2)+':'+("0" + d.getMinutes()).slice(-2);

      return (
        date
      );
    },
  },
  {
    dataField: "results_date",
    text: "Relusts Date",
    sort: true,
    formatter: (cellContent, row) => {
      let d = new Date(row.results_date);
      let date = ("0" + d.getDate()).slice(-2)+'.'+("0" + (d.getMonth()+1)).slice(-2)+'.'+d.getFullYear()+' '+("0" + d.getHours()).slice(-2)+':'+("0" + d.getMinutes()).slice(-2);

      return (
        date
      );
    },
  },
  {
    dataField: "reg_count",
    text: "Registered",
  },
  {
    dataField: "win_count",
    text: "Winners",
  },
  {
    dataField: "profit",
    text: "Profit",
    formatter: (cellContent, row) => {
      let profit = row.profit
      if (profit.length > 0) {
        profit = row.profit+'₽'
      } else {
        profit = 'N/A'
      }

      return (
        profit
      );
    },
  },
  {
    dataField: "status",
    text: "Status",
    sort: true,
    formatter: statusFromatter,
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

export default RafflesColumns
