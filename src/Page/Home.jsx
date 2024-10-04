import React from 'react'
import BirthdaySection from '../componets/Birthday Section/BirthdaySection'
import MessageSection from '../componets/Message Section/MessageSection'
import LastWishesSection from '../componets/Last Wishes Section/LastWishesSection'

export default function Home() {
  return (
    <div>
      <BirthdaySection/>
      <MessageSection/>
      <LastWishesSection/>
    </div>
  )
}
