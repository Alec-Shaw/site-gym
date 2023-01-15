import Logo from "@/assets/Logo.png";

const Footer = () => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                        I am brings ideas to life through motion graphics and animation
                    </p>
                    <p>© Alec Shaw All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5"><a href="https://www.linkedin.com/in/olegiliushov/" target="_blank">Linked In</a></p>
                    <p className="my-5"><a href="https://www.youtube.com/channel/UCpjTVsi2__1M4kECzrfBF0w" target="_blank">You tube</a></p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Me</h4>
                    <p className="my-5"><a href="https://t.me/PortuAlec" target="_blank">@PortuAlec</a></p>
                    <p>oleg.iliushov@gmail.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;