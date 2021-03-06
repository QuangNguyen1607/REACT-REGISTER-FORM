import React from 'react';
import { useController } from 'react-hook-form';
import '../../CustomRadio.sass'
const RadioHook = ({ control, ...props }) => {
	const { field } = useController({
		control,
		name: props.name,
	})
	return (
		<label className='cursor-pointer custom-radio'>
			<input type="radio" {...field} {...props} className="hidden" />
			<div className="bg-white w-full h-full rounded-full"></div>
		</label>
	);
};

export default RadioHook;