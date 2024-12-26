import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSoundcloud,
  FaSpotify,
  FaTwitter,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import logo from "@/public/logo.png";
import Image from "next/image";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6">
              <div>
                <span className="flex items-center justify-center gap-4">
                  <Image
                    src={logo}
                    sizes="100vw"
                    alt="Lotus Tape Logo"
                    className="h-auto"
                  />
                  {/* <p className="text-3xl font-semibold">Shadcnblocks</p> */}
                </span>
                {/* <p className="mt-6 text-sm text-muted-foreground">
                  A collection of 100+ responsive HTML templates for your
                  startup business or side project.
                </p> */}
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <a
                    href="https://www.instagram.com/lotustape"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a
                    href="https://x.com/lotustape"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXTwitter className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a
                    href="https://open.spotify.com/artist/1QS5UfvOJei5EGhNwldpoz?si=71RCrVXLQVuZ4ko_zbKmlw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSpotify className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a
                    href="https://music.apple.com/us/artist/lotus-tape/1504149077"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiApplemusic className="size-6" />
                  </a>
                </li>
                <li className="font-medium hover:text-primary">
                  <a
                    href="https://soundcloud.com/lotustape"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSoundcloud className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© 2024 Lotus Tape. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
