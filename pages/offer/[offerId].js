import {useRouter} from 'next/router'

export default function DynamicOffer() {
  const {query: {offerId}} = useRouter()

  return (
    <h1>Offer Page with offerId: {offerId}!</h1>
  )
}
