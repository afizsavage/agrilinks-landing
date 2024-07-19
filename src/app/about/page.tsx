import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        image: { src: imageLeslieAlexander },
      },
      {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        image: { src: imageMichaelFoster },
      },
      {
        name: 'Dries Vincent',
        role: 'Partner & Business Relations',
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Chelsea Hagon',
        role: 'Senior Developer',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'Emma Dorsey',
        role: 'Senior Designer',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Leonard Krasner',
        role: 'VP, User Experience',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Blake Reid',
        role: 'Junior Copywriter',
        image: { src: imageBlakeReid },
      },
      {
        name: 'Kathryn Murphy',
        role: 'VP, Human Resources',
        image: { src: imageKathrynMurphy },
      },
      {
        name: 'Whitney Francis',
        role: 'Content Specialist',
        image: { src: imageWhitneyFrancis },
      },
      {
        name: 'Jeffrey Webb',
        role: 'Account Coordinator',
        image: { src: imageJeffreyWebb },
      },
      {
        name: 'Benjamin Russel',
        role: 'Senior Developer',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Angela Fisher',
        role: 'Front-end Developer',
        image: { src: imageAngelaFisher },
      },
    ],
  },
]

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We are a platform for farmers and buyers to trade agricultural products and follow market trends',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Connecting agricultural market players">
        <p>
          Improve the livelihoods of rural communities by facilitating the trade of
          agricultural products and improving the access to agricultural market information.

        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We want to enable every Sierra Leoneans to easily identify and locate
            agricultural produce sellers. It aims at increasing the profits of
            smallholder farmers by leapfrogging market participants and enabling a
            larger outreach, while offering transparent market information for farmers
            to price their produce. This platform, bringing together suppliers
            of agricultural products and buyers, is meant to improve the supply
            chain and boost the sales of local agricultural production in Sierra Leone.
          </p>
          <p>
            We want to cater for the Sierra Leoneans population, farmers, vendors and
            consumers, through different channels. It encompasses  an Unstructured
            Supplementary Service Data (USSD), which can be accessed by any low-end phone
            in a telecom coverage; a short messaging system (SMS); and a web-based market
            information system. These channels offer smallholder farmers the platform to
            communicate directly with potential buyers, advertise their products, and
            check agricultural market prices.
          </p>
        </div>
      </PageIntro>
      <ContactSection />
    </>
  )
}
