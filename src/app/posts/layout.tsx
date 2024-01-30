export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`bg-gray-100 flex min-h-screen flex-col items-center justify-between `}
    >
      {children}
    </div>
  );
}
