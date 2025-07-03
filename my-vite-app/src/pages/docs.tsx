import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "accent", class: "text-softWhite" })}>Docs</h1>
          <p className="mt-4 text-mutedGray-300">Documentation and guides for using Neighborly effectively.</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
