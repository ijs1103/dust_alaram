interface Props {
	title: string
	children: React.ReactNode;
}

function Layout({ title, children }: Props) {
	return (
		<div className="min-h-screen max-w-xl mx-auto bg-gray-100 pt-6 pb-[150px] px-10">
			<h2 className="font-bold text-4xl text-left mb-8 text-green-700">{title}</h2>
			<div className="flex flex-col items-center gap-6">
				{children}
			</div>
		</div>
	);
}

export default Layout;
