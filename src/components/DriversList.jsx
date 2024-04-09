import DriversListItem from './DriversListItem.jsx'



const DriversList = (props) =>{
	
	return(
		<div className='w-full flex content-start text-sm'>
			<ul className='w-full'>
				<li className="border-2 border-sky-300 grid grid-cols-2">
					<div className="flex justify-items-start">
						<div className="border-x-2 border-sky-300 justify-items-start w-8">{"Pos."}</div>
						<div>{"Driver Name"}</div>
					</div>
					<div className="w-full justify-self-end justify-items-center grid grid-cols-2">
						<div>{"Pts."}</div>
						<div>{"Wins"}</div>
					</div>
				</li>
				{ props.data.map( (d,indx) => <DriversListItem data={d} key={indx} modal={props.modal}/>) }
			</ul>
		</div>
	)
}

export default DriversList;