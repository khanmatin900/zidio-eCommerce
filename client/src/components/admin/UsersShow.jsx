import React, { useEffect, useState } from "react";

const ShowVendors = () => {
	const [vendors, setVendors] = useState([]);

	useEffect(() => {
		const fetchVendors = async () => {
			const data = [
				{
					id: 1,
					name: "Rahul",
					email: "vendorA@example.com",
					avatar: "",
				},
				{
					id: 2,
					name: "Ankit",
					email: "vendorB@example.com",
					avatar: "",
				},
				{
					id: 3,
					name: "Mukul",
					email: "vendorC@example.com",
					avatar: "",
				},
				{
					id: 4,
					name: "Bikash",
					email: "vendorC@example.com",
					avatar: "",
				},
				{
					id: 5,
					name: "Ankur",
					email: "vendorC@example.com",
					avatar: "",
				},
				{
					id: 6,
					name: "Ankur",
					email: "vendorC@example.com",
					avatar: "",
				},
				{
					id: 7,
					name: "Ankur",
					email: "vendorC@example.com",
					avatar: "",
				},
			];
			setVendors(data);
		};

		fetchVendors();
	}, []);

	return (
		<div className="p-6 mx-auto bg-gray-800 text-white w-full rounded-xl">
			<h2 className="text-lg font-semibold mb-2">Vendors</h2>
			{vendors.length > 0 ? (
				<ul className="space-y-4 flex justify-center gap-2 flex-wrap">
					{vendors.map((vendor) => (
						<img
							key={vendor.id}
							src="https://i.pravatar.cc/40"
							alt="User Avatar"
							className="w-15 h-15 rounded-full object-cover"
						/>
					))}
				</ul>
			) : (
				<p className="text-center text-gray-600">Loading vendors...</p>
			)}
		</div>
	);
};

export default ShowVendors;
