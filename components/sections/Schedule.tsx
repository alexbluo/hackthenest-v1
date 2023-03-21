import useGradient from "../../utils/useGradient";
import ScheduleBlock from "../ScheduleBlock";

const ScheduleSection = () => {
  return (
    <section className="" id="schedule">
      <div className="-mx-8 inline-block rounded-r-full bg-black px-8 py-2 sm:rounded-full">
        <h2 className={useGradient()}>Schedule</h2>
      </div>
      <p className="-mx-8 p-8 text-xl">
        Hack the Nest will begin morning of Saturday, April 15 and end evening
        of Sunday, April 16. Full details will be released soon!
      </p>
      <ScheduleBlock name="test" time="9:00am - 10:00am">
        description here
      </ScheduleBlock>
    </section>
  );
};

export default ScheduleSection;
