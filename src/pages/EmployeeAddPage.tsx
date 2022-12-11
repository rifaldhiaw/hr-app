import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { useMatch } from "@tanstack/react-router";
import dayjs from "dayjs";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { pb } from "../utils";
import { employeeRoute } from "./EmployeePage";

export const employeeAddRoute = employeeRoute.createRoute({
  path: "/add",
  component: () => {
    const { register, watch, handleSubmit, control } = useForm();
    const { loaderData, navigate } = useMatch(employeeAddRoute.id);

    const onSubmit = async (data: any) => {
      data.joinDate = dayjs(data.joinDate).toJSON();
      data.avatar = data.avatar[0];
      data.birthDate = dayjs(data.birthDate).toJSON();
      data.companyId = "a6ph4rp83tby39p";

      var formData = new FormData();
      for (var key in data) {
        formData.append(key, data[key]);
      }

      await pb.collection("employees").create(formData);
      navigate({
        to: "/employee",
      });
    };

    const inputAvatarRef = useRef<HTMLInputElement | null>(null);
    const { ref: avatarRef, ...avatarRest } = register("avatar");

    const [avatar] = watch(["avatar"]);
    const avatarUrl =
      avatar && avatar.length ? URL.createObjectURL(avatar[0]) : undefined;

    return (
      <form
        className="flex gap-1 flex-col bg-base-100 text-base-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <div
            className="flex-1 flex items-center justify-center border border-dashed border-slate-300 rounded-lg cursor-pointer"
            onClick={() => inputAvatarRef.current?.click()}
          >
            <div className="w-40 h-40 rounded-full border border-slate-200 bg-slate-100 overflow-hidden">
              {avatarUrl && (
                <img
                  src={avatarUrl}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <input
              {...avatarRest}
              ref={(e) => {
                avatarRef(e);
                inputAvatarRef.current = e;
              }}
              className="hidden"
              accept=".jpg, .jpeg, .png"
              type="file"
            />
          </div>

          {/* LEFT */}
          <div className="flex flex-1 flex-col gap-3">
            {/* name */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Employee name:</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
              />
            </div>

            {/* department */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Department:</span>
              </label>
              <select
                {...register("departmentId")}
                className="select select-bordered w-full"
              >
                {loaderData.departments.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* join date */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Join Date</span>
              </label>

              <Controller
                name="joinDate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    onChange={field.onChange}
                    value={field.value}
                    calendarClassName="z-50"
                    shouldHighlightWeekends
                    renderInput={({ ref }) => (
                      <input
                        readOnly
                        ref={ref as React.RefObject<HTMLInputElement>}
                        className="input input-bordered w-full"
                        value={
                          field.value
                            ? dayjs(field.value).format("DD/MM/YYYY")
                            : ""
                        }
                      />
                    )}
                  />
                )}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-1 flex-col gap-3">
            {/* birth date */}
            <div className="flex flex-col">
              <label className="label">
                <span className="label-text">Birth Date</span>
              </label>

              <Controller
                name="birthDate"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    onChange={field.onChange}
                    value={field.value}
                    shouldHighlightWeekends
                    calendarClassName="z-50"
                    renderInput={({ ref }) => (
                      <input
                        readOnly
                        ref={ref as React.RefObject<HTMLInputElement>}
                        className="input input-bordered w-full"
                        value={
                          field.value
                            ? dayjs(field.value).format("DD/MM/YYYY")
                            : ""
                        }
                      />
                    )}
                  />
                )}
              />
            </div>

            {/* gender */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Gender:</span>
              </label>
              <select
                {...register("gender")}
                className="select select-bordered w-full"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* phone nmumber */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Phone Number:</span>
              </label>
              <input
                {...register("phoneNumber")}
                type="text"
                placeholder="123456789"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex-1"></div>

        <button
          type="submit"
          className="btn btn-primary w-56 self-center md:self-end my-10"
        >
          Submit
        </button>
      </form>
    );
  },
});
