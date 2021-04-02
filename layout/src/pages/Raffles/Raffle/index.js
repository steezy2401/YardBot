import React, { useEffect/*, useState*/ } from "react"
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  useParams,
  Link,
} from "react-router-dom";
import { isEmpty, map } from "lodash"

import Breadcrumbs from "../../../components/Common/Breadcrumb"

//Import Breadcrumb
//import Breadcrumbs from "../../../components/Common/Breadcrumb"
import { getRaffle } from "../../../store/e-commerce/actions"

const Raffle = props => {
  const { raffle, onGetRaffle } = props
  let { id } = useParams()
  //const [raffleList, setRaffleList] = useState([])

  useEffect(() => {
    onGetRaffle(id)
  }, [onGetRaffle, id])

  /*
  useEffect(() => {
    if (!isEmpty(raffle.rows)) {
      setRaffleList(raffle.rows)
    } else {
      setRaffleList([])
    }
  }, [raffle.rows])*/


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoice Detail" />
          {!isEmpty([1]) && (
            <Row>
              <Col lg="12">
                <Card>
                  <CardBody>
                    <div className="invoice-title">
                      <h4 className="float-end font-size-16">
                      Invoice # 
                        <span className="badge bg-success font-size-12 ms-2">Paid</span>
                      </h4>
                      <div className="mb-4">
                      </div>
                      <div className="text-muted">
                        <p className="mb-1"></p>
                        <p className="mb-1"><i className="uil uil-envelope-alt me-1"></i> </p>
                        <p><i className="uil uil-phone me-1"></i></p>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <Row>
                      <Col sm="6">
                        <div className="text-muted">
                          <h5 className="font-size-16 mb-3">Billed To:</h5>
                          <h5 className="font-size-15 mb-2">asd</h5>
                          <p className="mb-1"></p>
                          <p className="mb-1"></p>
                          <p></p>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="text-muted text-sm-end">
                          <div>
                            <h5 className="font-size-16 mb-1">Invoice No:</h5>
                            <p>#</p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-16 mb-1">Invoice Date:</h5>
                            <p></p>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-size-16 mb-1">Order No:</h5>
                            <p>#</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="py-2">
                      <h5 className="font-size-15">Order summary</h5>
                      <div className="table-responsive">
                      </div>
                      <div className="d-print-none mt-4">
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </React.Fragment>
  )
}

Raffle.propTypes = {
  onGetRaffle: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  raffle: ecommerce.raffle,
})

const mapDispatchToProps = dispatch => ({
  onGetRaffle: (id) => dispatch(getRaffle(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Raffle)
