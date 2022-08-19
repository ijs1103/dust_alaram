import { useEffect } from 'react'
import Card from '~/components/Card'
import Layout from '~/components/Layout'
import Loader from '~/components/Loader'
import { useAppDispatch, useAppSelector } from "~/store"
import { fetchDust } from '~/store/slice/dustSlice'

function EntireArea() {
	const dispatch = useAppDispatch()
	const { loading, dustDataArr, likedDust } = useAppSelector(state => state.dust)
	useEffect(() => {
		dispatch(fetchDust('전국'))
	}, [])
	return (
		<Layout title="전체 지역">
			{loading ? <Loader /> : dustDataArr?.map(cur => <Card key={cur.stationName} data={{ ...cur }} />)}
		</Layout>
	)
}

export default EntireArea