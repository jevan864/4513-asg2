import ResultsListItem from './ResultsListItem.jsx'
import ResultsHeader from './ResultsHeader.jsx'



const ResultsList = (props) =>{
	return(
		<div className='w-full flex content-start text-sm grid grid-cols-1'>
			<div className='w-5/6 grid grid-cols-3 items-end text-xl justify-self-center gap-2 mb-2'>
				<div className='flex flex-col'>
					Second 
					<div className='border border-slate-600 h-36 text-sm grid place-items-center'>
					image here
					</div>
				</div>
				<div className='flex flex-col'>
					First
					<div className='border border-yellow-500 h-36 text-sm grid place-items-center'>
						image here
					</div>
				</div>
				<div className='flex flex-col'>
					Third
					<div className='border border-yellow-900 h-36 text-sm grid place-items-center'>
						image here
					</div>
				</div>
			</div>
			<div className='justify-self-start w-full'>
				<ResultsHeader race={props.race} modal={props.modal}/>
			</div>
			<ul className='w-full'>
				<li className="border-2 border-sky-300 flex items-center">
					<div className="flex justify-items-start grid grid-cols-5 w-8">
						<div className="border-x-2 border-sky-300 justify-items-start w-8">{"Pos."}</div>
					</div>
					<div className="flex grid grid-cols-5 w-full">
						<div className="justify-self-start justify-items-start col-span-2 ml-2">{"Driver Name"}</div>
						<div className='justify-self-start justify-items-start'>{"Constructor"}</div>
					
						<div>{"Laps"}</div>
						<div>{"Pts."}</div>
					</div>
				</li>
				{ props.data.map( (d,indx) => <ResultsListItem data={d} key={indx} modal={props.modal}/>) }
			</ul>
		</div>
	)
}

export default ResultsList;