import { isDataReady } from '@/data/init-data'
import { shell } from 'lithen-fns'

export function whenDataIsReady(cb: () => unknown) {
  return shell.once(() => {
    const dataIsLoaded = isDataReady.get()

    if (!dataIsLoaded) {
      return new Text('Loading...')
    }

    return cb()
  })
}
