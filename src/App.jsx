import "./App.css";

function App() {
	return (
		<>
			<div
				className="flex items-center w-full bg-cover bg-center h-screen"
				style={{ backgroundImage: 'url("image/background.avif")' }}
			>
				<div className="ml-24 text-6xl text-white hover:text-[#014a5d]">
					Thomas Hallström
				</div>
				<div className="text-white ml-24 p-3 opacity-0 transition-opacity duration-300 hover:opacity-100">
					webdesigner
				</div>
			</div>
		</>
	);
}

export default App;
