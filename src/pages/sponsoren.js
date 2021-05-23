import React from "react"
import Layout from "../components/layout"

const DonatorList = (props) => {
  return (
  <div class="my-3 hover:bg-yellow-100 shadow-sm hover:shadow-md rounded-lg">
    <h2 class="py-2 px-2 text-normal font-medium">{props.company}</h2>
    <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">{props.amount}</p>
    <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">{props.children}</p>
  </div>
  )
}

const Sponsoren = () => {
  return (
    <Layout>
      <div class="flex flex-col">
        <DonatorList company="Sponsoren" amount="">Die Barmbeker Nephrologen Gespräche sind nur möglich dank der Unterstützung unser Sponsoren. Trotz der geänderten Rahmenbedingungen durch die Kontaktbeschränkungen 2020 und 2021 und den damit verbundenen Wechsel auf ein reines Online - Format erhalten wir dankenswerterweise eine anhaltende finanzielle Unterstützung. Art und Höhe des Sponsorings möchten wir Ihnen hier offenlegen. Die Mitgliedsunternehmen der „Freiwilligen Selbstkontrolle für die Arzneimittelindustrie e.V.“ (FSA) haben zur Schaffung von mehr Transparenz den FSA-Kodex enger gefasst. Zukünftig sind Kongressveranstalter verpflichtet, potenzielle Teilnehmer von Kongressen bereits im Vorfeld der Veranstaltung über Umfang und Bedingungen der Unterstützung der Arzneimittelindustrie zu informieren:</DonatorList>
        <DonatorList company="Alexion Pharma Germany GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="AMGEN GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="AstraZeneca GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="Bayer AG" amount="2.400,– €"></DonatorList>
        <DonatorList company="B. Braun Melsungen AG" amount="2.400,– €"></DonatorList>
        <DonatorList company="Boehringer Ingelheim Pharma GmbH & Co. KG" amount="2.400,– €"></DonatorList>
        <DonatorList company="Chiesi GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="Fresenius Medical Care AG & Co. KGaA" amount="2.400,– €"></DonatorList>
        <DonatorList company="GlaxoSmithKline GmbH & Co. KG" amount="2.400,– €"></DonatorList>
        <DonatorList company="Hexal AG" amount="2.400,– €"></DonatorList>
        <DonatorList company="Novartis Pharma GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="Otsuka Pharmaceutical Europe Ltd." amount="2.400,– €"></DonatorList>
        <DonatorList company="Sanofi-Aventis Deutschland GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="Tauro-Implant GmbH" amount="2.400,– €"></DonatorList>
        <DonatorList company="Vifor Pharma Deutschland GmbH" amount="2.400,– €"></DonatorList>
      </div>
    </Layout>
  )
}

export default Sponsoren