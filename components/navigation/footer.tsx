import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

import {
  Envelope,
  LinkedinLogo,
  Phone,
  WhatsappLogo,
  YoutubeLogo,
} from '@phosphor-icons/react/dist/ssr';

import Image from 'next/image';
import Link from 'next/link';

const footerData = [
  {
    title: 'Product',
    items: [
      { name: 'About', link: '#' },
      { name: 'Products', link: '#' },
      { name: 'Pricing', link: '#' },
      { name: 'Teams', link: '#' },
      {
        name: 'Free Business Listing',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSdzEFmkrANFYzdrmSZrjVgeOm_TJspc6q2yi-SgpuRuh_lrAQ/viewform',
      },
    ],
  },
  {
    title: 'Legal',
    items: [
      { name: 'Terms and Conditions', link: '#' },
      { name: 'Cookie Policy', link: '#' },
      { name: 'Privacy Policy', link: '#' },
      { name: 'Investor Relation', link: '#' },
    ],
  },
];

function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn('bg-neutrals-100  p-10 space-y-4', className)}>
      <div className="space-y-4 text-center max-w-screen-xl mx-auto">
        <Image
          src="/logo-black.png"
          width={140}
          height={50}
          alt="visey logo"
          className="mx-auto"
        />
        <p>
          All rights reserved Visey | Designed and built with love - Copyright©
          2024
        </p>

        <Separator className="bg-primary mt-6" />
      </div>
      <div className="space-y-4 md:flex md:justify-between md:space-y-0 max-w-screen-xl mx-auto pt-4">
        {footerData.map((item) => (
          <div className="space-y-2" key={item.title}>
            <h2 className="font-semibold text-xl">{item.title}</h2>
            <div className="space-y-1">
              {item.items.map((item, idx) => (
                <Link href={`${item.link}`} key={idx}>
                  <p className="text-[#545454]">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Contact Us</h2>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Phone size={20} />
                <span className="text-[#545454]">+91 78275 86754</span>
              </div>
              <div className="flex items-center space-x-2">
                <Envelope size={20} />
                <span className="text-[#545454] underline">
                  contact@visey.co.in
                </span>
              </div>
              <p className="text-[#545454]">Partner with us</p>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">Community</h2>
            <Link href="https://wa.me/917827586754">
              <p className="text-[#545454]">Whatsapp</p>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-semibold text-xl">Social Links</h2>
          <div className="flex gap-x-2">
            <Link href="https://wa.me/917827586754">
              <WhatsappLogo size={24} />
            </Link>
            <Link href="#">
              <YoutubeLogo size={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/viseycompany">
              <LinkedinLogo size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
