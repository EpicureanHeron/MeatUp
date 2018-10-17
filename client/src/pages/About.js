import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
      <h1>MeatUp!</h1>
      <h2>Find meat and other things to eat!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>It's Juicy!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
          Bacon ipsum dolor amet andouille meatball tail buffalo t-bone brisket doner beef ribs spare ribs ground round. Alcatra strip steak spare ribs, pig boudin burgdoggen pork cow kielbasa chicken landjaeger. Prosciutto andouille shankle hamburger salami. Tenderloin strip steak pastrami picanha shank. Filet mignon porchetta short loin pork belly beef turkey jowl tongue jerky.
          </p>
          <p>
          Pork chop kevin chuck sausage. Meatball ribeye filet mignon, pig capicola frankfurter corned beef. Frankfurter buffalo meatloaf bresaola chicken pig bacon flank. Short loin alcatra filet mignon jerky cow beef prosciutto biltong porchetta bacon doner burgdoggen leberkas. Bacon boudin jowl swine, filet mignon picanha prosciutto. Capicola burgdoggen corned beef rump. Biltong leberkas pork belly landjaeger cupim turducken pork ham burgdoggen tail beef.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
