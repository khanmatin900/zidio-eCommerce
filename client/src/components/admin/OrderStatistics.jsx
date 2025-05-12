import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const data = [
	{ month: "Jan", delivered: 40, pending: 24, cancelled: 10 },
	{ month: "Feb", delivered: 30, pending: 35, cancelled: 20 },
	{ month: "Mar", delivered: 35, pending: 20, cancelled: 25 },
	{ month: "Apr", delivered: 50, pending: 30, cancelled: 22 },
	{ month: "May", delivered: 55, pending: 25, cancelled: 15 },
	{ month: "Jun", delivered: 40, pending: 30, cancelled: 30 },
	{ month: "Jul", delivered: 35, pending: 20, cancelled: 45 },
	{ month: "Aug", delivered: 25, pending: 15, cancelled: 30 },
	{ month: "Sep", delivered: 45, pending: 35, cancelled: 35 },
	{ month: "Oct", delivered: 50, pending: 30, cancelled: 20 },
	{ month: "Nov", delivered: 60, pending: 40, cancelled: 10 },
	{ month: "Dec", delivered: 70, pending: 35, cancelled: 55 },
];


export default function OrderStatistics() {
	return (
		<div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full">
			<div className="flex justify-between items-center mb-4 flex-col md:flex-row">
				<h2 className="text-lg font-semibold">Order Statistics</h2>
				<div className="flex gap-2">
					{["Day", "Week", "Month", "Year"].map((label, index) => (
						<button
							key={index}
							className={`px-4 py-1 text-sm rounded ${
								label === "Day"
									? "bg-purple-600 text-white"
									: "bg-gray-800 text-gray-400 hover:bg-gray-700"
							}`}
						>
							{label}
						</button>
					))}
					<button className="px-3 py-1 text-sm bg-[#735dff] hover:bg-[#735dff9c]  text-gray-300  rounded border border-gray-700 ">
						Export ↗
					</button>
				</div>
			</div>

			<ResponsiveContainer
				width="100%"
				height={300}
				className="rounded-xl h-[180px] md:h-[300px]"
			>
				<LineChart
					data={data}
					margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient
							id="chartBackground"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="0%"
								stopColor="#735dff42"
								stopOpacity={0.9}
							/>
							<stop
								offset="100%"
								stopColor="#111827"
								stopOpacity={0.9}
							/>
						</linearGradient>
					</defs>

					<rect
						x="0"
						y="0"
						width="100%"
						height="100%"
						fill="url(#chartBackground)"
					/>

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
						labelStyle={{ fontWeight: "bold",color: "#fff" }}
						itemStyle={{  color: "#fff" }}
					/>

					<Legend
						verticalAlign="top"
						align="center"
						iconType="circle"
						iconSize={8}
					/>

					<Line
						type="monotone"
						dataKey="delivered"
						stroke="#45b6fe"
						strokeWidth={1}
						activeDot={{ r: 3 }}
						name="Delivered"
					/>
					<Line
						type="monotone"
						dataKey="pending"
						stroke="#b5e2ff"
						strokeWidth={1}
						activeDot={{ r: 3 }}
						name="Pending"
					/>
					<Line
						type="monotone"
						dataKey="cancelled"
						stroke="#f43f5e"
						strokeWidth={1}
						activeDot={{ r: 3 }}
						name="Cancelled"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
