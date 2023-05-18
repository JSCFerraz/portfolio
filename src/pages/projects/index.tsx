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
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  ProjectHeader,
} from "./style";
import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Projects = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <main>
        <ProjectHeader>
          <Container />
        </ProjectHeader>
        <ProjectsArea id="projetos">
          <Container>
            <ProjectAreaWrapperColumns>
              <ProjectsAreaSocialMediaMessage>
                <Text
                  as="h3"
                  type="heading3"
                  color="grey2"
                  css={{ marginBottom: "$2" }}
                >
                  Projetos
                  <Text as="h3" type="heading2" color="grey1">
                    Precisão e{" "}
                    <Text as="span" color="brand1" type="heading2">
                      dedicação
                    </Text>{" "}
                    em cada detalhe!
                  </Text>
                </Text>
              </ProjectsAreaSocialMediaMessage>
              <ProjectsAreaContent>
                <Project />
              </ProjectsAreaContent>
            </ProjectAreaWrapperColumns>
          </Container>
        </ProjectsArea>
      </main>
      <Footer />
    </>
  );
};
