import Sponsor from "../pages/Sponsor";

const SponsorsSection = () => {
  return (
    <section className="h-screen bg-grey" id="sponsors">
      <h2>Sponsors</h2>
      <div className="flex flex-col gap-4">
        <div className="flex">
          <Sponsor path="/evan.jpg" alt="evan"/>
        </div>
        <div className="flex gap-4 ">
          <Sponsor path="/evan.jpg" alt="evan"/>
          <Sponsor path="/evan.jpg" alt="evan"/>
        </div>
        <div className="flex gap-4">
          <Sponsor path="/evan.jpg" alt="evan"/>
          <Sponsor path="/evan.jpg" alt="evan"/>
          <Sponsor path="/evan.jpg" alt="evan"/>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
