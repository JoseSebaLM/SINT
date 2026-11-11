import { porQue } from "../content/home";

export default function PorQue() {
  return (
    <section aria-labelledby="por-que-titulo" className="container-page py-20 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
        <h2 id="por-que-titulo" className="h-section lg:col-span-4">
          {porQue.title}
        </h2>
        <ul className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:col-span-8">
          {porQue.items.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-5 text-lg font-medium leading-snug tracking-[-0.01em]">{title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
