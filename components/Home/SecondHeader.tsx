import { createStyles, Container, Text, Overlay } from "@mantine/core";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: "relative",
		// boxSizing: "border-box",
		backgroundImage: "url(/image/coffee.jpg)",
		backgroundSize: "cover",
		backgroundPosition: "center",

		// backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
	},

	inner: {
		position: "relative",
		paddingTop: 200,
		paddingBottom: 120,

		[BREAKPOINT]: {
			paddingBottom: 80,
			paddingTop: 80,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: 62,
		fontWeight: 900,
		lineHeight: 1.1,
		margin: 0,
		padding: 0,
		// color: theme.colorScheme === "dark" ? theme.white : theme.black,
		color: theme.white,

		[BREAKPOINT]: {
			fontSize: 42,
			lineHeight: 1.2,
		},
	},

	description: {
		marginTop: theme.spacing.xl,
		marginBottom: theme.spacing.xl,
		fontSize: 20,
		// color: theme.colorScheme === "dark" ? theme.white : theme.black,
		color: theme.white,

		[BREAKPOINT]: {
			fontSize: 18,
		},
	},

	// controls: {
	// 	marginTop: theme.spacing.xl * 2,

	// 	[BREAKPOINT]: {
	// 		marginTop: theme.spacing.xl,
	// 	},
	// },

	// control: {
	// 	height: 54,
	// 	paddingLeft: 38,
	// 	paddingRight: 38,

	// 	[BREAKPOINT]: {
	// 		height: 54,
	// 		paddingLeft: 18,
	// 		paddingRight: 18,
	// 		flex: 1,
	// 	},
	// },
}));

const SecondHeader = () => {
	const { classes } = useStyles();

	return (
		<div className={classes.wrapper}>
			<Overlay
				gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
				opacity={1}
				zIndex={0}
			/>
			<Container size={700} className={classes.inner}>
				<h1 className={classes.title} data-aos="fade-down">
					Sekilas Perusahaan
				</h1>

				<div data-aos="fade-down">
					<Text className={classes.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Text>
					<Text className={classes.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</div>
			</Container>
		</div>
	);
};

export default SecondHeader;
