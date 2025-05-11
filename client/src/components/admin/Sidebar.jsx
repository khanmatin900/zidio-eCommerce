import React, { useState } from "react";
import {
	FaUser,
	FaChartBar,
	FaSignOutAlt,
	FaBoxOpen,
	FaUsersCog,
	FaInstagram,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";
import { AiFillProduct } from "react-icons/ai";
import { RiMenuUnfold2Fill, RiMenuFold2Fill } from "react-icons/ri";
import {
	MdSettings,
	MdHelpOutline,
	MdHeadsetMic,
	MdOutlinePrivacyTip,
} from "react-icons/md";
const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(true);
	window.addEventListener("resize", () => {
		if (window.innerWidth > 768) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	});

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	const NavItem = [
		{
			attribute: "Main Home",
			pages: [
				{
					label: "Dashboard",
					icon: AiFillProduct,
          url:'/'
				},
			],
		},
		{
			attribute: "Pages",
			pages: [
				{
					label: "Orders",
					icon: TbShoppingBag,
          url:'/orders'
				},
				{
					label: "Products",
					icon: FaBoxOpen,
          url:'/products'
				},
				{
					label: "Analytics",
					icon: FaChartBar,
          url:'/analytics'
				},
				{
					label: "Customers",
					icon: FaUser,
          url:'/customers'
				},
			],
		},
		{
			attribute: "Setting",
			pages: [
				{
					label: "Settings",
					icon: MdSettings,
          url:'/settings'
				},
				{
					label: "Users",
					icon: FaUsersCog,
          url:'/users'
				},
			],
		},
		{
			attribute: "Support",
			pages: [
				{
					label: "Help Center",
					icon: MdHelpOutline,
          url:'/help'
				},
				{
					label: "FAQs",
					icon: MdHeadsetMic,
          url:'/faqs'
				},
				{
					label: "Privacy Policy",
					icon: MdOutlinePrivacyTip,
          url:'/privacy'
				},
			],
		},
		{
			attribute: "Contact us",
			pages: [
				{
					label: "",
					url: "https://www.facebook.com",
					icon: FaFacebook,
				},
				{
					label: "",
					url: "https://www.instragram.com",
					icon: FaInstagram,
				},
				{
					label: "",
					url: "https://www.linkdin.com",
					icon: FaLinkedin,
				},
				{
					label: "",
					url: "https://www.x.com",
					icon: FaTwitter,
				},
			],
		},
	];
	// {
	//   label: "Logout",
	//   icon: <FaSignOutAlt className="text-lg" />,
	// },
	return (
		<div className="flex bg-gray-900 text-white">
			{/* Sidebar */}
			<div
				className={`${
					isOpen ? "w-64 p-5" : "w-0 p-0"
				} bg-gray-800 h-screen overflow-y-scroll text-white transition-all duration-300 fixed md:relative z-10 `}
			>
				<div className="flex items-center justify-between p-4">
					<h1
						className={`${
							isOpen
								? "block"
								: "hidden"
						} text-xl font-bold`}
					>
						Admin Panel
					</h1>
					<button
						onClick={toggleSidebar}
						className="text-white focus:outline-none md:hidden"
					>
						<RiMenuUnfold2Fill />
					</button>
				</div>
				{NavItem.map((item, index) => (
					<div key={index} className="mt-4">
						<h2 className="text-gray-400 text-sm px-2 uppercase font-bold">
							{item.attribute}
						</h2>
						<ul
							className={`mt-2 ${
								item.pages[0]
									.label
									? "block"
									: "flex "
							}`}
						>
							{item.pages.map(
								(
									page,
									index
								) => (
									<li
										key={
											index
										}
										className="flex items-center p-2 hover:text-blue-500/50 cursor-pointer transition font-semibold"
									>
										{page.label ? (
											<a href={page.url} className="flex items-center">
												{" "}
												<page.icon className="text-xl" />
												<span
													className={`${
														isOpen
															? "ml-4"
															: "hidden"
													} md:block`}
												>
													{
														page.label
													}
												</span>
											</a>
										) : (
											<a
												className="inline "
												href={
													page.url
												}
												target="_blank"
												rel="noopener noreferrer"
											>
												{" "}
												<page.icon className="text-xl" />
											</a>
										)}
									</li>
								)
							)}
						</ul>
					</div>
				))}

				<button className="mt-4 cursor-pointer transition font-semibold flex items-center p-2 text-red-500/50">
					<FaSignOutAlt className="text-xl" />
					<sapn className=" text-sm px-2 uppercase font-bold">
						Logout
					</sapn>
				</button>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-4 ml-2 md:ml-0">
				<button
					onClick={toggleSidebar}
					className="text-white bg-gray-800 p-2 rounded-md md:hidden mb-4"
				>
					<RiMenuFold2Fill />
				</button>
				<h1 className="text-2xl font-bold">
					Welcome to Admin Panel
				</h1>
				{/* Add your main content here */}
			</div>
		</div>
	);
};

export default Sidebar;
