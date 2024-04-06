export const metadata = {
  title: "Download certificates",
  description: "Download certificates for the event",
  icons: {
    favicon: "/favicon.ico",
    touchicon: "/touchicon.png",
  },
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return <section>{children}</section>;
}
