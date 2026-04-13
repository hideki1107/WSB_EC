type PageHeadingProps = {
  title: string;
  description?: string;
};

export function PageHeading(props: PageHeadingProps) {
  const { title, description } = props;

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
