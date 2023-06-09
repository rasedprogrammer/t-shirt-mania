import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
	// const ring = useContext(RingContext);
	const [house, setHouse] = useContext(RingContext);
	return (
		<div>
			<h4>Special</h4>
			<p>
				<small>House: {house}</small>
			</p>
			<button onClick={() => setHouse(house + 1)}>Increase</button>
		</div>
	);
};

export default Special;
