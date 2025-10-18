import QuoteStats from "./QuoteStats";
import QuoteSlider from "./QuoteSlider";

export default function QuoteStatsSection() {
  return (
    <section className="md:flex md:flex-row flex flex-col transition-all duration-500">
      <div className="md:w-1/2 w-full bg-blue-500 lg:p-30 lg:pl-40 md:flex md:items-center py-20 px-5 md:p-16 md:pl-20 space-y-5">
        <QuoteSlider />
      </div>

      <div className="md:w-1/2 w-full bg-black md:px-10 md:py-20 p-10 space-y-3">
        <QuoteStats />
      </div>
    </section>
  );
}
