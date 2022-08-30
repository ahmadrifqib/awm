// import { createStyles } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import BuahHeader from "../components/Home/BuahHeader";
import FirstHeader from "../components/Home/FirstHeader";
import NicetimeHeader from "../components/Home/NicetimeHeader";
import SecondHeader from "../components/Home/SecondHeader";

// const useStyles = createStyles((theme) => ({
// 	pages: {
// 		zIndex: 0,
// 	},
// }));

const Home: NextPage = () => {
	// const { classes } = useStyles();
	return (
		<>
			<Head>
				<title>Asriyasa | Harmony Dalam Keselarasan</title>
				<meta name="description" content="Asriyasa | Harmony Dalam Keselarasan" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="Arsya" />
				<meta name="keywords" content="Arysa, Arsya, Arysa Buah, Arsya Catering, Arsya Cafe, Arsya Wisata" />

				<meta property="og:title" content="Asriyasa" />
				<meta property="og:site_name" content="Asriyasa" />
				<meta property="og:description" content="Asriyasa | Harmony Dalam Keselarasan" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://arsya.co.id/" />

				<meta property="twitter:card" content="summary" />
				<meta property="twitter:title" content="Asriyasa" />
				<meta property="twitter:description" content="Asriyasa | Harmony Dalam Keselarasan" />

				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				{/* <link href="https://fonts.googleapis.com/css2?family=Rochester&display=swap" rel="stylesheet" /> */}
			</Head>
			<FirstHeader />
			<SecondHeader />
			<NicetimeHeader />
			<BuahHeader />
		</>
	);
};

export default Home;
