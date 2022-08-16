import Nav from "./Nav";



interface Props {
	children: React.ReactNode;
}

function Layout({ children }: Props) {
	return (
		<div className="min-h-screen max-w-xl mx-auto bg-gray-100 pt-6">
			{children}
			<Nav />
		</div>
	);
}

export default Layout;
