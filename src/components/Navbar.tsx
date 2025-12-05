import CardNav from "./CardNav";

export const Navbar = () => {
  const items: {
    label: string;
    bgColor: string;
    textColor: string;
    links: {
      label: string;
      href: string;
    }[];
  }[] = [
    {
      label: "Couple",
      bgColor: "#0a0a0a",
      textColor: "#fbbf24",
      links: [{ label: "View", href: "#couple" }],
    },
    {
      label: "Story",
      bgColor: "#0b0b0b",
      textColor: "#fbbf24",
      links: [{ label: "Read", href: "#story" }],
    },
    {
      label: "Gallery",
      bgColor: "#0c0c0c",
      textColor: "#fbbf24",
      links: [{ label: "Open", href: "#gallery" }],
    },
    {
      label: "Events",
      bgColor: "#0a0a0a",
      textColor: "#fbbf24",
      links: [{ label: "Details", href: "#events" }],
    },
    {
      label: "Gift",
      bgColor: "#0b0b0b",
      textColor: "#fbbf24",
      links: [{ label: "Info", href: "#gift" }],
    },
    {
      label: "RSVP",
      bgColor: "#0c0c0c",
      textColor: "#fbbf24",
      links: [{ label: "Confirm", href: "#rsvp" }],
    },
  ];

  return (
    <CardNav
      className="sticky top-0 z-50"
      items={items}
      baseColor="transparent"
      menuColor="#fbbf24"
      buttonBgColor="#f59e0b"
      buttonTextColor="#111111"
    />
  );
};
