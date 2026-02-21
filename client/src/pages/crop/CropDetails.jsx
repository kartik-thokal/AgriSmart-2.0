import { useParams } from "react-router-dom";
import { crops } from "../../utils/cropData";

const CropDetails = () => {
  const { cropName } = useParams();
  const crop = crops[cropName];

  if (!crop) {
    return <div className="p-10">Crop not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 pt-4 pb-12">
      <h1 className="text-4xl font-bold text-green-600 mb-8">
        {crop.name}
      </h1>

      <div className="space-y-6">
        {Object.entries(crop.sections).map(([key, value]) => (
          <div key={key} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold capitalize mb-2">
              {key.replace(/([A-Z])/g, " $1")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropDetails;
