export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-sans flex justify-center items-center w-screen h-screen bg-red-100">
      <main className="max-w-[620px] w-full">{children}</main>
    </div>
  );
}
