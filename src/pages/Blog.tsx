import React from 'react'

const Blog = () => {
  return (
    <div className='m-10'>
      <div className='article-container mx-40'>
        <a href="boohoo">
          <div className='article-card bg-slate-600 rounded-2xl p-4 my-4'>
            <div className='flex'>
              <div>Image</div>
              <div>
                <h2 className='font-semibold'>Title</h2>
                <p className='text-gray-300'>Article Description</p>
                <p className='text-gray-300'>Date | Date Section/Category/Topic</p>
              </div>

            </div>
            
            
            
          </div>
        </a>
      </div>

    </div>
  )
}

export default Blog


// TODO: Make a scrollable list/card thingy for all my articles
// All articles would be in markdown format, and then the blog page would just parse it