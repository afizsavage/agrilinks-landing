import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'
import Blog from '../blog/page'
import { PageLinks } from '@/components/PageLinks'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'All our services are accessible for Orange numbers from USSD through *2474# and on the online platform, after registration with Agrilinks',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Us" title="Connecting agricultural market players">
        <p>
          Improve the livelihoods of rural communities by facilitating the trade of
          agricultural products and improving the access to agricultural market information.
        </p>
      </PageIntro>
      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Why Agrilinks"
        intro="Small-scale farmers in Sierra Leone depend mainly on the conventional 
        market systems, like the regional luma markets or on market intermediaries  
        to sell their produce. In most cases, there is a significant number of 
        intermediaries between the farm gate and the end-customer and the prices at each 
        step of the value chain are not transparent. Moreover, farmers face challenges to
        store, preserve and transport their goods. Overall, the inefficient supply chains
         lead farmers to sell at unreasonably low prices and maintains the farming sector 
         at its subsistence level. On the other hand, buyers along the value chain find 
         it difficult to identify farmers or wholesalers with fresh produces. "
        pages={blogArticles}
      />

    </>
  )
}
