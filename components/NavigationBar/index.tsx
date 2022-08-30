import { Affix, createStyles } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles(() => ({
	navbar: {
		// marginLeft: "auto",
		// marginRight: "auto",
		// background: "red",
		height: "100px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "30px",
		paddingLeft: "40px",
	},
}));

const NavigationBar = () => {
	const { classes } = useStyles();
	return (
		<Affix position={{ top: 0 }} style={{ width: "100%" }}>
			<div className={classes.navbar}>
				<Link href="/">
					<a>
						<Image src="/logo/brand.png" width={110} height={90} alt="brand" />
					</a>
				</Link>
				{/* <div>button</div> */}
			</div>
		</Affix>
	);
};

export default NavigationBar;
