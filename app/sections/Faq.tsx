import { Plus } from "lucide-react";
import { faq } from "../content/home";

export default function Faq() {
  return (
    <section id="preguntas" className="container-page border-t border-line py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <header className="lg:col-span-4">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="h-section mt-3">{faq.title}</h2>
        </header>

        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {faq.items.map((item, i) => (
            <details key={item.q} className="group" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6">
                <h3 className="text-[1.0625rem] font-medium md:text-lg">{item.q}</h3>
                <Plus
                  className="faq-icon h-5 w-5 shrink-0 text-ink-3 transition-transform duration-200"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-8 leading-relaxed text-ink-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
