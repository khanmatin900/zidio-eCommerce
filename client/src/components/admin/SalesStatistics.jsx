"use client";

import {
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const data = [
	{ month: "Jan", revenue: 60, profit: 20 },
	{ month: "Feb", revenue: 15, profit: 65 },
	{ month: "Mar", revenue: 80, profit: 85 },
	{ month: "Apr", revenue: 35, profit: 50 },
	{ month: "May", revenue: 75, profit: 40 },
	{ month: "Jun", revenue: 90, profit: 20 },
	{ month: "Jul", revenue: 50, profit: 20 },
	{ month: "Aug", revenue: 80, profit: 170 },
	{ month: "Sep", revenue: 120, profit: 75 },
	{ month: "Oct", revenue: 160, profit: 70 },
	{ month: "Nov", revenue: 110, profit: 75 },
	{ month: "Dec", revenue: 120, profit: 80 },
];

export default function SalesStatistics() {
	return (
		<div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full h-full">
			<div className="flex justify-between items-center mb-4 flex-col md:flex-row">
				<h2 className="text-lg font-semibold">Sales Statistics</h2>
				<button className="px-3 py-1 text-sm bg-[#735dff] hover:bg-[#735dff9c] text-gray-300 rounded border border-gray-700">
					Export ↗
				</button>
			</div>

			<ResponsiveContainer width="100%" height={300}>
				<ComposedChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
				>
					<XAxis dataKey="month" stroke="#9ca3af" />
					<YAxis stroke="#9ca3af" />
					<Tooltip
						cursor={false}
						contentStyle={{
							backgroundColor: "#1f2937",
							border: "1px solid #374151",
							borderRadius: "8px",
							color: "#fff",
						}}
						labelStyle={{ fontWeight: "bold", color: "#fff" }}
						itemStyle={{ color: "#fff" }}
					/>
					<Legend verticalAlign="top" align="center" iconType="circle" iconSize={8} />

					<Bar
						dataKey="revenue"
						fill="#818cf8"
						barSize={30}
						name="Revenue"
						radius={[4, 4, 0, 0]}
					/>
					<Bar
						dataKey="profit"
						fill="#2402ff"
						barSize={30}
						name="Profit"
						radius={[4, 4, 0, 0]}
					/>
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
}
