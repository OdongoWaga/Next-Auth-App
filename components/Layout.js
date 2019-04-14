import Link from "next/link";

const Layout = () => (
	<div className="root">
		<nav className="navbar">
			<span>
				{" "}
				Welcome, <strong> Guest</strong>
			</span>

			<div>
				<Link href="/">
					<a> Home </a>
				</Link>
				<Link href="/login">
					<a> Login </a>
				</Link>
			</div>
		</nav>
	</div>
);
