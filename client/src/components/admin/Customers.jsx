import React, { useEffect, useRef, useState } from "react";
import PageTobLabel from "./PageTobLabel";
import { FaEye, FaSearch, FaTrash } from "react-icons/fa";

const customers = [
	{
		id: 1,
		CustomerID: "#2FER48Z",
		name: "Modern Sofa",
		TotalOrder: 1,
		JoinedDate: "2024-05-18",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 2,
		CustomerID: "#2FEE48Z",
		name: "Ankit Ram",
		TotalOrder: 1,
		JoinedDate: "2024-03-18",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 3,
		CustomerID: "#2FYR48Z",
		name: "Ankur Mondol",
		TotalOrder: 7,
		JoinedDate: "2024-05-18",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 4,
		CustomerID: "#2FER48Z",
		name: "Modern Sofa",
		TotalOrder: 3,
		JoinedDate: "2024-05-17",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 5,
		CustomerID: "#2FEFR48Z",
		name: "Modern Sofa",
		TotalOrder: 4,
		JoinedDate: "2025-05-18",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 6,
		CustomerID: "#2FER4GZ",
		name: "Sofa Sofa",
		TotalOrder: 5,
		JoinedDate: "2024-05-18",
		avatar: "https://i.pravatar.cc/40",
	},
	// Add this to the `customers` array:
	{
		id: 7,
		CustomerID: "#2FEFFFZ",
		name: "Mona Lisa",
		TotalOrder: 8,
		JoinedDate: "2023-12-11",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 8,
		CustomerID: "#2AXR48Z",
		name: "David Warner",
		TotalOrder: 6,
		JoinedDate: "2024-04-22",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 9,
		CustomerID: "#2XZZ48Z",
		name: "Akash Singh",
		TotalOrder: 9,
		JoinedDate: "2024-02-10",
		avatar: "https://i.pravatar.cc/40",
	},
	{
		id: 10,
		CustomerID: "#2FOK48Z",
		name: "John Smith",
		TotalOrder: 2,
		JoinedDate: "2025-01-25",
		avatar: "https://i.pravatar.cc/40",
	},
];

const Customers = () => {
	const [sortKey, setSortKey] = useState("");
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 7;
	useEffect(() => {
		setCurrentPage(1);
	}, [searchQuery, sortKey]);

	const dropdownRef = useRef();

	const filteredAndSortedCustomers = [...customers]
		.filter(
			(customer) =>
				customer.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				customer.CustomerID.toLowerCase().includes(
					searchQuery.toLowerCase()
				)
		)
		.sort((a, b) => {
			if (sortKey === "date") {
				return new Date(b.JoinedDate) - new Date(a.JoinedDate);
			} else if (sortKey === "orderLowToHigh") {
				return a.TotalOrder - b.TotalOrder;
			} else if (sortKey === "orderHighToLow") {
				return b.TotalOrder - a.TotalOrder;
			}
			return 0;
		});

	const totalPages = Math.ceil(
		filteredAndSortedCustomers.length / itemsPerPage
	);
	const paginatedCustomers = filteredAndSortedCustomers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	return (
		<div className="py-2 md:py-4">
			<PageTobLabel
				label="Let's drive in and See your customer data !"
				name="Mr. Jack"
				page="Customers"
			/>
			<div className="bg-gray-800 p-4 rounded-lg shadow-md w-[100%]">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-xl font-semibold text-white">
						Customers
					</h2>
					<div className="flex items-center gap-2">
						<div className="relative w-full">
							<span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
								<FaSearch />
							</span>
							<input
								type="text"
								placeholder="Search Here"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="pl-10 pr-3 py-2 text-sm rounded-md border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 w-full"
							/>
						</div>
						<div className="bg-[#735dff] hover:bg-[#735dff9c]  rounded-md ">
							<select
								className="appearance-none px-4 py-2 text-sm rounded-md border border-gray-600 bg-transparent text-white focus:outline-none"
								value={sortKey}
								onChange={(e) => setSortKey(e.target.value)}
							>
								<option value="" disabled hidden>
									Sort By
								</option>
								<option value="date" className="text-black">
									Join Date (Newest)
								</option>
								<option
									value="orderLowToHigh"
									className="text-black"
								>
									Total Order: Low to High
								</option>
								<option
									value="orderHighToLow"
									className="text-black"
								>
									Total Order: High to Low
								</option>
							</select>
						</div>
					</div>
				</div>

				<div className="tb-box w-[84vw] md:w-full relative overflow-x-auto">
					<table className="w-full text-sm text-gray-300">
						<thead>
							<tr className="bg-[#735dff] text-gray-100">
								<th className="p-3 text-left">Customer ID</th>
								<th className="p-3 text-left">Customer Name</th>
								<th className="p-3 text-left">Total Order</th>
								<th className="p-3 text-left">Join Date</th>
								<th className="p-3 text-left">Action</th>
							</tr>
						</thead>
						<tbody>
							{paginatedCustomers.map((customer) => (
								<tr
									key={customer.id}
									className="border-b border-gray-700 hover:bg-gray-700 whitespace-nowrap"
									ref={dropdownRef}
								>
									<td className="p-3">
										<div>
											<div className="font-semibold text-white">
												{customer.CustomerID}
											</div>
										</div>
									</td>

									<td className="p-3 flex items-center gap-2">
										<img
											src={customer.avatar}
											alt={customer.name}
											className="w-6 h-6 rounded-full"
										/>
										{customer.name}
									</td>
									<td className="p-3">
										{customer.TotalOrder}
									</td>

									<td className="p-3">
										{customer.JoinedDate}
									</td>
									<td className="p-3 flex gap-2 relative items-center ">
										<button className="bg-purple-600 p-1 rounded hover:bg-purple-500 cursor-pointer">
											<FaEye size={14} />
										</button>
										<button className="bg-orange-600 p-1 rounded hover:bg-orange-500 cursor-pointer">
											<FaTrash size={14} />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="flex justify-between items-center mt-4 text-sm text-gray-400">
					<span>
						Showing {paginatedCustomers.length} of{" "}
						{filteredAndSortedCustomers.length} entries
					</span>
					<div className="space-x-2">
						<button
							className="text-gray-400 hover:text-white"
							onClick={() =>
								setCurrentPage((prev) => Math.max(prev - 1, 1))
							}
							disabled={currentPage === 1}
						>
							Prev
						</button>
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i + 1}
								className={`px-2 py-1 rounded ${
									currentPage === i + 1
										? "bg-purple-600 text-white"
										: "text-gray-400 hover:text-white"
								}`}
								onClick={() => setCurrentPage(i + 1)}
							>
								{i + 1}
							</button>
						))}
						<button
							className="text-gray-400 hover:text-white"
							onClick={() =>
								setCurrentPage((prev) =>
									Math.min(prev + 1, totalPages)
								)
							}
							disabled={currentPage === totalPages}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customers;
