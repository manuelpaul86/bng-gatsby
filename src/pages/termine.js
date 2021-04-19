import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AppointmentList = props => (
  <div class="mb-5 hover:bg-yellow-100 shadow-sm hover:shadow-md rounded-lg">
    <h2 class="py-2 px-2 text-normal font-medium">{props.title}</h2>
    <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">{props.topicOne}</p>
    <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">{props.topicTwo}</p>
    <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">{props.children}</p>
  </div>
)

export default function Termine() {
  return (
    <Layout>
      <div class="flex flex-col">
        <AppointmentList title="Termine in 2021">Für 2021 haben wir Ihnen ein abwechslungsreiches und interessantes Programm mit hochkarätigen Referenten zusammenstellen können. Sie sehen nachfolgend den Fortbildungsplan für 2021. Nähere Informationen zu den Inhalten und den Referenten stellen wir Ihnen hier auf dieser Seite rechtzeitig vor den jeweiligen Terminen zur Verfügung. <Link to="">Mit einem Klick hier können Sie alle Termine der BNG 2021 in Ihren Kalender laden.</Link> Dies sollte mit den gängigen Kalenderprogrammen (Outlook, Apple Kalender, Google Kalender, Thunderbird, ...) funktionieren. Sie werden jeweils eine halbe Stunde vor dem Termin informiert.</AppointmentList>
        <AppointmentList title="150. BNG am 21.01.2021" topicOne="Langwirksame Immunsuppression - Prof. Dr. med. Stefan Reuter, UK Münster" topicTwo="Transplantations-Update - Prof. Dr. med. Ulrich Kunzendorf, UK Kiel"></AppointmentList>
        <AppointmentList title="151. BNG am 18.02.2021" topicOne="Renale Anämie - Prof. Dr. med. Kai-Uwe Eckardt, Charite Berlin Morbus Fabry" topicTwo="Prof. Dr. med. Eva Brandt, UK Münster"></AppointmentList>
        <AppointmentList title="152. BNG am 18.03.2021" topicOne="Peritonealdialyse bei Diabetes mellitus - Prof. Dr. med. Dominik Alscher, Stuttgart" topicTwo="Peritonealdialyse Fallbeispiele - Dr. med. Stephan Segerer, Asklepios Klinik Barmbek, Hamburg"></AppointmentList>
        <AppointmentList title="153. BNG am 22.04.2021" topicOne="IgA-Nephritis Update - Prof. Dr. med. Jürgen Flöge, UK Aachen" topicTwo="FSGS Update - Prof. Dr. med. Hermann Pavenstädt, Münster"></AppointmentList>
        <AppointmentList title="154. BNG am 27.05.2021" topicOne="Thrombotische thrombozytopenische Purpura,  TTP - Prof. Dr. med. Jan Menne, Hannover" topicTwo="aHUS Update - Prof. Dr. med. Thorsten Feldkamp, Kiel"></AppointmentList>
        <AppointmentList title="155. BNG am 24.06.2021" topicOne="Sekundärer Hyperparathyreoidismus - Prof. Markus Ketteler, Stuttgart" topicTwo="Gichtnephropathie - Dr. med. Hendrik Dannemeyer, Hamburg"></AppointmentList>
        <AppointmentList title="156. BNG am 19.08.2021" topicOne="Aldosteronantagonisten - Prof. Dr. med. Hermann Haller, MHH, Hannover" topicTwo="SGLT2 Hemmer und GLP-1 Agonisten - Hon. Prof. Dr. med. Tobias Meyer, Hamburg"></AppointmentList>
        <AppointmentList title="157. BNG am 21.10.2021" topicOne="Zystennieren Bildgebung - Prof. Dr. med. Roland Schmitt, MHH, Hannover" topicTwo="Zystennieren Therapie-Update - Prof. Christian Rosenberger, Charite"></AppointmentList>
        <AppointmentList title="158. BNG am 18.11.2021" topicOne="Therapie des Systemischen Lupus erythematodes - Dr. med. Peer Aries, Hamburg " topicTwo="Vaskulitis Update - Prof. Dr. med. Kirsten de Groot"></AppointmentList>
        <AppointmentList title="159. BNG am 09.12.2021" topicOne="Vergiftungen und Filter - Prof. Dr. med. Jan T. Kielstein, Braunschweig" topicTwo="AKI Alert - Prof. Dr. med. Andreas Kribben, Essen"></AppointmentList> 
      </div>
    </Layout>
  )
}
