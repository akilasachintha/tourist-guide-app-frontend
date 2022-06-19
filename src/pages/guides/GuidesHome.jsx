import { useDispatch, useSelector } from "react-redux";
import { fetchGuides } from "../../redux/store/guidesSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/guide.jpg";

function GuidesHome() {
  const { guides } = useSelector((state) => state.guides);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchGuides());
    };
  }, [dispatch]);


  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.length !== 0 && (
            guides.map((guide) => (
              <div className="no-underline cursor-pointer" key={guide.userId}>
                <Link
                  to={`/guides/${guide.userId}`}
                  className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                  <div>
                    <img className="object-center object-cover w-[350px] h-[300px]"
                         src={guide.userPhotoUrl ? guide.userPhotoUrl : img}
                         alt="photo" />
                  </div>
                  <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">{guide.name}</p>
                    <p className="text-base text-gray-400 font-normal">{guide.email}</p>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default GuidesHome;
