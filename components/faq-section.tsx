import { faqs } from "@/data/faq";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 lg:text-3xl">FAQ</h2>
      <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
        {faqs.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-medium text-zinc-950">
              {item.question}
              <span className="text-lg text-zinc-400 group-open:hidden">+</span>
              <span className="hidden text-lg text-zinc-400 group-open:inline">−</span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
