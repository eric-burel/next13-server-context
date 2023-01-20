import { getSharedObject } from "./getSharedObject";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sharedObject = getSharedObject();
  sharedObject.calledByLayout = true;
  console.log("Shared object in layout:", sharedObject);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
