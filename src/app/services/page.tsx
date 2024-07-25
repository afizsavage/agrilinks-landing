import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'All our services are accessible for Orange numbers from USSD through *2474# and on the online platform, after registration with Agrilinks',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Services" title="Connecting agricultural market players">
        <p>
          Improve the livelihoods of rural communities by facilitating the trade of
          agricultural products and improving the access to agricultural market information.

        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We want to enable every Sierra Leonean to easily identify and locate
            agricultural produce sellers. We are aiming to increas the profits of
            smallholder farmers by leapfrogging market participants and enabling a
            larger outreach, while offering transparent market information for farmers
            to price their produce. We are bringing together suppliers
            of agricultural products and buyers to improve the supply
            chain and boost the sales of local agricultural production in Sierra Leone.
          </p>
          <p>
            We want to cater for the Sierra Leonean population, farmers, vendors and
            consumers, through different channels. Leveraging Unstructured
            Supplementary Service Data (USSD), which can be accessed by any low-end phone
            in a telecom coverage; a short messaging system (SMS); and a web-based market
            information system. These channels offer smallholder farmers the platform to
            communicate directly with potential buyers, advertise their products, and
            check agricultural market prices.
          </p>
        </div>
      </PageIntro>
    </>
  )
}
