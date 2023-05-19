import { Card, Col, DatePicker, Grid, Image, Row, Typography, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import IconHome from "../../../assets/user/home/Iconhero.png";
const { Title } = Typography;

const Home = () => {
  const { xs, sm, md, lg } = Grid.useBreakpoint();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleOnChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleOnSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <Row justify="center" style={{ paddingTop: "30px" }}>
        <Col xs={24} lg={18}>
          <Row>
            <Col md={24} lg={12} style={{ textAlign: "center", padding: "2vh 5vh 2vh 5vh" }}>
              <Title
                style={{
                  textAlign: "start",
                  fontSize: "3.2rem",
                  fontWeight: "bold",
                  lineHeight: "4.5rem",
                  color: "#005F6C",
                  marginTop: `${xs || sm || md || lg ? "10px" : "5vh"}`,
                }}
              >
                Booking Lapangan <br /> Badminton dengan{" "}
                <span style={{ color: "#FF5B24" }}>
                  <br />
                  Mudah
                </span>{" "}
                dan <span style={{ color: "#FF5B24" }}>Cepat</span>
              </Title>
              <p style={{ fontSize: "1.5rem", textAlign: "start", lineHeight: "2.5rem", fontWeight: "300" }}>
                Kamu ga perlu repot lagi datang buat booking. <br />
                Booking lapangan udah bisa dari website ini aja.
              </p>
              <Card style={{ width: "200", textAlign: "start" }}>
                <Row style={{ justifyContent: "start" }}>
                  <Col style={{ marginRight: "3rem" }}>
                    <p>Tanggal</p>
                    <DatePicker style={{ padding: "4px 8px" }} onChange={onChange} />
                  </Col>
                  <Col style={{ marginRight: "3rem" }}>
                    <p>Lapangan</p>
                    <Select
                      showSearch
                      placeholder="Pilih Lapangan"
                      optionFilterProp="children"
                      onChange={handleOnChange}
                      onSearch={handleOnSearch}
                      filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                      options={[
                        {
                          value: "1",
                          label: "Lapangan No.1",
                        },
                        {
                          value: "2",
                          label: "Lapangan No.2",
                        },
                        {
                          value: "3",
                          label: "Lapangan No.3",
                        },
                      ]}
                    />
                  </Col>
                  <Col>
                    <p>Cari</p>
                    <Button style={{ backgroundColor: "#FF5B24", color: "#ffffff" }} icon={<SearchOutlined />}>
                      Cari
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={24} lg={12} style={{ textAlign: "center", padding: "1vh 5vh 2vh 5vh" }}>
              <Row span={24} style={{ height: "", overflow: "hidden" }}>
                <Image alt="home" src={IconHome} preview={false} />
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
