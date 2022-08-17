import React from 'react'
import Card from '~/components/Card'
import Layout from '~/components/Layout'
import Loader from '~/components/Loader'
import NotFound from '~/components/NotFound'
import { useAppSelector } from "~/store"

function Liked() {
	const { loading, dustDataArr, likedDust } = useAppSelector(state => state.dust)

	console.log(likedDust)
	return (
		<Layout title='즐겨찾기'>
			{loading ? <Loader /> : likedDust.length > 0 ? likedDust.map(cur => <Card key={cur.stationName} {...cur} />) : <NotFound type='즐겨찾기' />}
		</Layout>
	)
}

export default Liked