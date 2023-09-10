import prismadb from '@/lib/prismadb'
import React from 'react'
import { BillboardForm } from './components/billboard-form'

const BillboardPage = async ({
    params
}: {
    params: {storeId: string}
}) => {
    // console.log('inside billboard page');
    // console.log('param', params);

    const billboard = await prismadb.billboard.findUnique({
        where: {
            id: params.storeId
        }
        
    })

  return (
    <div className='flex-col'>
        <div className="flex-1 space-y-4 p-8 pt-6">
            <BillboardForm  initialData={billboard}/>
        </div>
    </div>
  )
}
export default BillboardPage