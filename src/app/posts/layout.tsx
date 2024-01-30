export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`w-full mx-auto`}
    >
      {children}
    </div>
  );
}
