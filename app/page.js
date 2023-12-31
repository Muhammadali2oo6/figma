import HomeHeroHeader from "@/src/Components/Home/HomeHeroHeader";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <>
      <HomeHeroHeader />
      <div className="container mx-auto flex flex-wrap justify-between py-20 gap-10">
        {data.slice(0, 6).map((item) => {
          return (
            <>
              <Link href={`/product/${item.id}`}>
                <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
                  <img
                    src={item.image}
                    alt="plant"
                    className="h-[300px] object-cover w-full"
                  />
                  <div className="p-5">
                    <p className="text-xl mb-5 text-gray-700">
                      {item.title.slice(0, 40)}
                    </p>
                    <p className="text-medium mb-5 text-gray-700">
                      {item.description.slice(0, 70)}
                    </p>
                    <button className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
                      See More
                    </button>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
