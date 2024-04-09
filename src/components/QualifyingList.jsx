import QualifyingListItem from './QualifyingListItem.jsx'



const QualifyingList = (props) =>{
	
	return(
		<div className='w-full flex content-start text-sm'>
			<ul className='w-full'>
				<li className="border-2 border-sky-300 flex items-center">
					<div className="flex justify-items-start grid grid-cols-5 w-8">
						<div className="border-x-2 border-sky-300 justify-items-start w-8">{"Pos."}</div>
					</div>
					<div className="flex grid grid-cols-6 w-full">
							<div className="justify-self-start justify-items-start col-span-2 ml-2">{"Driver Name"}</div>
							<div className='justify-self-start justify-items-start'>{"Constructor"}</div>
					
						<div>{"Q1."}</div>
						<div>{"Q2"}</div>
						<div>{"Q3"}</div>
					</div>
				</li>
				{ props.data.map( (d,indx) => <QualifyingListItem data={d} key={indx} modal={props.modal}/>) }
			</ul>
		</div>
	)
}

export default QualifyingList;