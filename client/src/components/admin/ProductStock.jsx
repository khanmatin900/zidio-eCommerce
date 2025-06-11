import { PieChart, Pie, Cell, Tooltip } from "recharts";

const productStockData = [
	{
		name: "Oversized",
		stock: 300,
		color: "#6366f1",
	},
	{
		name: "Acid Wash",
		stock: 250,
		color: "#f5a623",
	},

	{
		name: "Graphic Printed",
		stock: 200,
		color: "#f97316",
	},
	{
		name: "Solid Color",
		stock: 150,
		color: "#4CAF50",
	},

	{
		name: "Polo T-Shirts",
		stock: 180,
		color: "#22c55e",
	},
	{
		name: "Long Sleeve",
		stock: 110,
		color: "#ffc107",
	},

	{
		name: "Henley",
		stock: 140,
		color: "#8e44ad",
	},
	{
		name: "Hooded",
		stock: 90,
		color: "#06b6d4",
	},
	{
		name: "Crop Tops (for women)",
		stock: 100,
		color: "#a855f7",
	},
];

const COLORS = productStockData.map((d) => d.color);
const totalStock = productStockData.reduce((sum, d) => sum + d.stock, 0);

export default function ProductStockChart() {
	return (
		<div className="bg-gray-800 text-white p-6 rounded-xl w-full max-w-sm shadow-lg h-full">
			<div className="flex justify-between items-center mb-4">
				<h2 className="text-lg font-semibold ">Product Stock</h2>
				<button className="text-nowrap px-3 py-1 text-sm bg-[#735dff] hover:bg-[#735dff9c]  text-gray-300  rounded border border-gray-700 ">
					Export ↗
				</button>
			</div>

			{/* Desktop Pie Chart */}
			<div className="hidden md:flex justify-center items-center relative">
				<PieChart width={200} height={200}>
					<Pie
						data={productStockData}
						dataKey="stock"
						cx="50%"
						cy="50%"
						innerRadius={60}
						outerRadius={100}
						stroke="none"
						paddingAngle={0}
					>
						{productStockData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={COLORS[index]} />
						))}
					</Pie>
					<Tooltip
						content={({ payload }) => {
							if (payload && payload.length) {
								const { name, stock } = payload[0].payload;
								return (
									<div className="bg-black py-2 px-4 rounded-lg text-white">
										<p>{name}</p>
										<p>{stock} in stock</p>
									</div>
								);
							}
							return null;
						}}
					/>
				</PieChart>
				<div className="absolute text-white font-semibold text-center">
					<p>Total Stock</p>
					<p className="text-2xl">{totalStock}</p>
				</div>
			</div>

			{/* <div className="mt-6 space-y-3 block md:hidden"> */}
			<div className="mt-6 space-y-3 ">
				{productStockData.map((item) => (
					<div
						key={item.name}
						className="flex justify-between items-center"
					>
						<div className="flex items-center gap-2">
							<span
								className="w-3 h-3 rounded-full"
								style={{ backgroundColor: item.color }}
							></span>
							<span className="text-md font-medium">
								{item.name}
							</span>
						</div>
						<div className="text-sm">
							<span className="text-white">{item.stock}</span>
							<span className="text-white ml-1">in stock</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
