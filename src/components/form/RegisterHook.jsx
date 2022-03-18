import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const RegisterHook = () => {
	const {
		handleSubmit,
		formState: { errors },
		control,
	} = useForm();
	const onSubmitHandler = values => {
		console.log(values);
	};
	return (
		<form
			onSubmit={handleSubmit(onSubmitHandler)}
			className="max-w-[300px] mx-auto my-10"
		>
			<div className="flex flex-col gap-3 text-left mb-5">
				<label htmlFor="username" className="cursor-pointer">
					Username
				</label>
				<InputHook
					name="username"
					placeholder="Enter your username"
					type="text"
					id="username"
					control={control}
				></InputHook>
				<p className="text-red-500 text-sm">
					Please enter your username
				</p>
			</div>
			<div className="flex flex-col gap-3 text-left mb-5">
				<label htmlFor="email" className="cursor-pointer">
					Email address
				</label>
				<InputHook
					name="email"
					placeholder="Enter your email"
					type="email"
					id="email"
					control={control}
				></InputHook>
				<p className="text-red-500 text-sm">Please enter your email</p>
			</div>
			<div className="flex flex-col gap-3 text-left">
				<label htmlFor="password" className="cursor-pointer">
					Password
				</label>
				<InputHook
					name="password"
					placeholder="Enter your password"
					type="password"
					id="password"
					control={control}
				></InputHook>
				<p className="text-red-500 text-sm">
					Please enter your password
				</p>
			</div>
			<div className="flex flex-col gap-3 text-left mb-5">
				<label className="cursor-pointer">Gender</label>
				<div className="flex items-center gap-5">
					<div className="flex items-center gap-x-3">
						<RadioHook
							name="gender"
							control={control}
							value="male"
						></RadioHook>
						<span>Male</span>
					</div>
					<div className="flex items-center gap-x-3">
						<RadioHook
							name="gender"
							control={control}
							value="female"
						></RadioHook>
						<span>Female</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-3 mb-5">
				<label htmlFor="" className="cursor-pointer">Are you</label>
				<DropdownHook control={control}></DropdownHook>
			</div>
			<div className="mt-5">
				<CheckboxHook
					name="term"
					control={control}
					text="I accept the terms and conditions"
				></CheckboxHook>
			</div>
			<button className="w-full p-3 bg-blue-500 text-white rounded-lg mt-5 text-lg font-semibold">
				Submit
			</button>
		</form>
	);
};
const myInput = () => {};
export default RegisterHook;
