import { useEffect, useState } from 'react'
import { fetchDust, setMyArea } from '~/store/slice/dustSlice'
import { SIDO_ARR } from '~/utils/constants'
import { useAppDispatch, useAppSelector } from "~/store"

function Select() {
	const dispatch = useAppDispatch()
	const dustState = useAppSelector(state => state.dust)
	const [sido, setSido] = useState('')
	const handleSidoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		// select 된 value가 기본값일 경우 실행 방지
		if (e.currentTarget.value === '시도') return
		setSido(e.currentTarget.value)
		dispatch(fetchDust(e.currentTarget.value))
	}
	const handleGunguChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (e.currentTarget.value === '군구') return
		dispatch(setMyArea(e.currentTarget.value))
	}

	return (
		<div className='w-[300px] flex items-center gap-4 mb-10'>
			<label htmlFor="sido" className="block text-sm font-medium text-gray-900 sr-only">시도</label >
			<select onChange={handleSidoChange} id="sido" className="text-center flex-1 outline-none bg-gray-50 border text-gray-900 text-sm font-bold rounded-lg focus:ring-green-500 focus:border-green-500 block w-24 px-4 py-2 ">
				<option key={'시도'}>시도</option>
				{SIDO_ARR.map((sido, idx) => <option key={idx}>{sido}</option>)}
			</select>
			<label htmlFor="gungu" className="block text-sm font-medium text-gray-900 sr-only">군구</label >
			<select onChange={handleGunguChange} id="gungu" className="text-center flex-1 outline-none bg-gray-50 border text-gray-900 text-sm font-bold rounded-lg focus:ring-green-500 focus:border-green-500 block w-24 px-4 py-2 ">
				<option key={'군구'}>군구</option>
				{dustState.dustDataArr?.map(dust => <option key={dust.stationName}>{dust.stationName}</option>)}
			</select>
		</div>
	)
}

export default Select