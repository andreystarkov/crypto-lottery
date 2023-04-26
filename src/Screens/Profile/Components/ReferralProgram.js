import React from 'react'

import { Content } from 'Styles/CommonStyles'
import { Paragraph, TextHeader } from 'Styles/Typography'

const ReferralProgram = () => (
  <Content>
    <Paragraph>What the heck is a blockchain, anyway? And can it really do all these things? Can blockchain bring something amazing to industries as diverse as health care, finance, supply chain management and music rights?</Paragraph>
    <TextHeader>Development is stricter and slower</TextHeader>
    <Paragraph>The main thing distinguishing a blockchain from a normal database is that there are specific rules about how to put data into the database. That is, it cannot conflict with some other data that’s already in the database (consistent), it’s append-only (immutable), and the data itself is locked to an owner (ownable), it’s replicable and available. Finally, everyone agrees on what the state of the things in the database are (canonical) without a central party (decentralized).</Paragraph>
    <Paragraph>This can be really good as companies don’t like the liability of having user data in the first place. This can be bad, however, if the user is “misbehaving”. There’s no way to kick out the user that’s spamming your blockchain with frivolous data or has figured out a way to profit in some fashion that causes other users lots of inconvenience. This is related to the above observation that incentive structures have to be designed really, really well in that a user that figures out an exploit is not likely to give that up, especially if there’s profit for the user.</Paragraph>
    <Paragraph>Blockchain is a popular term these days and unfortunately, this “blockchain not Bitcoin” meme won’t die. If you are a centralized service, a blockchain doesn’t get you anything that you can’t do a thousand times cheaper with a centralized database. If you are a decentralized service, then you’re probably fooling yourself and not thinking about the single points of failure that exist in your system. There wouldn’t be a “you” at all in a truly decentralized service.</Paragraph>
  </Content>
)

export default ReferralProgram
