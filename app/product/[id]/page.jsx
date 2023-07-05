import Link from "next/link";
import React from "react";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}

const page = async ({ params: { id } }) => {
  const data = await getData(id);

  return (
    <div>
      <div className="container mx-auto py-20">
        <div className=" overflow-hidden rounded-xl bg-white shadow-md ">
          <img
            src={data.image}
            alt="plant"
            className="h-[300px] object-cover w-full"
          />
          <div className="p-5">
            <p className="text-xl mb-5 text-gray-700">{data.title}</p>
            <p className="text-medium mb-5 text-gray-700">{data.description}</p>
            <Link
              href={"/product"}
              className="w-full block text-center rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
            >
              Ortga
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
