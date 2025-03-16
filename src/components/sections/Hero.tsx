export default function Hero({ title, description }: { 
    title: string;
    description: string;
  }) {
    return (
      <section className="text-black">
        <h1>{title}</h1>
        <p className="subhead">{description}</p>
      </section>
    );
  }