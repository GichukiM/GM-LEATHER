const posts = [
  {
    id: 1,
    title: 'The Ultimate Guide to Sneaker Care',
    href: '#',
    description:
      'Discover the best practices to keep your sneakers looking fresh. From cleaning techniques to storage tips, learn how to extend the life of your favorite pairs.',
    date: 'Jan 5, 2024',
    datetime: '2024-01-05',
    category: { title: 'Footwear Tips', href: '#' },
    author: {
      name: 'Jessica Lee',
      role: 'Footwear Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: '/Hero-1.jpg', // Post image URL
  },
  {
    id: 3,
    title: 'How to Style High-Tops with Any Outfit',
    href: '#',
    description:
      'High-top sneakers are versatile and trendy. Learn how to style them with various outfits, whether you’re going for a casual look or something more polished.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    category: { title: 'Fashion Advice', href: '#' },
    author: {
      name: 'Emily Carter',
      role: 'Fashion Blogger',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: '/Hero-2.jpg', // Post image URL
  },
  {
    id: 4,
    title: 'The Evolution of Basketball Shoes: From the Court to the Streets',
    href: '#',
    description:
      'Explore the history and evolution of basketball shoes, from iconic models to their impact on streetwear culture. Learn how they’ve shaped fashion beyond the court.',
    date: 'Apr 25, 2024',
    datetime: '2024-04-25',
    category: { title: 'Sneaker Culture', href: '#' },
    author: {
      name: 'David Brown',
      role: 'Sneaker Historian',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    image: '/Hero-3.jpg', // Post image URL
  }
];


export default function Example() {
  return (
    <div className="bg-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Leather Chronicles</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start border border-black p-4 justify-between">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
