import Head, { Foot } from "./head";
import 'mdui/mdui.css';
import 'mdui';
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
  );
}