
const ChurchLayout = ({ 
    children
}: {
    children: React.ReactNode;
}) => { 
    return(
        <div className="">
                <main className="">
                    {children}
                </main>
        </div>
    );
};


export default ChurchLayout;