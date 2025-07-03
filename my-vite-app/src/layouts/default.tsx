import {Link} from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-deepBlack-500">
      <Navbar />
      <main className="container mx-auto max-w-7xl flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 bg-deepBlack-800/50 border-t border-primary-500/20">
      Built with 💜 by 
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          
          <p className="text-primary-500"> @ALIA-HAIDER</p>
        </Link>
         | Powered by caffeine ☕
      </footer>
    </div>
  );
}
