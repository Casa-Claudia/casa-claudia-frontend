import { Fence, Lock, LucideWaves, PawPrint, RockingChair, Squirrel, Zap } from 'lucide-react';
interface Props {
  t: any;
}
export default function Features({t}: Props) {
  return (
    <div className="features bg-my-white md:px-16 px-4   py-10">
      <h2 className="mb-10 text-3xl font-semibold text-black">{t("features-features")}</h2>
      <div className="grid md:grid-cols-3 grid-cols-2 px-4 max-w-screen-2xl ">
        <div className="p-4">
          <div className="feature flex items-start lg:items-center">
            <Lock className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">{t("features-t1")}</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>{t("features-s1")}</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start">
            <RockingChair className="mr-2 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">{t("features-t2")}</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>{t("features-s2")}</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex items-start lg:items-center">
            <Squirrel className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">{t("features-t3")}</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>{t("features-s3")}</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start">
            <LucideWaves className="mr-2 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">{t("features-t4")}</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>{t("features-s4")}</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start">
            <PawPrint className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md font-semibold text-black">{t("features-t5")}</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>{t("features-s5")}</p>
          </div>
        </div>
        <div className=" p-4">
          <div className="feature flex lg:items-center items-start ">
            <Zap className="mr-2 mt-1 lg:mt-0 text-black" />
            <span className="Bedroom md:text-xl text-md  font-semibold text-black">{t("features-t6")}</span>
          </div>
          <div className=" md:ml-10 ml-8 py-1 text-sm text-my-light-grey ">
            <p>{t("features-s6")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
