import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "João P. Gebara",
  initials: "JG",
  location: "Salto, São Paulo, Brazil.",
  locationLink: "https://www.google.com.br/maps/place/Salto,+SP/",
  about:
    "Ciêntista da Computação em formação.",
  summary: (
    <>
      Desenvolvedor de software com experiência em desenvolvimento backend e frontend de aplicações web responsivas e Desktops.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/73214418?v=4",
  personalWebsiteUrl: "https://gebarito.github.io/",
  contact: {
    email: "joaopedrogebara+githubio@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Gebarito",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joaogebara/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Campus Salto",
      degree: "Bacharelado em ciência da computação",
      start: "2022",
      end: "Atualmente",
    },
  ],
  work: [
    {
      company: "Siemens Brasil",
      link: "https://www.siemens.com/br/",
      badges: ["Em Campo", "Embarcados", "Hardware"],
      title: "Siemens PDT em Customer Service em suporte de campo",
      logo: null,
      start: null,
      end: null,
      description: (
        <>
          Técnico em manutenção de sistemas de automação industrial e embarcados.
          <ul className="list-inside list-disc">
            <li>
              Realizo a manutenção de sistemas proprietários em clientes.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Chuva inc",
      link: "https://chuva.net.br/",
      badges: ["PHP", "TypeScript", "Angular", "Docker", "Git", "CI/CD"],
      title: "Engenheiro de software",
      logo: null,
      start: "07/2024",
      end: "12/2024",
      description: (
        <>
          Desenvolvedor fullstack em aplicações de controle de eventos
          universitarios.
          <ul className="list-inside list-disc">
            <li>
              Desenvolvia a lógica de novas features e realizava manutenção de bugs
              com a linguagem PHP e o framework Drupal.
            </li>
            <li>
              Implementava a interface de úsuario com base em designs Figma utilizando Angular e Typescript.
            </li>
            <li>
              Utilizava o banco de dados MySQL para armazenamento de dados.
            </li>
            <li>
              Monitorava erros utilizando a plataforma Sentry.
            </li>
            <li>
              Escrevia testes de regressão visual utilizando cypress.
            </li>
            <li>
              Escrevia testes únitarios com PHPUnit e testes de aceitação com Gherkin e Cucumber.
            </li>
            <li>
              Utilizava git para versionamento e docker para conteinerização. Além de uma pipeline de ci/cd com github actions.
            </li>
          </ul>
        </>

      )
    },
  ],
  skills: [
    {},
  ],
  projects: [
    {},
  ],
} as const;
