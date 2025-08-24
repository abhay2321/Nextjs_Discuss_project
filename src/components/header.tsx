import React, { Suspense } from 'react'
import AuthHeader from './auth-header'
import SearchInput from './search-input'
import TopicList from './topics/topic-list'
import { fetchAllTopics } from '@/lib/query/topic'
import Link from 'next/link'


const HeaderPage = async() => {
  const topics = await fetchAllTopics();

  return (
    <div className="grid grid-cols-4 h-16 items-center border-b border-gray-200 mb-2 p-4 gap-2 bg-red-200 rounded w-full">
        <div className="flex justify-start">
          <Link href={'/'}>
            <h1 className="font-bold text-xl">Discuss</h1>
            </Link>
        </div>

        <div>
          <Suspense>
            <SearchInput/>
          </Suspense>
        </div>

        <div className="">
          <Suspense>
            <TopicList topics={topics}/>
          </Suspense>
        </div>

        <div className="flex justify-end gap-2">
            <AuthHeader/>
        </div>
      
    </div>
  )
}

export default HeaderPage
