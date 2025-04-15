function ContributedProjectNumber({number}) {
    return ( 
        <>
            <div className="text-[#444444] flex justify-around">
                <h1>
                   Contributed
                </h1>
                <div className="font-light">
                    <span className="mr-1">{number}</span>
                    <span >
                        projects
                    </span>
                </div>
            </div>
        </>
     );
}

export default ContributedProjectNumber;