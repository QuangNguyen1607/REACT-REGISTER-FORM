import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
	const { field } = useController({
		control,
		name: props.name,
		defaultValue: "",
	});
	return <input className="p-4 border border-gray-100 rounded-lg outline-none bg-white focus:border-blue-500 transition-all" {...field} {...props}></input>;
	// <input defaultValue="test" {...register("example")} />
};

export default InputHook;
