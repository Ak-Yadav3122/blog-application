import EditArticlePage from '@/components/articles/edit-articles-page'
import { prisma } from '@/lib/prisma'
import React from 'react'

// define type 
type Props = {
    params:Promise<{id:string}>
}
const page:React.FC<Props> = async ({params}) => { 
    const id = (await params).id
    const article = await prisma.articles.findUnique({
        where:{
          id
        }
      });
      if(!article){
        return <h1>Article not found.</h1>
      }
  return (
    <div> 
        <EditArticlePage article={article}/>
    </div>
  )
}

export default page
