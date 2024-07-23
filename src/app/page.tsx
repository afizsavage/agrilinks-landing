import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageFarm from '@/images/farm.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import Photos from '@/components/Photos'

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Connecting small scale-farmers and producers to potential buyers"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We help you access marketplace information and connect with market players
          via USSD, SMS, or our online marketplace
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageFarm}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Accessing market price information">
              We collects price information from regional markets on a daily basis.
              Our enumerators are collecting this information for bulk and retail
              sales for more than 20 produces across Sierra Leone.
            </ListItem>
            <ListItem title="Putting up produce for sale">
              Create an advert for your product by selecting the crop,
              quantity, and price. The listing and your necessary contact
              information will be accessible to potential buyers.
            </ListItem>
            <ListItem title="Getting in touch with farmers">
              Enquire about products for sale in a particular
              region and obtain the contact information of the sellers advertising them.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a marketplace for connecting small scale-farmers and producers to potential buyers',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-24">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-green-950 [text-wrap:balance] sm:text-7xl">
            Connecting agricultural market players
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Improve the livelihoods of rural communities by facilitating the trade
            of agricultural products and improving the access to agricultural
            market information.
          </p>
        </FadeIn>
      </Container>
      <Photos />
      <Services />
      <ContactSection />
    </>
  )
}
