import Head from "./head";
import Foot from "./foot";
import "./globals.css";
export default function RootLayout() {
  return (
    <html lang="zh-cn">
      <head>
        <title>电子木鱼网页版</title>
      </head>
      <body>
        <Head />
        <Foot/>
      </body>
    </html>
  )
}