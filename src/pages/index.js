import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div class="grid grid-cols-4 gap-1">
        <div class="col-span-4">
          <h2 class="py-2 px-2 text-normal font-medium">Liebe Kolleginnen und Kollegen,</h2>
        </div>
        <div class="col-span-3">
          <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">Das vierte BNG 2021 findet am 22. April 2021 ab 16:00 Uhr statt. Wir hören zwei State-of-the-Art Vorträge zu wichtigen nephrologischen Entitäten: der FSGS und der IgA-Nephropathie.</p>
        </div>
        <div class="pt-2">
          <StaticImage src="../assets/CA_Meyer.jpg" alt="CA Hon. - Prof. Dr. Meyer" placeholder="blurred"></StaticImage>
        </div>
        <div class="pt-2 pl-2">

        </div>
        <div class="col-span-3">
          <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">Zunächst gibt Prof. Dr. med. Hermann Pavenstädt von der Universitätsklinik Münster einen Überblick zu der histologischen Diagnose FSGS. Noch immer ist der zirkulierende Permeabilitätsfaktor der primären Form unbekannt, aber einige Kandidaten werden heiß diskutiert. Sekundäre und genetische Formen werden heute präziser identifiziert. Die Therapie richtet sich nach den vielen möglichen Grunderkrankungen. Wir freuen uns auf ein Update.</p>
        </div>
        <div class="col-span-3">
          <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">Den zweiten Vortrag hält Prof. Dr. med. Jürgen Floege von der Universitätsklinik Aachen zu seinem Lieblingsthema, der IgA-Nephropathie. Auch diese Pathogenese wird durch viele neue Erkenntnisse besser verstanden. Genomweite Assoziationsstudien habe eine Reihe von Risikoallelen der Mukosabarriere identifiziert und erste Studien untersuchen eine lokale Steroidtherapie des Darmes. Das internationale IgAN-Prognose-Tool ist online verfügbar und wird vermutlich in Zukunft bessere Therapieentscheidungen ermöglichen.</p>
        </div>
        <div class="pt-2 pl-2">

        </div>
        <div class="col-span-4">
          <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">Wir würden uns wie immer sehr freuen, diese Themen bei dieser 153. Veranstaltung mit Ihnen diskutieren zu dürfen.</p>
        </div>
        <div class="col-span-4">
          <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">Mit herzlichen Grüßen Ihr</p>
        </div>
        <div class="pt-2 pl-2 col-span-4">
        <StaticImage src="../assets/unterschrift-meyer.png" alt="CA Hon. - Prof. Dr. Meyer" placeholder="blurred"></StaticImage>
        </div>
        <div class="col-span-4">
          <p class="py-2 px-2 text-justify text-normal font-light text-gray-900">Hon.-Prof. Dr. med. Tobias N. Meyer</p>
        </div>
      </div>
    </Layout>
  )
}
