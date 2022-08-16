import Layout from '~/components/Layout'
import React from 'react'
import Select from '~/components/Select'
import Card from '~/components/Card'
import { useAppSelector } from '~/store'


function MyArea() {
	const dustState = useAppSelector(state => state.dust)

	return (
		<Layout title='내 지역'>
			<Select />
			{dustState.myAreaDust && <Card {...dustState.myAreaDust} />}
		</Layout>
	)
}

export default MyArea