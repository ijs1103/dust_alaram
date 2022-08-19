import Layout from '~/components/Layout'
import React from 'react'
import Select from '~/components/Select'
import Card from '~/components/Card'
import { useAppSelector } from '~/store'
import NotFound from '~/components/NotFound'

function MyArea() {
	const dustState = useAppSelector(state => state.dust)

	return (
		<Layout title='내 지역'>
			<Select />
			{dustState.myAreaDust ? <Card data={{ ...dustState.myAreaDust }} /> : <NotFound type='내 지역' />}
		</Layout>
	)
}

export default MyArea