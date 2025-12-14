import RRRCenter from "../components/InspiringCenter";
import SchoolDetail from "../components/SchoolsDetails";
import Slidebar from "../components/Slidebar";
import { Link } from "react-router-dom";
export default function RRRPage() {
  return (
  <>
      <Slidebar />
  <div className="w-full min-h-full bg-[#D9E4DD] flex flex-col">

  <div className="">

    <div className="pt-12 pb-4 text-center">
      <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-sm">
        Rajasthan RRR Center Initiative
      </h1>
      <p className="text-gray-500 mt-2 text-lg">
        पुनः उपयोग • पुनर्चक्रण • संसाधन संरक्षण
      </p>
    </div>

    <div className="max-w-6xl mx-auto px-4">
      <RRRCenter />
    </div>


    <div className="max-w-6xl mx-auto mt-25 px-4">
      <h2 className="text-3xl font-bold mb-4 text-green-800 text-center">
        Schools Contribution Ranking
      </h2>

      <div className="h-1 w-96 bg-green-400 mx-auto rounded-full mb-6" />

      <SchoolDetail />
    </div>
  </div>
</div>
</>
  );
}