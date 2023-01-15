import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/idle.gif";
import SponsorRedBull from "@/assets/pazu-logo.svg";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="gap-16 bg-gray-10 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN */}
            <motion.div
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/*  MAIN */}
                <div className="z-10 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative mt-40">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div><p className="text-lg font-semibold">Hi. My name is Oleg</p>
                        <p className=" text-lg">

                            Creative and detail-oriented motion graphic designer with a proven track record of success an clients satisfaction in creating original animations for varios videos. Accustomed to working ynder pressure and in fast-passed bisness environments. Greate communications skils and well-developed teamwork abilities.
                        </p>
                    </motion.div>
                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center gap-8 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -80 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage} >Hiring me</ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >

                        </AnchorLink>
                    </motion.div>
                </div>
                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end ">
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </motion.div>
            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-4/5 items-center justify-between gap-8 ml-20">
                            <img alt="redbull-sponsor" src={SponsorRedBull} />
                            <img className="w-24" alt="forbes-sponsor" src={SponsorForbes} />
                            <img className="w-32" alt="fortune-sponsor" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home
