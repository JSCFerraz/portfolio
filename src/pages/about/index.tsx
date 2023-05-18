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
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const About = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main>
        <Header>
          <Container>
            <HeaderContent>
              <Text as="h2" type="heading2" color="grey5">
                Sobre mim...
              </Text>
              <Text type="body1" color="grey4">
                Sou engenheira Eletrônica e mestre em Ciência da Computação.
                Trabalhei 10 anos na área de TI na indústria, fiz pesquisa na
                UFRJ e fui professora de informática. Sou desenvolvedora Web
                Full Stack com habilidades técnicas em HTML | CSS | JavaScript |
                TypeScript | React | Styled-Components | ContextAPI | Node.js |
                Express | PostgreSQL | TypeORM | GitHub | Python | Django, tendo
                desenvolvido mais de 30 projetos de frontend e backend. Tenho
                vivência em metodologia Ágil, tendo tido a oportunidade de atuar
                como Team Leader e Scrum Master em dois projetos. Sou designer
                gráfico e tenho familiaridade com o Figma. Domino a língua
                inglesa para leitura, escrita e conversação.
              </Text>
            </HeaderContent>
          </Container>
        </Header>
      </main>
    </>
  );
};
