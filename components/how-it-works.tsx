const steps = [
  {
    title: "Choose a car",
    body: "Browse our fleet and find your perfect ride.",
  },
  {
    title: "Review details",
    body: "Check availability and vehicle details on Turo.",
  },
  {
    title: "Book on Turo",
    body: "Complete your reservation securely on Turo.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="why-us" className="scroll-mt-24 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 lg:text-3xl">
          How it works
        </h2>
        <p className="mt-2 text-zinc-600">Get on the road in three easy steps.</p>
        <ol className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-950">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
