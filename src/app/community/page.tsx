import { type Metadata } from 'next'
import Image from 'next/image'

import { loadArticles } from '@/lib/mdx'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import clsx from 'clsx'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'

import farm from '@/images/farm.jpg'
import farmer from '@/images/photos/image-1.jpg'

export const metadata: Metadata = {
    title: 'Community',
    description:
        'The Agrilinks user community is made up of sierra leoneans interested in agri products, small-scale farmers, vendors, traders, buyers, customers, etc. who align themselves with our mission. Any user can both buy and/or sell on the platform.',
}

export default async function Community() {
    let blogArticles = (await loadArticles()).slice(0, 2)

    return (
        <>
            <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40')}>
                <SectionIntro title={'Community'} smaller>
                    <p>
                        The Agrilinks user community is made up of sierra leoneans
                        interested in agri products, small-scale farmers, vendors, traders,
                        buyers, customers, etc. who align themselves with our mission. Any
                        user can both buy and/or sell on the platform
                    </p>
                </SectionIntro>
                <Container className={'mt-16'}>
                    <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        <FadeIn >
                            <article style={{ position: 'relative' }} >
                                <Border
                                    position="left"
                                    className="relative flex flex-col items-start lg:pl-8 "
                                >
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: 300
                                    }}>
                                        <Image
                                            alt="farmer-image"
                                            src={farmer}
                                            fill={true}
                                            style={{ top: 0, left: 0 }}
                                        />
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-neutral-950">
                                        Sellers
                                    </h3>
                                    <p className="mt-2.5 text-base text-neutral-600">
                                        Sellers are countrywide farmers or vendors who
                                        engage themselves in small-scale farming in fresh
                                        agricultural produce and livestock. They benefit
                                        by dealing directly with buyers and accessing
                                        market insights and therewith maximise their
                                        income.
                                    </p>
                                </Border>
                            </article>
                        </FadeIn>
                        <FadeIn >
                            <article >
                                <Border
                                    position="left"
                                    className="relative flex flex-col items-start lg:pl-8 "
                                >
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: 300
                                    }}>

                                        <Image
                                            alt="buyers-image"
                                            src={farm}
                                            fill={true}
                                            style={{ top: 0, left: 0 }}
                                        />
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-neutral-950">
                                        Buyers
                                    </h3>
                                    <p className="mt-2.5 text-base text-neutral-600">
                                        Buyers are retailers, agro processors,
                                        end-customers, etc., anyone interested in buying
                                        agricultural produce. By connecting with producers
                                        directly, they can cut out a number of middlemen
                                        and therewith increase both their own and
                                        producers’ profit margin
                                    </p>
                                </Border>
                            </article>
                        </FadeIn>
                    </FadeInStagger>
                </Container>
            </div>
        </>
    )
}
