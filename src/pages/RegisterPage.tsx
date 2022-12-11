import { useRouter } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { appRoute } from "../App";
import { pb } from "../utils";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    await pb.collection("users").create({
      name: data.name,
      email: data.email,
      password: data.passowrd,
      passwordConfirm: data.passwordConfirm,
    });

    await pb.collection("companies").create({
      name: data.companyName,
    });

    await pb.collection("users").authWithPassword(data.email, data.password);
    router.navigate({
      to: appRoute.id,
    });
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
          {...register("passowrd")}
          type="password"
          placeholder="******"
          className="input input-bordered w-full"
        />
      </div>

      {/* passowrd */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Confirm Pasword</span>
        </label>
        <input
          {...register("passwordConfirm")}
          type="password"
          placeholder="******"
          className="input input-bordered w-full"
        />
      </div>

      <div className="divider"></div>
      {/* user name */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Your Name</span>
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="John Doe"
          className="input input-bordered w-full"
        />
      </div>

      {/* company name */}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Company Name</span>
        </label>
        <input
          {...register("companyName")}
          type="text"
          placeholder="New Unicorn Inc."
          className="input input-bordered w-full"
        />
      </div>

      <input type="submit" className="btn mt-10" />
    </form>
  );
};
