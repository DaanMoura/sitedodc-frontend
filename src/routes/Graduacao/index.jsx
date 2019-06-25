import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs,
} from "../../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";

import { placeholder, placeholder2 } from "../../components/placeholders";
import ofertas from "./components/Ofertas";
import alunosEspeciais from "./components/AlunosEspeciais";
import atividades from "./components/AtividadesExtra";
import tcc from "./components/TCC";

const tabs = [
  {
    props: {
      panelId: "ofertas",
      title: "Ofertas de Disciplinas",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Ofertas de Disciplinas",
      body: ofertas, 
    }
  },
  {
    props: {
      panelId: "alunos-especiais",
      title: "Alunos Especiais",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Alunos Especiais",
      body: alunosEspeciais, 
    }
  },
  {
    props: {
      panelId: "estagios",
      title: "Estágio",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Estágio",
      body: placeholder, 
    }
  },
  {
    props: {
      panelId: "ativExtras",
      title: "Atividades extracurriculares",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Atividades extracurriculares",
      body: atividades, 
    }
  },
  {
    props: {
      panelId: "tcc",
      title: "TCC",
      header: "",
      showHeader: false,
    },
    content: {
      title: "TCC",
      body: tcc, 
    }
  }
]

class Graduacao extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Graduação</Breadcrumb>
        </Breadcrumbs>
        <VerticalTabs>
          <SideMenu defaultTab={tabs[0].props.panelId}>
            {tabs.map((tab, index) => {
              return (
                <VTab key={"t_" + index} {...tab.props}>
                  {tab.props.title}
                </VTab>
              );
            })}
          </SideMenu>
          <TabPanelContainer>
            {tabs.map((tab, index) => {
              return (
                <TabPanel key={"p_" + index} tabId={tab.props.panelId}>
                  <h4>{tab.content.title}</h4>
                  <hr />
                  {tab.content.body}
                </TabPanel>
              );
            })}
          </TabPanelContainer>
        </VerticalTabs>
      </React.Fragment>
    );
  }
}

export default Graduacao;
