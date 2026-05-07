import "./globals.css";

export const metadata = {
  title: "PawCare 洗护空间 | 宠物洗护品牌展示",
  description: "PawCare 洗护空间提供犬猫洗护、毛发护理、皮肤清洁与基础造型服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
