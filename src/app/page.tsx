import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import imageFarm from '@/images/farm.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import Photos from '@/components/Photos'
import { PageIntro } from '@/components/PageIntro'

import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'


function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/Section [counter-increment:Section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/Section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/Section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/Section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_']"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Accessing market price information" image={{ src: image5 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Agrilinks collects price information from regional markets on a daily basis.
          Our enumerators are collecting this information for bulk and retail sales for
          more than 20 produces across Sierra Leone and uploading them on the platform.
        </p>
        <p>
          Users can access the average prices per crop per district to help them price
          their own goods or decide on the most profitable market opportunity.
          These prices are communicated in local units of measurement
          (bag, cup, pan, tie, etc.) and in metric unit (price per kilo or liter).
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Example
      </h3>
      <p>
        A user requesting the average price for corn seeds for Kono district will
        receive the average price for a bag of corn seeds (with the conversion in kilo)
        and for a cup of corn seeds (with the conversion in kilo).
      </p>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Putting up produce for sale" image={{ src: image4, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Users that produce agricultural goods can put them up for sell on the platform.
          Farmers will have to select the crop they want to sell, the quantity available
          and the price. Their offer will then be accessible to potential buyers.
        </p>
        <p>
          Agrilinks users that have registered this produce as one of their main produce of
          interest or that are located in the same district will receive a text message
          with the offer and the possibility to contract the seller.
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Example
        </h3>
        <p>
          A user in Moyamba district that has 10 bags of coconut to sell can advertise them
          on the platform and all the users interested in coconut or registered in
          Moyamba will receive a text message indicating the availability of 10 bags
          of coconut and the price per bag set by the seller
        </p>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Getting in touch with agri produce sellers" image={{ src: image3, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Users can enquire about produces up for sell in a certain area and obtain the
          contacts of the sellers advertising them. They can then call and seal a deal
          directly with the seller
        </p>
        <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
          Example
        </h3>
        <p>
          A user can place a request for pineapples in Port-Loko district and they will
          receive a text messages containing a list of all the offers matching their
          request, including prices and contact number of the sellers
        </p>
      </div>


    </Section>
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
      <Container className="mt-40 md:mt-40">
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
      <div className="mt-24 space-y-24 [counter-reset:Section] sm:mt-0 sm:space-y-0 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
    </>
  )
}
