import { Col, Row, Typography } from "antd";
const { Title } = Typography;

const Testimonial = () => {
  return (
    <>
      <Row justify="center" style={{ paddingTop: "30px" }}>
        <Col xs={24}>
          <Row justify="center" style={{ textAlign: "center" }}>
            <Col>
              <Title>Pendapat Mereka</Title>
              <p>
                Village Futsal telah diulas oleh lebih dari 360 orang di Google Maps <br /> dan mendapat rating rata-rata 4,6. Simak ulasan mereka.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Testimonial;
