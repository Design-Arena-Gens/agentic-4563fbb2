export const metadata = {
  title: 'Krishna Arjun Geeta Gyan - Bhagavad Gita',
  description: 'Animated visualization of Krishna giving the Bhagavad Gita to Arjuna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
