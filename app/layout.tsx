export const metadata = {
  title: 'Form Page',
  description: 'A simple form with Name and Mother\'s Name fields',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
