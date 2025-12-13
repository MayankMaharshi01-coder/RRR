import { useContext, useState, useEffect } from "react";
import Item from "../components/Item";
import HomeVideo from "../components/HomeVideo";
import DetailCard from "../components/DetailCard";
import Slidebar from "../components/Slidebar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { AllProductsData } from "../context/AllProducts";
import { getProducts } from "../components/form/api";

// const dummyData = [
//   {
//     id: 1,
//     imgUrl:
//       "https://image.hm.com/assets/hm/fb/1e/fb1ec5f3e79a3009b91bc9f12dc45156f01ded57.jpg?imwidth=768",
//     category: "Clothes",
//     name: "T-Shirt",
//     schoolName: "Govt. Sr. Sec. School, Churu",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 2,
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZ-CZnV61bW5vGxMEawHW5eaQ2YUJEtundA&s",
//     category: "Clothes",
//     name: "Shirt",
//     schoolName: "Bal Mandir Sr. Sec. School, Churu",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 3,
//     imgUrl:
//       "https://img.freepik.com/premium-vector/old-book-white_87946-1711.jpg",
//     category: "Stationary",
//     name: "Book",
//     schoolName: "Govt. Sr. Sec. School, Ratangarh",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 4,
//     imgUrl:
//       "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/f/o/z/-original-imahgcsbdgjyzhjk.jpeg?q=90",
//     category: "Footwear",
//     name: "Sports Shoes",
//     schoolName: "Bal Mandir Sr. Sec. School, Ratangarh",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 5,
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFor6CDjURiWu8ESSKM_ulurZ5pj602h4pfg&s",
//     category: "Bag",
//     name: "School Bag",
//     schoolName: "Govt. Sr. Sec. School, Sujangarh",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 6,
//     imgUrl:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v5SbBcLqbOIaX0N7jAwoU9e1RsmtSD7Atg&s",
//     category: "Stationary",
//     name: "Book",
//     schoolName: "Bal Mandir Sr. Sec. School, Sujangarh",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 7,
//     imgUrl:
//       "https://matrixbags.com/wp-content/uploads/2024/12/IMG_1457-600x871.jpeg",
//     category: "Bag",
//     name: "School Bag",
//     schoolName: "Govt. Sr. Sec. School, Taranagar",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 8,
//     imgUrl:
//       "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Back_Packs/YPB0BCYY84QL_1.jpg&resizeTo=600",
//     category: "Bag",
//     name: "School Bag",
//     schoolName: "Bal Mandir Sr. Sec. School, Taranagar",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 9,
//     imgUrl:
//       "https://surfboardempire.com.au/cdn/shop/files/OSStandardIssue-Black2_1080x.jpg?v=1693439030",
//     category: "Footwear",
//     name: "Black Sneakers",
//     schoolName: "Govt. Sr. Sec. School, Bidasar",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 10,
//     imgUrl:
//       "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019-012/mzw718.jpg",
//     category: "Stationary",
//     name: "Book",
//     schoolName: "Adarsh Vidya Mandir, Bidasar",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 11,
//     imgUrl:
//       "https://matrixbags.com/wp-content/uploads/2024/12/IMG_1457-600x871.jpeg",
//     category: "Bag",
//     name: "School Bag",
//     schoolName: "Govt. Sr. Sec. School, Sardarshahar",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 12,
//     imgUrl:
//       "https://www.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=med-s3/yP-mplace/Bags/Back_Packs/YPB0BCYY84QL_1.jpg&resizeTo=600",
//     category: "Bag",
//     name: "School Bag",
//     schoolName: "Seth Moti Lal School, Sardarshahar",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 13,
//     imgUrl:
//       "https://surfboardempire.com.au/cdn/shop/files/OSStandardIssue-Black2_1080x.jpg?v=1693439030",
//     category: "Footwear",
//     name: "Sneakers",
//     schoolName: "Govt. Sr. Sec. School, Rajgarh",
//     description: " It is a awesome product.",
//   },
//   {
//     id: 14,
//     imgUrl:
//       "https://cdn.exoticindia.com/images/products/thumbnails/t800x600/books-2019-012/mzw718.jpg",
//     category: "Stationary",
//     name: "Book",
//     schoolName: "Tagore Public School, Rajgarh",
//     description: " It is a awesome product.",
//   },
// ];

function Home() {
 const [productData, setProductData] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProductData(data);
      console.log(data);
    });
  }, []);




  const schoolName = localStorage.getItem("schoolName");
  const dummyData = useContext(AllProductsData).filter(
    (item) => item.schoolName === schoolName
  );
  const [openDrop, setDrop] = useState(false);
  const openDropdown = () => {
    setDrop(!openDrop);
  };

  const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyData);
  const [detailCard, setdetailCard] = useState({
    imgUrl: "",
    name: "",
    category: "",
    description: "",
    schoolName: "",
  });
  const { contextSafe } = useGSAP();
  const fun = contextSafe(() => {
    gsap.to(".cardOfDetailProduct", {
      display: "flex",
      opacity: 1,
    });
  });

  gsap.registerPlugin(useGSAP);

  function handleInput(event) {
    const newSearch = event.target.value;

    setSearch(newSearch);

    let newdata = dummyData.filter(function ({ name }) {
      return name.toLowerCase().indexOf(newSearch.toLowerCase()) != -1;
    });

    setData(newdata);
  }

  const handleClick = (e) => {
    document.body.classList.add("no-scroll");

    const detailId = e.target.id
    
    productData.forEach((item) => {
      if (
      detailId === item._id
      ) {
        setdetailCard(item);
        console.log(detailCard, item);
      }
    });

    fun();
  };

  const handleCategoryClick = (category) => {
    setSearch("");
    if (category === "ALL") {
      setData(productData);
      return;
    } else {
      let newdata = productData.filter(
        (item) => item.category.toUpperCase() === category.toUpperCase()
      );
      setData(newdata);
      console.log(newdata);
      setData(newdata);
    }
  };

 
  return (
    <>
      <Slidebar />
      <div className="bg-[#D9E4DD] text-3xl sm:text-4xl md:text-5xl">
        <div className="flex flex-col w-full bg-[#f0f8ef] p-4 rounded-t-3xl">
          <div className="flex items-center lg:flex-row flex-col justify-around">
            <div className="flex flex-col">
              <input
                className="bg-white w-full sm:w-80 md:w-96 lg:w-[500px] mx-auto text-3xl p-6 h-15 m-10 shadow-md rounded-xl  "
                value={search}
                placeholder="Search..."
                onInput={handleInput}
              />
            </div>

            <div className="text-green-800 flex 2xl:hidden flex-col justify-center right-1 items-center">
              {!openDrop && (
                <div
                  onClick={openDropdown}
                  className="text-3xl font-serif font-semibold mb-10 flex items-center cursor-pointer"
                >
                  
                  <h1>Sort Products</h1>
                  <RiArrowDropDownLine size={50} />
                </div>
              )}

              {openDrop && (
                <div
                  onClick={openDropdown}
                  className="text-3xl lg:hidden top-0 font-serif font-semibold flex items-center cursor-pointer"
                >
                  <h1>Sort Products</h1>
                  <RiArrowDropUpLine size={50} />
                </div>
              )}

              {openDrop ? (
                <div className="ease-in duration-1000">
                  <div className="xl:flex justify-around py-4 items-center bg-white shadow-2xl text-green-100 mb-10 overflow-y-hidden max-w-fit lg:w-fit right-auto opacity-99 rounded-xl max-h-fit flex flex-col gap-4 px-8 tracking-tighter">
                    <div className="w-full flex">
                      <div
                        onClick={() => handleCategoryClick("ALL")}
                        className="flex font-semibold border-4 shadow-[2px_4px_10px_4px_#b6b4b4] bg-white rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 gap-2 2xl:gap-8 w-full lg:w-5/6 px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
                      >
                        <h4 className="text-2xl">ALL ITEMS</h4>
                      </div>
                      <div className="w-1/6 bg-white rounded-lg lg:flex justify-center max-h-12 items-center hidden right-5">
                        {openDrop && (
                          <div
                            onClick={openDropdown}
                            className="2xl:hidden rounded-full shadow-[2px_4px_10px_4px_#b6b4b4] text-green-800 cursor-pointer z-20"
                          >
                            <RiArrowDropUpLine size={40} />
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      onClick={() => handleCategoryClick("Clothes")}
                      className="flex font-semibold border-4 shadow-[2px_4px_10px_4px_#b6b4b4] rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-full px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
                    >
                      <img
                        className="max-w-16 rounded-4xl"
                        src="https://static.vecteezy.com/system/resources/previews/050/069/017/non_2x/green-leaf-on-hanger-icon-illustration-free-vector.jpg"
                        alt=""
                      />
                      <h4 className="text-2xl tracking-tighter">CLOTHES</h4>
                    </div>

                    <div
                      onClick={() => handleCategoryClick("Footwear")}
                      className="flex font-semibold border-4 shadow-[2px_4px_10px_4px_#b6b4b4] rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-full px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
                    >
                      <img
                        className="max-w-16 rounded-4xl"
                        src="https://img.freepik.com/premium-vector/kids-shoe-art-silhouettes-with-white-background_1066965-9418.jpg"
                        alt=""
                      />
                      <h4 className="text-2xl tracking-tighter">FOOTWEAR</h4>
                    </div>

                    <div
                      onClick={() => handleCategoryClick("Stationary")}
                      className="flex font-semibold border-4 shadow-[2px_4px_10px_4px_#b6b4b4] rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-full px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
                    >
                      <img
                        className="max-w-16 rounded-4xl"
                        src="https://media.istockphoto.com/id/174985205/photo/set-of-stationery-items.jpg?s=612x612&w=0&k=20&c=qjJO7Nlj4HrfDgemsKhHkJ-eZGCetulgbKu0JEALMu4="
                        alt=""
                      />
                      <h4 className="text-2xl tracking-tighter">STATIONARY</h4>
                    </div>

                    <div
                      onClick={() => handleCategoryClick("Bag")}
                      className="flex font-semibold border-4 shadow-[2px_4px_10px_4px_#b6b4b4] rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-full px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
                    >
                      <img
                        className="max-w-16 h-10 rounded-4xl"
                        src="https://static.vecteezy.com/system/resources/previews/045/871/966/non_2x/school-bag-packed-with-school-accessories-backpack-kids-bag-full-of-stationery-pens-notebooks-books-ruler-sticking-out-from-pockets-flat-illustration-isolated-on-white-background-vector.jpg"
                        alt=""
                      />
                      <h4 className="text-2xl tracking-tighter">BAGS</h4>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="overflow-y-hidden fixed z-10 top-[-1500%] w-fit flex items-center justify-center flex-col gap-10 ease-in duration-1000"></div>
              )}
            </div>
          </div>
          <h2 className="text-center text-6xl font-bold text-green-800 mb-8 font-serif">
            Available Products
          </h2>

          <div className="2xl:flex justify-around hidden min-h-36 items-center">
            <div
              onClick={() => handleCategoryClick("ALL")}
              className="flex font-semibold border-6 rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 min-w-fit px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
            >
              <h4 className="text-2xl">ALL ITEMS</h4>
            </div>

            <div
              onClick={() => handleCategoryClick("Clothes")}
              className="flex font-semibold border-6 rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-fit px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
            >
              <img
                className="max-w-16 rounded-4xl"
                src="https://static.vecteezy.com/system/resources/previews/050/069/017/non_2x/green-leaf-on-hanger-icon-illustration-free-vector.jpg"
                alt=""
              />
              <h4 className="text-2xl tracking-tighter">CLOTHES</h4>
            </div>

            <div
              onClick={() => handleCategoryClick("Footwear")}
              className="flex font-semibold border-6 rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-fit px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
            >
              <img
                className="max-w-16 rounded-4xl"
                src="https://img.freepik.com/premium-vector/kids-shoe-art-silhouettes-with-white-background_1066965-9418.jpg"
                alt=""
              />
              <h4 className="text-2xl tracking-tighter">FOOTWEAR</h4>
            </div>

            <div
              onClick={() => handleCategoryClick("Stationary")}
              className="flex font-semibold border-6 rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-fit px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
            >
              <img
                className="max-w-16 rounded-4xl"
                src="https://media.istockphoto.com/id/174985205/photo/set-of-stationery-items.jpg?s=612x612&w=0&k=20&c=qjJO7Nlj4HrfDgemsKhHkJ-eZGCetulgbKu0JEALMu4="
                alt=""
              />
              <h4 className="text-2xl tracking-tighter">STATIONARY</h4>
            </div>

            <div
              onClick={() => handleCategoryClick("Bag")}
              className="flex font-semibold border-6 rounded-xl 2xl:rounded-full text-green-800 font-serif justify-center items-center max-h-12 bg-white gap-2 2xl:gap-8 w-fit px-7 2xl:hover:mb-6 cursor-pointer hover:duration-500 border-green-800 overflow-hidden"
            >
              <img
                className="max-w-16 h-10 rounded-4xl"
                src="https://static.vecteezy.com/system/resources/previews/045/871/966/non_2x/school-bag-packed-with-school-accessories-backpack-kids-bag-full-of-stationery-pens-notebooks-books-ruler-sticking-out-from-pockets-flat-illustration-isolated-on-white-background-vector.jpg"
                alt=""
              />
              <h4 className="text-2xl tracking-tighter">BAGS</h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-center px-4">
            {/* {productData.map((product, index) => {
              return <div className="flex bg-white p-3 gap-7 max-w-full flex-wrap items-center flex-col">
                <img src={`http://localhost:3000/${product.thumbnail}`} alt={product.title} className="w-32 h-32 object-cover" />
                <h1>{product.title}</h1>
                <h1>{product.description}</h1>
              </div>
           })} */}

            {productData.map(function ({
              category,
              name,
              thumbnail,
              description,
              schoolName,
              _id,
            }) {
              return (
                <Item
                  category={category}
                  name={name}
                  imgUrl={`http://localhost:3000/${thumbnail}`}
                  description={description}
                  schoolName={schoolName}
                  key={_id}
                  id={_id}
                  goodsData={productData}
                  handleClick={handleClick}
                />
              );
            })}

            {/* {data.map(function ({
              category,
              name,
              imgUrl,
              description,
              schoolName,
              id,
            }) {
              return (
                <Item
                  category={category}
                  name={name}
                  imgUrl={imgUrl}
                  description={description}
                  schoolName={schoolName}
                  key={id}
                  id={id}
                  goodsData={dummyData}
                  handleClick={handleClick}
                />
              );
            })} */}
          </div>
        </div>
      </div>
      <DetailCard
        detailCard={{
          imgUrl: `http://localhost:3000/${detailCard.thumbnail}`,
          category: detailCard.category,
          name: detailCard.name,
          description: detailCard.description,
          schoolName: detailCard.schoolName,
        }}
      />
    </>
  );
}

export default Home;
