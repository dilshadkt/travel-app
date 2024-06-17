import CampSiite from "./shared/CampSiite";

const Camp = () => {
  return (
    <section
      className=" 2xl:max-container relative
    py-10 lg:mb-10 lg:py-20 xl:mb-20 flex flex-col"
    >
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] ">
        <CampSiite
          backgrounImage="bg-bg-img-1"
          title="calicut beach road"
          subTitle="calicut,beach"
          peopleJoined="50+ Joined"
        />
        <CampSiite
          backgrounImage="bg-bg-img-1"
          title="calicut beach road"
          subTitle="calicut,beach"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Camp;
