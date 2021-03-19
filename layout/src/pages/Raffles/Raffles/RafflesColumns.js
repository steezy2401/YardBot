import React from "react"
import {
  Badge,
} from "reactstrap"
import { Link } from "react-router-dom"

const RafflesColumns = () => [
  {
    dataField: "work_name",
    text: "Name",
    sort: true,
    formatter: (cellContent, row) => (
      <Link to="#" className="text-dark fw-bold">
        {row.work_name}
      </Link>
    ),
  },
  {
    dataField: "closingDate",
    text: "Closing Date",
    sort: true,
  },
  {
    dataField: "resultsDate",
    text: "Relusts Date",
    sort: true,
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
    dataField: "status",
    text: "Status",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"badge bg-pill font-size-12 bg-soft-" + row.badgeclass}
        color={row.badgeClass}
        pill
      >
        {row.status}
      </Badge>
    ),
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: () => (
      <>
        <Link to="#" className="px-3 text-primary"><i className="uil uil-pen font-size-18"></i></Link>
        <Link to="#" className="px-3 text-danger"><i className="uil uil-trash-alt font-size-18"></i></Link>
      </>
    ),
  },
]

export default RafflesColumns
