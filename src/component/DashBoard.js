import { Tabs, Tab, Container } from "react-bootstrap";
import TheAnswerdQuestion from "./TheAnswerdQuestion";
import TheUnanswerdQuestion from "./TheUnanswerdQuestion";

function DashBoard() {
    return (
        <Container style={{padding:12}}>
             <Tabs
        defaultActiveKey="Unanswered"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Answered" title="Answered Questions">
          <TheAnswerdQuestion/>
        </Tab>
        <Tab eventKey="Unanswered" title="Unanswered Questions">
        <TheUnanswerdQuestion/>
        </Tab>
      </Tabs>
        </Container>
       
    )
}

export default DashBoard
