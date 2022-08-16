import React from 'react'

function NotFound({ type }: { type: string }) {
	return (
		<span className='fixed top-1/3 left-1/2 -translate-x-1/2 text-3xl text-gray-700'>{type} 설정 해주세요.</span>
	)
}

export default NotFound