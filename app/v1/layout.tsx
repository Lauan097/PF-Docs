import { ScrollShadow } from "@heroui/scroll-shadow";
import { DocsSidebar } from "@/app/components/DocsSidebar";
import { DocsBreadcrumbs } from "@/app/components/DocsBreadcrumbs";
import { PageTransition } from "@/app/components/DocsPageTransition";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-7xl h-full px-6 gap-6">
      
      <aside className="h-full w-[260px] shrink-0 hidden md:flex flex-col border-r border-default-50">
        <ScrollShadow className="h-full pr-4 pb-10" hideScrollBar>
          <DocsSidebar />
        </ScrollShadow>
      </aside>

      <section className="flex-1 min-w-0 h-full flex flex-col">
        <DocsBreadcrumbs />
        <ScrollShadow className="h-full px-6 pb-20" hideScrollBar>
          <div className="mx-auto max-w-4xl text-left min-h-full">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </ScrollShadow>
      </section>
      
    </div>
  );
}