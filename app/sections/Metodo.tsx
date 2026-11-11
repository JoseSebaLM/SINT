import { metodo } from "../content/home";

export default function Metodo() {
  return (
    <section id="como-trabajamos" className="px-2 sm:px-4">
      <div className="mx-auto max-w-[90rem] rounded-[1.75rem] bg-paper-2 sm:rounded-[2rem]">
        <div className="container-page py-16 md:py-24">
          <header className="max-w-3xl">
            <p className="eyebrow">{metodo.eyebrow}</p>
            <h2 className="h-section mt-3">{metodo.title}</h2>
          </header>

          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
            {metodo.steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="border-t border-ink pt-5">
                <div className="flex items-center justify-between">
                  <span className="index">{String(i + 1).padStart(2, "0")}</span>
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-[-0.015em]">{title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">{text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl bg-surface p-6 md:mt-16 md:p-8">
            <h3 className="text-sm font-medium text-ink-3">{metodo.guaranteesTitle}</h3>
            <ul className="mt-5 grid gap-6 md:grid-cols-3 md:gap-8">
              {metodo.guarantees.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3.5">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" strokeWidth={1.75} aria-hidden="true" />
                  <p className="leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
