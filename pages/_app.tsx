import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";
import { MantineProvider } from "@mantine/core";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<MantineProvider>
			<NavigationBar />
			<Component {...pageProps} />
			<Footer />
		</MantineProvider>
	);
}

export default MyApp;
