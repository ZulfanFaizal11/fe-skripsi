import { Col, Grid, Image, Row, Typography } from "antd";
import IconAbout from "../../../assets/user/about/about-image.png";
import IconStar from "../../../assets/user/about/star.png";
import IconEmptyStar from "../../../assets/user/about/starempty.svg";
const { Title } = Typography;

const About = () => {
  const { xs, sm, md, lg } = Grid.useBreakpoint();

  return (
    <div>
      <Row justify="center" style={{ paddingTop: "30px" }}>
        <Col xs={24} lg={18}>
          <Row>
            <Col md={24} lg={12} style={{ textAlign: "center", padding: "1vh 5vh 2vh 0vh" }}>
              <Row span={24} style={{ marginTop: "2.5rem", overflow: "hidden", justifyContent: "start" }}>
                <Image alt="about" src={IconAbout} preview={false} width={400} style={{ padding: "0" }} />
              </Row>
            </Col>
            <Col md={24} lg={12} style={{ textAlign: "center", padding: "2vh 5vh 2vh 5vh" }}>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: "3.2rem",
                  fontWeight: "bold",
                  lineHeight: "4.5rem",
                  color: "#FF5B24",
                  marginTop: `${xs || sm || md || lg ? "10px" : "5vh"}`,
                }}
              >
                Tentang Kami
              </Title>
              <p style={{ fontSize: "1.5rem", textAlign: "start", lineHeight: "2.5rem", fontWeight: "300" }}>
                Kami adalah tempat penyewaan lapangan futsal yang berada di Kota Medan. Kami menggunakan rumput sintetis impor yang kualitasnya tidak perlu diragukan lagi. Kami telah dipercaya oleh banyak orang sebagai salah satu tempat
                penyewaan lapangan futsal terbaik di Kota Malang.
              </p>
              <Row style={{ justifyContent: "start" }}>
                <Col style={{ marginRight: "3rem" }}>
                  <Title style={{ color: "#FF5B24", fontWeight: "bold", marginLeft: "0", textAlign: "start" }}>6</Title>
                  <p style={{ color: "#7E7E7E" }}>Tahun</p>
                </Col>
                <Col style={{ marginRight: "3rem" }}>
                  <Title style={{ color: "#FF5B24", fontWeight: "bold" }}>360+</Title>
                  <p style={{ color: "#7E7E7E", textAlign: "start" }}>Ulasan</p>
                </Col>
                <Col>
                  <Title style={{ color: "#FF5B24", fontWeight: "bold", textAlign: "start" }}>4.6</Title>
                  <Image alt="star" src={IconStar} style={{ paddingRight: "0.6rem", paddingBottom: "0.8rem" }} />
                  <Image alt="star" src={IconStar} style={{ paddingRight: "0.6rem", paddingBottom: "0.8rem" }} />
                  <Image alt="star" src={IconStar} style={{ paddingRight: "0.6rem", paddingBottom: "0.8rem" }} />
                  <Image alt="star" src={IconStar} style={{ paddingRight: "0.6rem", paddingBottom: "0.8rem" }} />
                  <Image alt="star" src={IconEmptyStar} style={{ paddingBottom: "0.8rem" }} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
