import "./App.css";
// App.jsx

import styled from "styled-components";

const Background = styled.div`
	background-image: url("../image/background.avif");
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	height: 100vh;
	/* Lägg till andra önskade stilar här */
`;

const Name = styled.h1`
	color: white;
	padding: 0;
	margin: 0;
`;

function App() {
	return (
		<Background>
			<Name>Thomas</Name>
      <Name>Hallström</Name>
		</Background>
	);
}

export default App;
