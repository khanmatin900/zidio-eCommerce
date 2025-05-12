import TopSellingCategories from "./TopSellingProduct";
import OrderStatistics from "./OrderStatistics";
import { FaClock, FaRupeeSign, FaShoppingBag, FaUsers } from "react-icons/fa";
import RecentOrders from "./RecentOrders";
import PageTobLabel from "./PageTobLabel";
const stats = [
	{
		title: "Total Revenue",
		value: "₹434241",
		link: "View full revenue",
		change: "+3.45%",
		changeType: "down",
		color: "bg-orange-500",
		icon: FaRupeeSign,
	},
	{
		title: "Total Orders",
		value: "32,981",
		link: "View all orders",
		change: "+0.29%",
		changeType: "up",
		color: "bg-violet-600",
		icon: FaShoppingBag,
	},
	{
		title: "Total Customers",
		value: "4,678",
		link: "Customer list",
		change: "+11.54%",
		changeType: "up",
		color: "bg-green-500",
		icon: FaUsers,
	},
	{
		title: "Pending Orders",
		value: "645",
		link: "Pending list",
		change: "+0.18%",
		changeType: "up",
		color: "bg-blue-500",
		icon: FaClock,
	},
];

const Dashboard = () => {
	return (
		<div className="py-2 md:py-4">
			<PageTobLabel
				label="Let's drive into and get things done !"
				name="Mr. Jack"
				page="Dashboard"
			/>
			<div className="flex md:flex-row flex-col gap-4 mb-4">
				<div className="w-full md:pr-4 flex flex-col gap-4">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
						{stats.map((stat, idx) => (
							<div
								key={idx}
								className="bg-gray-800 text-white py-5 px-3 rounded-xl shadow-md flex justify-between items-center"
							>
								<div>
									<h4 className="text-sm text-gray-400">
										{stat.title}
									</h4>
									<p className="text-2xl font-bold">
										{stat.value}
									</p>
									<a
										href="#"
										className="text-sm text-gray-400 underline underline-offset-2 hover:text-white"
									>
										{stat.link}
									</a>
									<p
										className={`text-sm mt-1 ${
											stat.changeType === "up"
												? "text-green-400"
												: "text-red-400"
										}`}
									>
										{stat.changeType === "up" ? "↑" : "↓"}{" "}
										{stat.change}
									</p>
								</div>
								<div
									className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.color}`}
								>
									<stat.icon className="text-white w-5 h-5" />
								</div>
							</div>
						))}
					</div>
					<OrderStatistics />
				</div>
				<TopSellingCategories />
			</div>
			<RecentOrders />
		</div>
	);
};

export default Dashboard;
