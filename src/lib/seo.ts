export const seoConfig = {
  defaultTitle: "Sathveek Nalla — AI Systems Architect & Automation Engineer",
  titleTemplate: "%s | Sathveek Nalla",
  description:
    "Designing intelligent systems, trading automation, and scalable web platforms.",
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    url: "https://yoursite.com",
    siteName: "Sathveek Nalla Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sathveek Nalla — AI Systems Architect",
      },
    ],
  },
  twitter: {
    handle: "@yourhandle",
    cardType: "summary_large_image" as const,
  },
};

export function buildTitle(title?: string) {
  if (!title) return seoConfig.defaultTitle;
  return seoConfig.titleTemplate.replace("%s", title);
}
