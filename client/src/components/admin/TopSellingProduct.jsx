import { PieChart, Pie, Cell } from "recharts";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";

export default function TopSellingCategories() {
	const data = [
		{
			name: "Oversized",
			value: 1754,
			color: "#6366f1",
			change: 0.64,
		},
		{
			name: "Graphic Printed",
			value: 1234,
			color: "#f97316",
			change: -2.75,
		},

		{
			name: "Polo T-Shirts",
			value: 878,
			color: "#22c55e",
			change: 1.54,
		},
		{
			name: "Hooded",
			value: 270,
			color: "#06b6d4",
			change: 1.54,
		},
		{
			name: "Crop Tops",
			value: 456,
			color: "#a855f7",
			change: -0.12,
		},
	];

	const COLORS = data.map((d) => d.color);
	const totalSales = data.reduce((sum, d) => sum + d.value, 0);

	const selectData = [
		{ value: 1, label: "Last Week" },
		{ value: 2, label: "Last Month" },
		{ value: 3, label: "Last Year" },
	];
	return (
		<div className="bg-gray-800 text-white p-6 rounded-xl w-full max-w-sm shadow-lg">
			<div className="mb-4 flex justify-between items-center">
				<h2 className="text-lg font-semibold">
					Top Selling categories
				</h2>
				<select className="bg-[#735dff] hover:bg-[#735dff9c]  border border-gray-600 text-sm text-white rounded px-2 py-1 outline-none">
					{selectData.map((item, index) => (
						<option
							style={{
								backgroundColor: "#1f2937",
								color: "#ffffff",
							}}
							key={index}
						>
							{item.label}
						</option>
					))}
				</select>
			</div>

			<div className="flex justify-center items-center">
				<PieChart width={200} height={200}>
					<Pie
						data={data}
						cx="50%"
						cy="50%"
						innerRadius={80}
						outerRadius={100}
						paddingAngle={0}
						dataKey="value"
						stroke="none"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index]} />
						))}
					</Pie>
				</PieChart>
				<div className="absolute text-white font-semibold text-xl">
					<p className="text-center">Total Sales</p>
					<p className="text-center text-2xl">{totalSales}</p>
				</div>
			</div>

			<div className="mt-6 space-y-3">
				{data.map((item) => (
					<div
						key={item.name}
						className="flex justify-between items-center"
					>
						<div className="flex items-start flex-col">
							<div className="flex items-center gap-2">
								<span
									className="w-3 h-3 rounded-full"
									style={{ backgroundColor: item.color }}
								></span>
								<span className="text-md font-medium">
									{item.name}
								</span>
							</div>
							<div className="flex items-center gap-1 text-gray-400">
								{item.change >= 0 ? (
									<div className="text-sm flex items-center gap-1">
										<span>Increased by </span>
										<span className="text-sm md:text-md text-green-400">
											{Math.abs(item.change)}%
										</span>
										<IoMdTrendingUp className="text-sm md:text-md text-green-400" />
									</div>
								) : (
									<div className="text-sm flex items-center gap-1 ">
										<span>Decreased by </span>
										<span className="text-sm md:text-md text-green-400">
											{Math.abs(item.change)}%
										</span>
										<IoMdTrendingDown className="text-sm md:text-md text-red-400" />
									</div>
								)}
							</div>
						</div>

						<div className="flex flex-col items-end text-sm">
							<span className="text-white">{item.value}</span>
							<span className="text-white">Sales</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
