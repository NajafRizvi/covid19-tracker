import React,{useEffect,useState} from 'react';
import {Pie} from 'react-chartjs-2';
export default function Chart(){
	const [Data, setData] = useState({});
	useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://disease.sh/v3/covid-19/all")
            let data = await response.json();
			setData({
				labels: [
					'Active',
					'Cases',
					'Recoverd',
					'Death'
				],
				datasets: [{
					data: [data.active,data.cases,data.recovered,data.deaths],
					backgroundColor: [
					'#2076f7',
					'#edf720',
					'#23a819',
					'#f50010'
					],
					hoverBackgroundColor: [
					'#69a8f0',
					'#dff774',
					'#7feb9d',
					'#ff545a'
					]
				}]
			})
			
        }
        fetchData();
	},[])

	return(
      <div>
		<Pie data={Data}
		 width={300}
		 height={300}
		 options={{ maintainAspectRatio: false }} />
      </div>
    );
  
};
