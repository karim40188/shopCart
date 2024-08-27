import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSpecificBrand } from "../../features/BrandSlice";
import { useDispatch, useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
function SpecificBrand() {
  let { specificBrand, isLoading } = useSelector((state) => {
    return state.BrandsReducer;
  });
  let dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);
  useEffect(() => {
    dispatch(getSpecificBrand(id));
  }, []);
  return (
    <>
      {isLoading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass="justify-content-center align-items-center vh-100"
          visible={true}
        />
      ) : (
        <div className="row">
          <div>
            <img src={specificBrand?.image} alt="" />
            <p>{specificBrand?.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default SpecificBrand;
