"use server";

import { redirect } from "next/navigation";

export const searchAction = async (formData: FormData) => {
  const searchText = formData.get("search");
  //if the search input present
  if (typeof searchText !== "string" || !searchText) {
    redirect("/");
  }
  //if the search input not present
  redirect(`/articles?search=${searchText}`);
};
