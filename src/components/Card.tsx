import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from "~/store"
import { addLike, removeLike, IDustData } from '~/store/slice/dustSlice'
import { cls } from '~/utils'
import { gradeToKR, gradeToColor } from '~/utils/constants'
interface Props {
	data: IDustData
	isLikedCard?: boolean
}


function Card({ data, isLikedCard = false }: Props) {
	const dispatch = useAppDispatch()
	const starRef = useRef<SVGSVGElement | null>(null)
	const [isLikeCliked, setIsLikeCliked] = useState(false)
	const [removeLikeClicked, setRemoveLikeCliked] = useState(false)
	const handleLikeClick = () => {
		if (!starRef.current) return
		// 즐겨찾기 페이지에서 동작하는 로직
		if (isLikedCard) {
			dispatch(removeLike(data.stationName))
			setRemoveLikeCliked(prev => !prev)
			return
		}
		// 내 지역, 전체지역 페이지에서 동작하는 로직
		if (isLikeCliked) {
			dispatch(removeLike(data.stationName))
			starRef.current.style.fill = 'transparent'
		} else {
			dispatch(addLike(data))
			starRef.current.style.fill = 'rgb(253 224 71)'
		}
		setIsLikeCliked(prev => !prev)
	}

	return (
		<div className={cls('w-[300px] h-[250px] rounded-xl text-white transition-colors duration-500 hover:brightness-110 select-none ', data.pm10Grade ? gradeToColor[data.pm10Grade] : 'bg-gray-700')}>
			<div className='w-full p-3 relative'>
				<div className='w-full flex items-center justify-between'>
					<span className='font-bold text-sm'>{data.sidoName} {data.stationName}</span>
					<svg ref={starRef} onClick={handleLikeClick} className={cls("cursor-pointer w-10 h-10 text-yellow-300 ", data.isLiked ? "fill-yellow-300" : "")} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
				</div>
				<span className='text-center block mt-5 w-full text-4xl'>{data.pm10Grade ? gradeToKR[data.pm10Grade] : '데이터 없음'}</span>
				<span className='text-right block mt-12 w-full text-xs'>{data.dataTime}</span>
			</div>
		</div>
	)
}

export default Card