import React from 'react'
import { Col, Container, Nav, Row, Tab, TabContent } from 'react-bootstrap';
import axios from "../axios";
import ClientsAdminPage from '../components/ClientsAdminPage';
import DashboardProducts from '../components/DashboardProducts';
import Footer from '../components/Footer';
import OrdersAdminPage from '../components/OrdersAdminPage';
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <>
    <Container>
        <Tab.Container defaultActiveKey="products">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="products">Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="orders">Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="clients">Clients</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <TabContent>
                        <Tab.Pane eventKey="products">
                            <DashboardProducts/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="orders">
                            <OrdersAdminPage/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="clients">
                            <ClientsAdminPage/>
                        </Tab.Pane>
                    </TabContent>
                    
                </Col>
            </Row>
        </Tab.Container>
    </Container>
    <Footer/>
    </>

  )
}

export default AdminDashboard