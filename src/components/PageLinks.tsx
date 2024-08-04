import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import garden from '@/images/photos/image-1.jpg'
import Image from 'next/image'

interface Page {
  href: string
  date: string
  title: string
  description: string
}

export function PageLinks({
  title,
  intro,
  className,
}: {
  title: string
  pages: Array<Page>
  intro?: string
  className?: string
}) {
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-30', className)}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: 400,
        marginBottom: '4rem'
      }}>
        <Image
          alt="farmer-image"
          src={garden}
          fill={true}
          style={{ top: 0, left: 0 }}
        />
      </div>
      <SectionIntro title={title} smaller>
        {intro && <p>{intro}</p>}
      </SectionIntro>
      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FadeIn >
            <article >
              <Border
                position="left"
                className="relative flex flex-col items-start pl-8"
              >
                <p className="mt-2.5 text-base text-neutral-600">
                  Agrilinks uses SMS to communicate with registered members.
                  Users receive text messages when another user puts up an offer for the
                  main products of interest and for the chiefdom where they are located.
                  They also receive contact information of sellers whose products they
                  are interested in. Users can manage their profiles and their offers
                  through the USSD or the online platform and receive confirmation text
                  messages for their activities
                </p>
              </Border>
            </article>
          </FadeIn>
          <FadeIn >
            <article >
              <Border
                position="left"
                className="relative flex flex-col items-start pl-8"
              >
                <p className="mt-2.5 text-base text-neutral-600">
                  Agrilinks users can register from the web (insert link) or via USSD
                  using the short code *2474#. To register, the user will be asked to
                  provide their name, their location (district and chiefdom) and the
                  produce that they are most interested in dealing in. Once registered,
                  the user can access all our services
                </p>
              </Border>
            </article>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </div>
  )
}
