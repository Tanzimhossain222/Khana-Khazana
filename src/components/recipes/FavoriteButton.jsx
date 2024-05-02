"use client";

import { toggleFavorite } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const FavoriteButton = ({ id }) => {
  const { auth, setAuth } = useAuth();

  const isFavoirte = auth?.favourites.includes(id);
  const [favorite, setFavorite] = useState(isFavoirte);

  const router = useRouter();

  const handleFavorite = async () => {

    try {
        if (!auth) {
            router.push("/login");
            return;
        }
        const { user } = await toggleFavorite(id, auth?.id);
        setAuth(user);
        setFavorite(!favorite);

        if (!favorite){
            toast.success("Recipe added to favorite",{
                position: "top-right",
                autoClose: 1200,
            });
        }
        else{
            toast.success("Recipe removed from favorite",{
                position: "top-right",
                autoClose: 1200,
            });
        }

    } catch (err) {
        toast.error(err.message,{
            position: "top-right",
            autoClose: 2000,
        });
    }
  };

  return (
    <div
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
      onClick={handleFavorite}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={favorite ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span>Favourite</span>
    </div>
  );
};

export default FavoriteButton;
