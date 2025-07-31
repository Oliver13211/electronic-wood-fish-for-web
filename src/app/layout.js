export const metadata = {
  title: '电子木鱼网页版',
  description: '王中王荣誉出品',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
