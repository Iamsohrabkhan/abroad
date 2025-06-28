import React from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About us", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Terms of Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Disclaimer Policy", href: "#" },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <ul className="space-y-4">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={item.href}
                  className="nav-link text-gray-300 hover:text-green-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
