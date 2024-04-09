import RaceListItem from './RaceListItem.jsx'



const RaceList = (props) =>{
	
	return(
		<div className='w-full justify-items-stretch content-start grid grid-cols-1 border-2 border-blue-800'>
			<div className='w-full h-12'>
				<div className='font-bold text-lg justify-self-center'>{"Races in the " + props.season + " Season"}</div>
			</div>
			<div className='flex justify-items-stretch grid grid-cols-1'>
			<ul className='w-full'>
				<li className="border-2 border-sky-300 grid grid-cols-2">
					<div className="flex justify-items-start justify-self-start gap-4">
						<div className="border-x-2 border-sky-300 font-bold">Rnd</div>
						<div className='font-bold'>Circuit</div>
					</div>
					<div className="grid justify-self-end align-middle grid-cols-2">
					</div>
				</li>
				{ props.data.map( (r,indx) => <RaceListItem race={r} key={indx} update={props.update}/>) }
			</ul>
			</div>
		</div>
	)
}

export default RaceList;