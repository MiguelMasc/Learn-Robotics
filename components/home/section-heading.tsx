type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <h2 className="text-3xl font-black leading-tight tracking-normal sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-zinc-600 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
