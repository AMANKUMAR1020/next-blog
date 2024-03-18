import Image from "next/image"

import React from 'react'

export default function MyProfilePic() {
  return (<section className="w-full mx-auto">
    <Image 
    className="border-3 rounded-xl border-black height dark:border-slate-500  shadow-black rounded-full mx-auto mt-8"
    src="/images/next_img.png"
    width={200}
    height={200}
    alt="Dave gary"
    priority={true}
    />

  </section>)
}
