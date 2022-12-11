import { useMatch, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginRoute } from "../App";
import { pb } from "../utils";

export const LoginPage = () => {
  const { search } = useMatch(loginRoute.id);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await pb.collection("users").authWithPassword(data.email, data.password);

    if (pb.authStore.isValid) {
      if (search.redirect) {
        router.history.push(search.redirect);
      } else {
        router.navigate({
          to: "/app/employee",
        });
      }
    }
    setIsLoading(false);
  };

  return (
    <form
      className="flex gap-1 flex-col bg-base-100 text-base-content w-80"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* email */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="johnDoe@mail.com"
          className="input input-bordered w-full"
        />
      </div>
      {/* passowrd */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Pasword</span>
        </label>
        <input
          {...register("password")}
          type="password"
          placeholder="***"
          className="input input-bordered w-full"
        />
      </div>

      <button
        type="submit"
        className={"btn mt-10 " + (isLoading ? "loading" : "")}
      >
        SUBMIT
      </button>
    </form>
  );
};
