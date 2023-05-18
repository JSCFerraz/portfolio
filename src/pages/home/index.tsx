// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
} from "./style";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export const Home = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main>
        <Header>
          <Container>
            <HeaderContent>
              <Text as="h1" type="heading1" color="grey5">
                Criando experiências por meio da tecnologia{" "}
              </Text>
              <Text type="body1" color="grey4">
                Sou estudante de programação na Kenzie Academy Brasil.
                Participei de diversos projetos resolvendo problemas e
                desenvolvendo habilidades.
              </Text>
              <HeaderButtonsArea>
                <Button as="a" onClick={() => navigate("/projects")}>
                  Projetos
                </Button>
                <Button as="a" href="#tecnologias">
                  Tecnologias
                </Button>
                <Button as="a" onClick={() => navigate("/about")}>
                  Sobre mim
                </Button>
              </HeaderButtonsArea>
            </HeaderContent>
          </Container>
        </Header>
        <StackSection id="tecnologias">
          <Container>
            <Text as="h3" type="heading3" color="grey2">
              Stacks
            </Text>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </Container>
        </StackSection>
      </main>
      <Footer />
    </>
  );
};
