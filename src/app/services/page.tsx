import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { loadArticles } from '@/lib/mdx'
import Blog from '../blog/page'
import { PageLinks } from '@/components/PageLinks'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import clsx from 'clsx'
import { SectionIntro } from '@/components/SectionIntro'
import { Container } from '@/components/Container'
import { GridPattern } from '@/components/GridPattern'
import { StylizedImage } from '@/components/StylizedImage'
import { List, ListItem } from '@/components/List'

import farm from '@/images/farm.jpg'


export const metadata: Metadata = {
    title: 'Services',
    description:
        'All our services are accessible for Orange numbers from USSD through *2474# and on the online platform, after registration with Agrilinks. ',
}

export default async function Services() {


    return (
        <>
            <SectionIntro
                eyebrow="Services"
                title="Connecting agricultural market players"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    All our services are accessible for Orange numbers from USSD through
                    *2474# and on the online platform, after registration with Agrilinks
                </p>
            </SectionIntro>
            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={farm}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title="Accessing market price information">
                            Agrilinks collects price information from regional markets on
                            a daily basis. Our enumerators are collecting this information
                            for bulk and retail sales for more than 20 produces across Sierra Leone and uploading them on the platform. Users can access the average prices per crop per district to help them price their own goods or decide on the most profitable market opportunity. These prices are communicated in local units of measurement (bag, cup, pan, tie, etc.) and in metric unit (price per kilo or liter).
                            For example, a user requesting the average price for corn
                            seeds for Kono district will receive the average price for a
                            bag of corn seeds (with the conversion in kilo) and for a cup
                            of corn seeds (with the conversion in kilo).
                        </ListItem>
                        <ListItem title="Putting up produce for sell">
                            Users that produce agricultural goods can put them up for
                            sell on the platform. Farmers will have to select the crop
                            they want to sell, the quantity available and the price.
                            Their offer will then be accessible to potential buyers.
                            grilinks users that have registered this produce as one of
                            their main produce of interest or that are located in the
                            same district will receive a text message with the offer and
                            the possibility to contract the seller. For example, a user
                            in Moyamba district that has 10 bags of coconut to sell can
                            advertise them on the platform and all the users interested
                            in coconut or registered in Moyamba will receive a text
                            message indicating the availability of 10 bags of coconut
                            and the price per bag set by the seller
                        </ListItem>
                        <ListItem title="Getting in touch with agri produce sellers">
                            Users can enquire about produces up for sell in a certain area
                            and obtain the contacts of the sellers advertising them. They can
                            then call and seal a deal directly with the seller. For example,
                            a user can place a request for pineapples in Port-Loko district
                            and they will receive a text messages containing a list of all
                            the offers matching their request, including prices and
                            contact number of the sellers.
                        </ListItem>
                    </List>
                </div>
            </Container>
        </>
    )



}
