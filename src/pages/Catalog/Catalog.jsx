import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFiltersCars } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { fetchAllCars, fetchCars } from "../../redux/cars/operations";
import Loader from "../../components/Loader/Loader";
import CarItems from "../../components/CarItems/CarItems";
import { CarsMenu, CatalogContainer } from "./Catalog.styled";
import Filter from "../../components/Filter/Filter";
import LoadMore from "../../components/LoadMore/LoadMore";
import { v4 as uuid } from "uuid";
// import {
//   setBrandFilter,
//   setPriceFilter,
//   setMileageRangeFilter,
// } from "../../redux/cars/slice";

function Catalog() {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const [initialLoading, setInitialLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterMileageRange, setFilterMileageRange] = useState("");
  const [showLoadBtn, setShowLoadBtn] = useState(true);
  const [displayedCars, setDisplayedCars] = useState([]);

  const filteredCars = useSelector(selectFiltersCars);

  function onLoadMoreClick() {
    setPage((page) => page + 1);
  }

  function handleSearch(filters) {
    setFilterBrand(filters.brand);
    setFilterPrice(filters.price);

    setFilterMileageRange({
      min: filters.mileage.from,
      max: filters.mileage.to,
    });

    setPage(1);
  }

  useEffect(() => {
    async function fetchedData() {
      try {
        const response = await dispatch(fetchAllCars());
        setDisplayedCars(response.payload);

        // Fetch the initial set of cars with a limit
        await dispatch(fetchCars(page)).unwrap();
        // .then((res) => {
        //   const newCars = res;

        //   if (newCars.length > 0) {
        //     setDisplayedCars((prevCars) => [...prevCars, ...newCars]);
        //     setShowLoadBtn(newCars.length === 12);
        //   } else {
        //     setShowLoadBtn(false);
        //   }
        // })
      } catch (error) {
        console.log(error.message);
      } finally {
        setInitialLoading(false);
      }
    }
    fetchedData();
  }, [dispatch, page]);

  function filteredByCars() {
    const filtered = displayedCars.filter(
      (item) =>
        item.make === filteredCars.brand &&
        parseInt(item.rentalPrice.replace("$", "")) <= filteredCars.price &&
        item.mileage > filteredCars.mileageRange.min &&
        item.mileage <= filteredCars.mileageRange.max
    );
    return filtered;
  }

  const visibleCars = filteredByCars();

  return (
    <CatalogContainer>
      <Filter handleSearch={handleSearch} />
      <CarsMenu>
        {initialLoading ? (
          <Loader />
        ) : visibleCars.length === 0 && filteredCars.brand.length > 0 ? (
          <li>No matching cars found</li>
        ) : visibleCars.length > 0 ? (
          visibleCars.map((items) => {
            return <CarItems key={uuid()} items={items} />;
          })
        ) : (
          cars.map((items) => {
            return <CarItems key={uuid()} items={items} />;
          })
        )}
      </CarsMenu>
      {setShowLoadBtn && <LoadMore onLoadMoreClick={onLoadMoreClick} />}
    </CatalogContainer>
  );
}

export default Catalog;