import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import { Button, Col, Container, Row, Label, Input } from "reactstrap"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { getRaffles } from "../../../store/e-commerce/actions"
import RafflesColumns from "./RafflesColumns"

const Raffles = props => {
  const { raffles, onGetRaffles } = props
  const [raffleList, setRaffleList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: raffles !== undefined ? raffles.count : 0, // replace later with size(raffleList),
    custom: true,
    nextPageText: 'Next',
    prePageText: 'Previous',
  }
  const { SearchBar } = Search

  useEffect(() => {
    onGetRaffles(1, 10, 'id', 'desc', '')
  }, [onGetRaffles])

  useEffect(() => {
    if (!isEmpty(raffles.rows)) {
      setRaffleList(raffles.rows)
    } else {
      setRaffleList([])
    }
  }, [raffles.rows])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText, sortField, sortOrder }) => {
    console.log(sortField);
    //onGetRaffles(page, limit, sort, sort_dir, search)
    onGetRaffles(page, 10, sortField, sortOrder, searchText)
    setRaffleList(raffles.rows)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Raffles" />
          <Row>
            <Col lg="12">
              <PaginationProvider
                pagination={paginationFactory(pageOptions)}
              >
                {({ paginationProps, paginationTableProps }) => (
                  <ToolkitProvider
                    keyField="id"
                    data={raffleList || []}
                    columns={RafflesColumns()}
                    bootstrap4
                    search
                  >
                    {toolkitProps => (
                      <React.Fragment>
                        <div>
                          <Link to="/add-raffle">
                            <Button
                              type="button"
                              color="success"
                              className="waves-effect waves-light mb-3"
                            >
                              <i className="mdi mdi-plus me-1"></i>
                                    Add raffle
                                  </Button>
                          </Link>
                          <Row>
                            <Col sm="12" md="6">
                              <Label>
                                Show{" "}
                                <Input type="select" className="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm d-inline-block" style={{ width: "auto" }}>
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </Input>
                              </Label>
                            </Col>
                            <Col sm="12" md="6">
                              <Label className="float-end">Search: {" "}
                                <SearchBar {...toolkitProps.searchProps} />
                              </Label>
                            </Col>
                          </Row>
                          <div className="table-responsive mb-4">

                            <BootstrapTable
                              responsive
                              remote
                              bordered={false}
                              striped={false}
                              selectRow={{ mode: 'checkbox' }}
                              classes={
                                "table table-centered datatable dt-responsive nowrap table-card-list"
                              }
                              keyField="customerId"
                              headerWrapperClasses={"bg-transparent"}
                              {...toolkitProps.baseProps}
                              onTableChange={handleTableChange}
                              {...paginationTableProps}
                            />
                            <div className="float-end">
                              <PaginationListStandalone
                                {...paginationProps}
                              />
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    )}
                  </ToolkitProvider>
                )}
              </PaginationProvider>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Raffles.propTypes = {
  onGetRaffles: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  raffles: ecommerce.raffles,
})

const mapDispatchToProps = dispatch => ({
  onGetRaffles: (page, limit, sort, sort_dir, search) => dispatch(getRaffles(page, limit, sort, sort_dir, search)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Raffles)
