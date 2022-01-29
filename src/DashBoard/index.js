import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import DatePicker from 'react-horizontal-datepicker';
import SummeryCardSm from '../Components/Cards/summeryCard.js';
import RecentCard from '../Components/Cards/RecentCard.js';
import RoundAddButton from '../Components/Buttons/buttons';
import ProgressChart from '../Components/ProgressChart/ProgressChart';
import MicroBarChartCard from '../Components/MicroBarChat/MicroBarChart';
import Accounts from '../Components/Accounts/Accounts';
import Categories from '../Components/Categories/Categories';
import SquareButton from '../Components/Buttons/SquareButton';
import {
  IoCalendarSharp, IoHome, IoLayersSharp,
  IoInvertModeSharp
} from 'react-icons/io5';
import logo from '../logo.svg';
import monthlyback
from '../Assets/30-304149_photo-wallpaper-line-abstraction-geometry-background-graphic-design.jpeg';


/**
 * @return {void}
 */
export default function FinanceDashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md={1} className="menu-sm">
          <Container fluid style={{margin: 'auto'}}>
            <Row>
              <Col>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={logo}></img>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{
                  display: 'flex', justifyContent: 'center',
                  paddingTop: '20px'
                }}>
                  <IoHome size={25} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{
                  display: 'flex', justifyContent: 'center',
                  paddingTop: '20px'
                }}>
                  <IoLayersSharp size={25} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div style={{
                  display: 'flex', justifyContent: 'center',
                  paddingTop: '20px'
                }}>
                  <IoInvertModeSharp size={25} />
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md={2} className="menu-md">
          <Container>
            <Row>
              <Container>
                <Row>
                  <Col>
                    <p style={{fontSize: '16px', fontWeight: '600',
                      textTransform: 'uppercase'}}>Accounts</p>
                  </Col>
                </Row>
                <Row>
                  <Container>
                    {
                      ['Hdfc', 'sbi vias', 'DBS Bank'].map((item, index)=>{
                        return (
                          <Row key={index} style={{paddingLeft: '30px'}}>
                            <Col>
                              <Accounts accName={item} />
                            </Col>
                          </Row>
                        );
                      })
                    }
                    <Row>
                      <Col>
                        <SquareButton name="add another" />
                      </Col>
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container>
                <Row style={{marginBottom: '10px', marginTop: '10px'}}>
                  <Col>
                    <p style={{fontSize: '16px', fontWeight: '600',
                      textTransform: 'uppercase'}}>CATEGORIES</p>
                  </Col>
                </Row>
                <Row>
                  <Container>
                    {
                      [{name: 'Food', color: 'green'}, {name: 'Travel', color: 'red'}]
                          .map((item, index)=>{
                            return (
                              <Row key={index} style={{paddingLeft: '30px', marginBottom: '10px'}}>
                                <Col>
                                  <Categories cName={item?.name} cColor={item?.color} />
                                </Col>
                              </Row>
                            );
                          })
                    }
                    <Row>
                      <Col>
                        <SquareButton name="+5 more" />
                      </Col>
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Row>
          </Container>
        </Col>
        <Col md={6} className="content-lg">
          <Container>
            <Row>
              <Container>
                <Row style={{
                  justifyContent: 'space-between', display: 'flex',
                  alignItems: 'center'
                }}>
                  <Col className="heading-text">Daily Transactions</Col>
                  <Col>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}>
                      <div style={{marginRight: '20px'}}>
                        <IoCalendarSharp />
                      </div>
                      <RoundAddButton />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container>
                <Row>
                  <Col style={{padding: '15px'}}>
                    <DatePicker />
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row style={{marginTop: '10px', borderBottom: '0.5px solid #00000040'}}>
              <Container>
                <Row style={{justifyContent: 'space-between', display: 'flex'}}>
                  <Col>
                    <SummeryCardSm labelName="Total Expences" sum={10000} align="flex-start" />
                  </Col>
                  <Col>
                    <SummeryCardSm labelName="Total Income" sum={37500} align="flex-start" />
                  </Col>
                  <Col>
                    <SummeryCardSm labelName="Net" sum={20000} align="flex-end" />
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row>
              <Container>
                {
                  [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                    return (
                      <Row key={index} style={{display: 'flex',
                        boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        marginBottom: '10px', marginTop: '10px',
                        backgroundColor: '#fff',
                        borderRadius: '10px'
                      }}>
                        <Col>
                          <RecentCard price={150} title="Zomato" dateandtime="14-12-2021 3.00 PM" />
                        </Col>
                      </Row>
                    );
                  })
                }
              </Container>
            </Row>
          </Container>
        </Col>
        <Col md={3} className="content-md">
          <Container fluid>
            <Row>
              <Col className='bg-img' style={{
                height: '70px',
                backgroundImage: `url(${monthlyback})`
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center', alignItems: 'center',
                  height: '65px'
                }}>
                  <p className="heading-text">Set up Monthly Budget</p>
                </div>
              </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
              <Container>
                <Row>
                  <Col>
                    <h2>Monthly Overview</h2>
                  </Col>
                </Row>
                <Row>
                  {/* Br charts */}
                  <Col>
                    <MicroBarChartCard type="EXPENCES" gcolor="orange" />
                  </Col>
                  <Col>
                    <MicroBarChartCard type="EXPENCES" gcolor="#8feb95" />
                  </Col>
                </Row>
              </Container>
            </Row>
            <Row style={{marginTop: '20px'}}>
              <Container>
                <Row style={{marginBottom: '10px'}}>
                  <Col>
                    <h2>Expence by category</h2>
                  </Col>
                </Row>
                <Row style={{boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  paddingTop: '12px', paddingBottom: '12px', marginBottom: '10px'}}>
                  <Col>
                    <ProgressChart total={2000} percentage={47} bcolor='#f7e7d7' gcolor="orange" />
                  </Col>
                </Row>
                <Row style={{boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  paddingTop: '12px', paddingBottom: '12px', marginBottom: '10px'}}>
                  <Col>
                    <ProgressChart total={2000} percentage={87} bcolor='#b1c9f0' gcolor="#4e8cf2" />
                  </Col>
                </Row>
                <Row style={{boxShadow: ' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                  paddingTop: '12px', paddingBottom: '12px', marginBottom: '10px'}}>
                  <Col>
                    <ProgressChart total={2000} percentage={87} bcolor='#b1c9f0' gcolor="#4e8cf2" />
                  </Col>
                </Row>
              </Container>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

FinanceDashboard.displayName = 'DashBoard';
