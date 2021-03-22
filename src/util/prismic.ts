import Prismic from 'prismic-javascript'
import { DefaultClient } from 'prismic-javascript/types/client'

const PrismicApi = (): DefaultClient => Prismic.client('https://dhikarizky.cdn.prismic.io/api/v2')

export default PrismicApi
