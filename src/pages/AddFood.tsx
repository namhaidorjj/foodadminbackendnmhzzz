import React, { useState } from "react";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { CreateFoodValidation } from "@/components/CreateFoodValidation";
import { Form, useFormik, validateYupSchema } from "formik";
import { instance } from "@/components/instance";

export default function AddFood() {
  const router = useRouter();
  const [img, setImg] = useState(null);
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      foodName: "",
      foodIngredients: "",
      foodPrice: "",
    },
    validationSchema: CreateFoodValidation,
    onSubmit: () => {},
  });
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!img) {
      return;
    }
    const food = {
      foodName: values.foodName,
      ingredients: values.foodIngredients,
      price: values.foodPrice,
    };
    const formData = new FormData();
    formData.append("food", JSON.stringify(food));
    formData.append("image", img);
    const res = await fetch("http://localhost:8080/createFood", {
      method: "POST",
      body: formData,
    });
    if (res.status == 201) {
      return router.push("./");
    }
  };
  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <Header />
      </div>
      <div className="flex flex-col items-center">
        <form
          onSubmit={(e) => createUser(e)}
          className="absolute z-30 my-32 flex flex-col bg-white items-center w-1/3 rounded-lg h-fit pb-4 border-[1px] border-solid border-black">
          <div className="flex flex-col w-full">
            <div className="flex justify-between p-2">
              <button className="w-8 h-8"></button>
              <p className="text-black font-bold text-xl pr-12">Create food</p>
              <p></p>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 mt-4">
            <label className="text-gray-600 text-xs px-4">Хоолны нэр</label>
            <input
              id="foodName"
              value={values.foodName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-11/12 text-black rounded-lg h-12 mx-4 px-4 bg-gray-100"
              placeholder="Food"
              type="text"
            />
            {/* {errors.name ? (
          <p className="text-sm text-red-500 pl-8">{errors.name}</p>
        ) : null} */}
          </div>
          <div className="flex flex-col w-full gap-2 mt-4"></div>
          <div className="flex flex-col w-full gap-2 mt-4">
            <label className="text-gray-600 text-xs px-4">Хоолны орц</label>
            <input
              id="foodIngredients"
              value={values.foodIngredients}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-11/12 text-black rounded-lg h-12 mx-4 px-4 bg-gray-100"
              placeholder="Food"
              type="text"
            />
            {/* {errors.ingredients ? (
          <p className="text-sm text-red-500 pl-8">{errors.ingredients}</p>
        ) : null} */}
          </div>
          <div className="flex flex-col w-full gap-2 mt-4">
            <label className="text-gray-600 text-xs px-4">Хоолны үнэ</label>
            <input
              id="foodPrice"
              value={values.foodPrice}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-11/12 text-black rounded-lg h-12 mx-4 px-4 bg-gray-100"
              placeholder="Food"
              type="text"
            />
            {/* {errors.price ? (
          <p className="text-sm text-red-500 pl-8">{errors.price}</p>
        ) : null} */}
          </div>
          <div className="flex flex-col w-full mt-4 gap-4">
            <div className="flex items-center px-4 gap-4">
              <div className="form-control">
                <input type="checkbox" className="toggle" />
              </div>
              <label className="text-gray-600 text-xs">Хямдралтай эсэх</label>
            </div>

            <input
              className="w-11/12 text-black rounded-lg h-12 mx-4 px-4 bg-gray-100"
              placeholder="20%"
              type="number"
            />
          </div>
          <div className="flex flex-col justify-center w-full p-4">
            <label className="text-gray-600 text-xs">Хоолны зураг</label>
            <div className="w-1/2 px-4 h-fit py-8 gap-4 bg-gray-100 rounded-lg border-[1px] border-dashed border-gray-500 flex flex-col justify-center items-center my-4">
              <p className="text-xl font-semibold text-gray-700">
                Add image for the food
              </p>
              <input
                id="file"
                type="file"
                onChange={(e) => setImg(e.target.files[0])}
                multiple={false}
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="flex gap-4 items-center w-full justify-end pt-2 mr-2">
            <button className="text-black font-semibold">Clear</button>
            <button
              type="submit"
              className="bg-black text-white w-24 rounded-lg font-semibold h-8">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
