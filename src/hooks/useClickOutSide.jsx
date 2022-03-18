import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = 'button') {
	const [show, setShow] = useState(false);
	const nodeRef = useRef(null);
	useEffect(() => {
		function handleClickOutDropdown(e) {
			// console.log(dropdownRef.current.contains(e.target)) // Hàm này có nghĩa là thằng dropdownRef có chứa cái e.target hay không - chứ không phải thằng e.target có chứ dropdownRef hay không
			console.log(e.target.matches('button'))
			if (
				nodeRef.current &&
				!nodeRef.current.contains(e.target) && !e.target.matches(dom) // Phương thức này matches là có button thì nó trả về true nhưng phủ định lại - check điều kiện cái nhấn vào ko phải là button
			) {
				setShow(false);
			}
		}
		document.addEventListener("click", handleClickOutDropdown);
		return () => {
			document.removeEventListener("click", handleClickOutDropdown);
		};
	}, []);
	return {
		show,
		setShow,
		nodeRef,
	}
}
