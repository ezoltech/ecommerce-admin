import prismadb from "@/lib/prismadb";

interface DashBoardPropsPage {
    params: {storeId: string}
}
const DashboardPage: React.FC<DashBoardPropsPage> = async ({
    params
}) => {

    const store = prismadb.store.findFirst({
        where: {
            id: params.storeId
            
        }
    })
    return(
        <div className="">
          Active Stores: 
        </div>
    )
}

export default DashboardPage;