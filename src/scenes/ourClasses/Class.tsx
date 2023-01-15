type Props = {
    name: string;
    description?: string;
    image: string;
};

const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

    return (
        <>
            <li className="relative mx-5 inline-block h-[380px] w-[450px]">
                <div>
                    {/* <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p> */}
                </div>
                {/* <img alt={`${image}`} src={image} /> */}
                {/* <div className="hidden duration-700 ease-in-out" data-carousel-item="active"> */}
                <iframe className="h-80 w-96" src={image} title="Motion Design Showreel" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </li>
        </>
    );
};

export default Class;