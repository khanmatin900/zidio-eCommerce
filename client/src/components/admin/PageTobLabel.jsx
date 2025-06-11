import React from "react";

const PageTobLabel = ({ label, name, page }) => {
	return (
		<div className="flex justify-between mb-3 md:mb-5">
			<div>
				<h1 className="text-lg font-bold text-white/70 ">
					WelCome to {page}, Mr. Jack
				</h1>
				<p className="text-gray-600 text-sm">{label}</p>
			</div>
			<button className="px-4 md:px-8 py-1 bg-[#735dff] hover:bg-[#735dff9c] text-white rounded transition-all ">
				Add Product
			</button>
		</div>
	);
};

export default PageTobLabel;
