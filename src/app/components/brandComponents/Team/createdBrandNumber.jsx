function CreatedBrandNumber({ number }) {
    return (
        <>
            <div className="text-[#444444] flex justify-around">
                <h1>
                    Created
                </h1>
                <div className="font-light">
                    <span className="mr-1">{number}</span>
                    <span >
                        brands
                    </span>
                </div>
            </div>
        </>
    );
}

export default CreatedBrandNumber;