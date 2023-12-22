
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="flex flex-col items-center justify-center md:w-6/12 text-center mx-auto">
            <p className="text-yellow-500 my-4">---{subHeading}---</p>
            <h3 className="text-3xl uppercase font-bold border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;