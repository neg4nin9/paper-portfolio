export default function SectionHead({ folio, label, title, note }) {
  return (
    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
      <p className="label md:col-span-2 md:pt-2">
        {folio} / {label}
      </p>
      <div className="md:col-span-10">
        <h2 className="display text-[clamp(2.15rem,5.2vw,4rem)] uppercase">{title}</h2>
        {note ? (
          <p className="mt-5 max-w-[54ch] text-[0.975rem] leading-[1.7] text-muted text-pretty">{note}</p>
        ) : null}
      </div>
    </div>
  )
}
