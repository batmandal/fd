"use client";

import { api } from "@/common/axios";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { FoodType } from "../Foods";

type DataContextType = {
  categoryPost: (categoryName: String) => void;
  basketFood: CartFood[];
  setBasketFood: Dispatch<SetStateAction<CartFood[]>>;
  addFoodToCart: (params: CartFood) => void;
  imageUrl: string;
  setImageUrl: Dispatch<SetStateAction<string>>;
  foodPost: (
    name: string,
    categoryName: string,
    ingredient: string,
    price: number,
    onSale: boolean,
    saled: number,
    image: string
  ) => void;
  totalPrice: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
  foodCount: number;
  setFoodCount: Dispatch<SetStateAction<number>>;
};

export type CartFood = {
  food: FoodType;
  quantity: number;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [basketFood, setBasketFood] = useState<CartFood[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [foodCount, setFoodCount] = useState<number>(1);

  const [imageUrl, setImageUrl] = useState<string>("/default.webp");

  const categoryPost = async (categoryName: String) => {
    try {
      const { data } = await api.post("/categories", {
        categoryName,
      });

      toast.success(data.message);
    } catch (error) {
      console.log("add category error");
    }
  };

  const foodPost = async (
    name: string,
    categoryName: string,
    ingredient: string,
    price: number,
    onSale: boolean,
    saled: number,
    image: string
  ) => {
    try {
      const { data } = await api.post("/foods", {
        name,
        categoryName,
        ingredient,
        price,
        onSale,
        saled,
        image,
      });

      toast.success(data.message);
    } catch (error) {
      console.log("createFood error");
    }
  };

  const addFoodToCart = ({ food, quantity }: CartFood) => {
    setBasketFood((prev) => {
      return [...prev, { food, quantity }];
    });
  };
  useEffect(() => {
    const basketFood = localStorage.getItem("cart");
    if (basketFood) {
      const data = JSON.parse(basketFood);
      setBasketFood(data);
    }
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    if (isFirstRender) return;
    const data = JSON.stringify(basketFood);
    localStorage.setItem("cart", data);
  }, [basketFood]);

  return (
    <DataContext.Provider
      value={{
        categoryPost,
        basketFood,
        setBasketFood,
        addFoodToCart,
        imageUrl,
        setImageUrl,
        foodPost,
        totalPrice,
        setTotalPrice,
        foodCount,
        setFoodCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
