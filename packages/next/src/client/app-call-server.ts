// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import { encodeReply } from 'react-server-dom-webpack/client'

export async function callServer(id: string, args: any[]) {
  const actionId = id

  // Fetching the current url with the action header.
  // TODO: Refactor this to look up from a manifest.
  const res = await fetch('', {
    method: 'POST',
    headers: { Accept: 'text/x-component', 'Next-Action': actionId },
    body: await encodeReply(args),
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  return (await res.json())[0]
}
