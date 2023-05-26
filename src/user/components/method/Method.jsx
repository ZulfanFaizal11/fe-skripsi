import { Col, Row, Typography,Image} from "antd"
import IconMethod from '../../../assets/user/method/steps.png'
const { Title } = Typography


function Method() {
  return (
    <>
    <Row justify="center" style={{ paddingTop: "30px"}}>
      <Col xs={24}>
      <Row justify="center" style={{ textAlign: 'center'}}>
        <Col>
        <Title>Caranya?</Title>
        </Col>
      </Row>
      <Row justify="center" style={{ textAlign: "center"}}>
        <Col>
         <Image alt="steps" src={IconMethod} />
        </Col>
      </Row>
      </Col>
    </Row>
    </>
  )
}

export default Method