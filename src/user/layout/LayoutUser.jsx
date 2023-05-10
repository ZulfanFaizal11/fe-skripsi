import { Layout, Row, Col, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled } from "@ant-design/icons";
import styled from "styled-components";
const { Header, Footer } = Layout;
const { Title } = Typography;

function LayoutUser() {
  const navigate = useNavigate();

  return (
    <>
      <Header style={{ color: "black", position: "sticky", top: 0, zIndex: 1, width: "100%", backgroundColor: "#ffffff" }}>
        <WrapNavbar justify="space-between">
          <Col
            style={{
              cursor: "pointer",
              color: "#923421",
              fontWeight: "bold",
              textDecoration: "underline",
              fontSize: 20,
            }}
            onClick={() => navigate("/")}
          >
            GEDUNG MAHKOTA WULUNG
          </Col>
          <Col>
            <Row justify="space-between" gutter={24}>
              <Col
                style={{
                  cursor: "pointer",
                }}
              >
                Home
              </Col>
              <Col
                style={{
                  cursor: "pointer",
                }}
                onClick={() => navigate("/newspage")}
              >
                Booking
              </Col>
              <Col
                style={{
                  cursor: "pointer",
                }}
              >
                Cara Booking
              </Col>
              <Col
                style={{
                  cursor: "pointer",
                }}
              >
                Kontak
              </Col>
              <Col
                style={{
                  cursor: "pointer",
                }}
              >
                <Button>Masuk</Button>
              </Col>
              <Col
                style={{
                  cursor: "pointer",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#FF5B24",
                    color: "#ffffff",
                  }}
                >
                  Daftar
                </Button>
              </Col>
            </Row>
          </Col>
        </WrapNavbar>
      </Header>
      <hr />

      <Row justify="center" style={{ padding: "50px 0 50px 0", backgroundColor: "#ffffff", color: "#005F6C" }}>
        <Col xs={24}>
          <Row justify="center">
            <Col xs={20} lg={18}>
              <Row justify="center">
                <Col style={{ margin: "10px 0 10px 0" }} xs={24} lg={6}>
                  <Title style={{ color: "#923421", fontWeight: "bold", textDecoration: "underline" }} level={5}>
                    GEDUNG MAHKOTA WULUNG
                  </Title>
                  <p>Jl. Arumba, Tunggulwulung, Kec.Lowokwaru, Kota Malang, Jawa Timur 65143</p>
                </Col>
                <Col style={{ margin: "10px 0 10px 0" }} xs={24} lg={6}>
                  <Title style={{ color: "#005F6C" }} level={5}>
                    Informasi
                  </Title>
                  <p>Cara Booking</p>
                  <p>FAQ</p>
                </Col>
                <Col style={{ margin: "10px 0 10px 0" }} xs={24} lg={6}>
                  <Title style={{ color: "#005F6C" }} level={5}>
                    Kontak Kami
                  </Title>
                  <p>Weekdays & Weekend</p>
                  <p>(09.00 - 20.00)</p>
                  <p>06182002200</p>
                  <p>082267138775</p>
                </Col>
                <Col style={{ margin: "10px 0 10px 0" }} xs={24} lg={6}>
                  <Title style={{ color: "#005F6C" }} level={5}>
                    Follow Kami
                  </Title>
                  <Row>
                    <p style={{ fontSize: "25px", marginRight: "5px" }}>
                      <FacebookFilled />
                    </p>
                    <p style={{ fontSize: "25px", marginRight: "5px" }}>
                      <InstagramFilled />
                    </p>
                    <p style={{ fontSize: "25px", marginRight: "5px" }}>
                      <TwitterSquareFilled />
                    </p>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr style={{ margin: "0" }} />

      <Footer
        style={{
          textAlign: "center",
          color: "#005F6C",
          backgroundColor: "#FFFFFF",
        }}
      >
        ©2021 Village Futsal. All Rights Reserved
      </Footer>
    </>
  );
}

export default LayoutUser;

const WrapNavbar = styled(Row)`
  @media (min-width: 768px) {
    margin: 0 10vh 0 10vh;
  }
`;
