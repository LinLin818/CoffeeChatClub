import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: 'CafeChat',
  description: 'CafeChat is a community-driven platform that makes it easy to meet new people through meaningful, low-pressure conversations. Whether you’re looking to expand your network, share ideas, find mentorship, or just enjoy a casual chat, CafeChat pairs you with like-minded individuals for short, engaging coffee chats',
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
