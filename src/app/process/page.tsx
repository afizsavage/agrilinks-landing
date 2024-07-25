import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

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
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
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

export function Discover() {
  return (
    <Section title="Accessing market price information" image={{ src: imageWhiteboard }}>
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

export function Build() {
  return (
    <Section title="Putting up produce for sale" image={{ src: imageLaptop, shape: 1 }}>
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

export function Deliver() {
  return (
    <Section title="Getting in touch with agri produce sellers" image={{ src: imageMeeting, shape: 2 }}>
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
  title: 'Our Services',
  description:
    'All our services are accessible for Orange numbers from USSD through *2474# and on the online platform, after registration with Agrilinks.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>
    </>
  )
}
