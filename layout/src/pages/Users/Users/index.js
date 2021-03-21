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

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { getUsers } from "../../../store/e-commerce/actions"
import UsersColumns from "./UsersColumns"

const Users = props => {
  const { users, onGetUsers } = props
  const [userList, setUserList] = useState([])
  const pageOptions = {
    sizePerPage: 10,
    totalSize: users !== undefined ? users.length : 0, // replace later with size(userList),
    custom: true,
    nextPageText: 'Next',
    prePageText: 'Previous',
  }
  const { SearchBar } = Search

  useEffect(() => {
    onGetUsers(1)
  }, [onGetUsers])

  useEffect(() => {
    if (!isEmpty(users.rows)) {
      setUserList(users.rows)
    } else {
      setUserList([])
    }
  }, [users.rows])

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    onGetUsers(page)
    setUserList(users.rows)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Users"/>
          <Row>
            <Col lg="12">
              <PaginationProvider
                pagination={paginationFactory(pageOptions)}
              >
                {({ paginationProps, paginationTableProps }) => (
                  <ToolkitProvider
                    keyField="id"
                    data={userList || []}
                    columns={UsersColumns()}
                    bootstrap4
                    search
                  >
                    {toolkitProps => (
                      <React.Fragment>
                        <div>
                          <div>
                            <Button
                              type="button"
                              color="success"
                              className="waves-effect waves-light mb-3"
                            >
                              <i className="mdi mdi-plus me-1"></i>
                                    Add raffle
                                  </Button>
                          </div>
                          <Row>
                            <Col sm="12" md="6">
                              <Label>
                                Show{" "}
                                <Input type="select" className="custom-select custom-select-sm form-control form-control-sm form-select form-select-sm d-inline-block" style={{ width: "auto"}}>
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

Users.propTypes = {
  onGetUsers: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  users: ecommerce.users,
})

const mapDispatchToProps = dispatch => ({
  onGetUsers: (page) => dispatch(getUsers(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
