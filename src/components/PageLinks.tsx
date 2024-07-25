import Link from 'next/link'
import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { formatDate } from '@/lib/formatDate'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

interface Page {
  href: string
  date: string
  title: string
  description: string
}

function PageLink({ page }: { page: Page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-base font-semibold text-neutral-950">
          {page.title}
        </h3>
        <time
          dateTime={page.date}
          className="order-first text-sm text-neutral-600"
        >
          {formatDate(page.date)}
        </time>
        <p className="mt-2.5 text-base text-neutral-600">{page.description}</p>
        <Link
          href={page.href}
          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label={`Read more: ${page.title}`}
        >
          Read more
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </article>
  )
}

export function PageLinks({
  title,
  pages,
  intro,
  className,
}: {
  title: string
  pages: Array<Page>
  intro?: string
  className?: string
}) {
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-green-100 stroke-green-900/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro title={title} smaller>
        {intro && <p>{intro}</p>}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {/* {pages.map((page) => ( */}
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

          {/* ))} */}
        </FadeInStagger>
      </Container>
    </div>
  )
}
