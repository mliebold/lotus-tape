import { FaInstagram, FaSoundcloud, FaSpotify } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    link: "https://www.instagram.com/lotustape",
    icon: <FaInstagram className="size-6" />,
  },
  {
    link: "https://x.com/lotustape",
    icon: <FaXTwitter className="size-6" />,
  },
  {
    link: "https://open.spotify.com/artist/1QS5UfvOJei5EGhNwldpoz?si=71RCrVXLQVuZ4ko_zbKmlw",
    icon: <FaSpotify className="size-6" />,
  },
  {
    link: "https://music.apple.com/us/artist/lotus-tape/1504149077",
    icon: <SiApplemusic className="size-6" />,
  },
  {
    link: "https://soundcloud.com/lotustape",
    icon: <FaSoundcloud className="size-6" />,
  },
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="py-16">
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
                </span>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                {socials.map((social, index) => (
                  <li key={index} className="font-medium hover:text-primary">
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>© {year} Lotus Tape. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
