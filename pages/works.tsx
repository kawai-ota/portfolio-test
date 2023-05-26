import Container from "../components/container";
import Hero from "../components/hero";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "../components/two-column";
import Contact from "../components/contact";

export default function Works() {
  return (
    <>
      <Container>
        <Hero title="Works" subtitle="my works" />
        <TwoColumn>
          <TwoColumnMain>アイキャッチ画像とcomingsoon...をつける</TwoColumnMain>
          <TwoColumnSidebar>
            <Contact />
          </TwoColumnSidebar>
        </TwoColumn>
      </Container>
    </>
  );
}
