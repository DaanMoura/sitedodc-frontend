import React, { Component } from "react";
import { Breadcrumbs, Breadcrumb } from "../../components/Breadcrumbs";
import {
  VTab,
  SideMenu,
  TabPanelContainer,
  VerticalTabs
} from "../../components/vertical-tabs";
import { TabPanel } from "react-web-tabs";

import { placeholder, placeholder2 } from "../../components/placeholders";
import sobre from "./components/Sobre";
import LinhaDoTempo from "./components/LinhaDoTempo";
import infraestrutura from "./components/Infraestrutura";
import historico from "./components/Historico";
import galeria_chefia from "./components/GaleriaChefia";

const tabs = [
  {
    props: {
      panelId: "sobre",
      title: "O Departamento",
      header: "",
      showHeader: false
    },
    content: {
      title: "O Departamento",
      body: sobre,
    }
  },
  {
    props: {
      panelId: "historico",
      title: "Histórico",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Histórico",
      body: historico,
    }
  },
  {
    props: {
      panelId: "linha_do_tempo",
      title: "Linha do Tempo",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Linha do Tempo",
      body: <LinhaDoTempo />,
    }
  },
  {
    props: {
      panelId: "galeria-da-chefia",
      title: "Galeria da Chefia",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Galeria da Chefia",
      body: galeria_chefia,
    }
  },
  {
    props: {
      panelId: "infraestrutura",
      title: "Infraestrutura",
      header: "",
      showHeader: false,
    },
    content: {
      title: "Infraestrutura",
      body: infraestrutura,
    }
  },
];

class Institucional extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs>
          <Breadcrumb endereco="/">Início</Breadcrumb>
          <Breadcrumb bold>Institucional</Breadcrumb>
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

export default Institucional;
