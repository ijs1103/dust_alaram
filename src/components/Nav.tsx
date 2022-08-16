import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cls } from '~/utils';

function Nav() {
	const location = useLocation()
	const currentPath = location.pathname
	return (
		<nav className="h-[100px] fixed left-0 bottom-0 w-full ">
			<div className='h-full max-w-xl mx-auto py-1 flex items-center justify-around bg-green-900 border-t border-gray-600 text-white'>
				<Link className={cls("transition-all px-2 py-2 rounded-full hover:text-yellow-500 flex flex-col items-center ", currentPath === "/" ? "text-yellow-400" : "")} to="/">
					<span className='text-xs'>내 지역</span>
					<svg
						className="h-8 w-8"
						stroke="currentColor"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
						/>
					</svg>

				</Link>
				<Link className={cls("transition-all px-2 py-2 rounded-full hover:text-yellow-500 flex flex-col items-center ", currentPath === "/entireArea" ? "text-yellow-400" : "")} to="/entireArea">
					<span className='text-xs'>전체 지역</span>
					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
				</Link>
				<Link className={cls("transition-all px-2 py-2 rounded-full hover:text-yellow-500 flex flex-col items-center ", currentPath === "/liked" ? "text-yellow-400" : "")} to="/liked">
					<span className='text-xs'>즐겨찾기</span>
					<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>

				</Link>
			</div>
		</nav>
	);
}

export default Nav