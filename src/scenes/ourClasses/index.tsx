import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import Scrollbars from "react-custom-scrollbars-2";


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://www.youtube.com/embed/UejvgFSJyEw",
    },
    {
        name: "Yoga Classes",
        image: "https://www.youtube.com/embed/xTb3H3thGU4",
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://www.youtube.com/watch?v=RPQ0IUPjqB4",
    },
    {
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://www.youtube.com/embed/4f37cQ7xMkM",
    },
    {
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://www.youtube.com/embed/2QIaS7rCKSA",
    },
    {
        name: "Fitness Classes",
        image: "https://www.youtube.com/embed/VFAQnnzScKQ",
    },
    {
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "https://www.youtube.com/embed/Se1dSk0_lD8",
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const OurClasses = ({ setSelectedPage }: Props) => {
    return (

        <section id="myworks" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>My works</HText>
                        <p className="py-5">
                            I work in programs: Adobe After Effects, Adobe Premiere Pro, spine, Сorel draw, Photoshop, Adobe Illustrator, moho, a little Cinema 4D. I can process the audio for the video.
                        </p>
                    </div>
                </motion.div>

                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <Scrollbars>
                        <ul className="w-[2800px] whitespace-nowrap">
                            {classes.map((item: ClassType, index) => (
                                <Class
                                    key={`${item.name}-${index}`}
                                    name={item.name}
                                    // description={item.description}
                                    image={item.image}
                                />
                            ))}
                        </ul>
                    </Scrollbars>
                </div>

            </motion.div>
        </section>



    );
};

export default OurClasses
