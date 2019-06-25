import React from 'react'
import { Line } from 'react-chartjs-2'
import { Wrapper } from './styles/Chart'

export default ({ ideal, remaining }) => {
	const data = {
		labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
		datasets: [
			{
				label: 'Remaining',
				fill: false,
				lineTension: 0.2,
				backgroundColor: 'blue',
				borderColor: 'blue',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: remaining
			},
			{
				label: 'Ideal',
				fill: false,
				lineTension: 0.2,
				backgroundColor: 'red',
				borderColor: 'red',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: ideal
			}
		]
	}

	const options = {
		scales: {
			xAxes: [
				{
					gridLines: {
						color: 'white'
					}
				}
			],
			yAxes: [
				{
					gridLines: {
						color: 'black'
					}
				}
			]
		}
	}

	return (
		<Wrapper>
			<Line data={data} options={options} />
		</Wrapper>
	)
}


