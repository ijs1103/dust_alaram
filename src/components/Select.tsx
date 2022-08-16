import { useEffect, useState } from 'react'
import { fetchData } from '~/api'
import { fetchDust } from '~/store/slice/dustSlice'
import { SIDO_ARR } from '~/utils/constants'
import { useAppDispatch, useAppSelector } from "~/store"

function Select() {
	const dispatch = useAppDispatch()
	const dustState = useAppSelector(state => state.dust)
	const [sido, setSido] = useState('서울')
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSido(e.target.value)
	}

	useEffect(() => {
		dispatch(fetchDust(sido))
		console.log(dustState)
	}, [sido])
	return (
		<div className='flex justify-center items-center gap-4'>
			<label htmlFor="sido" className="block text-sm font-medium text-gray-900 dark:text-gray-400 sr-only">시도</label >
			<select onChange={handleChange} id="sido" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 ">
				<option value="DEFAULT" disabled>시도</option>
				{SIDO_ARR.map((sido, idx) => <option key={idx}>{sido}</option>)}
			</select>
			<label htmlFor="gungu" className="block text-sm font-medium text-gray-900 dark:text-gray-400 sr-only">군구</label >
			<select id="gungu" className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 ">
				<option value="DEFAULT" disabled>군구</option>
				{dustState.dustDataArr.map(dust => <option key={dust.stationName}>{dust.stationName}</option>)}
			</select>
		</div>
	)
}

export default Select