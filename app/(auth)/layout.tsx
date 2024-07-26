import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="relative h-screen w-full ">
        <div className="absolute size-full">
          <Image
            src={"/discord-bg.webp"}
            className="size-full"
            fill
            alt="BG Image"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          {children}
        </div>
      </main>
    </div>
  );
}
