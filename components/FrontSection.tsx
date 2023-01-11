import Link from "next/link";

const FrontSection = () => {
  return (
    <section className="pt-32 h-screen" id="front">
      <div className="flex h-full flex-col justify-center items-center">
        <h1 className="font-header text-6xl pb-4 font-extrabold">Hack the Nest</h1>
        <p className="">April 15-16, 2023</p>
        <p className="">River Hill High School</p>
      </div>

       <Link href="/dashboard">
        <button className="rounded-lg border py-4 px-12 hover:bg-orange">
          Apply Now
        </button>
      </Link>  
    </section>
  );
};

export default FrontSection;
