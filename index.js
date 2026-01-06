import { AS_REFS } from './turtb/lib/turtle/codecs/CodecType.js'
import { TurtleDB } from './turtb/lib/turtle/connections/TurtleDB.js'
import { Signer } from './turtb/lib/turtle/Signer.js'
import { TurtleDictionary } from './turtb/lib/turtle/TurtleDictionary.js'
import { Workspace } from './turtb/lib/turtle/Workspace.js'
import { Recaller } from './turtb/lib/utils/Recaller.js'
import { webSocketMuxFactory } from './turtb/lib/utils/webSocketMuxFactory.js'

const defaultPublicKey = document.cookie.match(/\bcpk=([a-z0-9]{50})\b/)?.[1]
window.cpk = defaultPublicKey
window.TurtleDictionary = TurtleDictionary
window.Signer = Signer
window.Workspace = Workspace
window.AS_REFS = AS_REFS

const recaller = new Recaller('web client')
const turtleDB = new TurtleDB('public/index.js', recaller)
window.turtleDB = turtleDB

webSocketMuxFactory(turtleDB, defaultPublicKey, tbMux => {
  window.tbMux = tbMux
})
