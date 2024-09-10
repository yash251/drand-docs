"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[3618],{4064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(4848),a=t(8453);const r={slug:"multi-frequency-support-&-timelock-encryption-are-coming-to-drand",title:"Multi-Frequency Support & Timelock Encryption are coming to drand!",authors:[],tags:["features"]},s=void 0,i={permalink:"/blog/multi-frequency-support-&-timelock-encryption-are-coming-to-drand",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2022-02-20-multi-frequency-support-timelock-encryption.mdx",source:"@site/blog/2022-02-20-multi-frequency-support-timelock-encryption.mdx",title:"Multi-Frequency Support & Timelock Encryption are coming to drand!",description:"The drand team has been hard at work the last couple of months to develop and integrate new and extremely valuable features into the drand codebase! We have worked together with Zondax, a research and software development company, and we are extremely excited to announce the completion of a very important project for the future of drand. The project focused on two important features that have the potential to unlock new capabilities for the drand randomness service, enable new application scenarios and make drand able to support many more applications and platforms.",date:"2022-02-20T00:00:00.000Z",tags:[{inline:!1,label:"Features",permalink:"/blog/tags/features",description:"begginer tag"}],readingTime:5.825,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"multi-frequency-support-&-timelock-encryption-are-coming-to-drand",title:"Multi-Frequency Support & Timelock Encryption are coming to drand!",authors:[],tags:["features"]},unlisted:!1,prevItem:{title:"StorSwift joins the League of Entropy!",permalink:"/blog/storswift-joins-the-league-of-entropy"},nextItem:{title:"The Value of drand (Part 2 of 2)",permalink:"/blog/the-value-of-drand-part-2-of-2"}},d={authorsImageUrls:[]},c=[{value:"\u26d3\ufe0f <strong>Unchained Randomness &amp; Timed Encryption</strong> \ud83d\udd10",id:"\ufe0f-unchained-randomness--timed-encryption-",level:2},{value:"<strong>What is this?</strong>",id:"what-is-this",level:3},{value:"<strong>What does it enable?</strong>",id:"what-does-it-enable",level:3},{value:"<strong>How does it work?</strong>",id:"how-does-it-work",level:3},{value:"<strong>Multi-Frequency &amp; Multi-Protocol Support</strong>",id:"multi-frequency--multi-protocol-support",level:2},{value:"<strong>What is this?</strong>",id:"what-is-this-1",level:3},{value:"<strong>What does it enable?</strong>",id:"what-does-it-enable-1",level:3},{value:"<strong>How does it work?</strong>",id:"how-does-it-work-1",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["The drand team has been hard at work the last couple of months to develop and integrate new and extremely valuable features into the drand codebase! We have worked together with ",(0,o.jsx)(n.a,{href:"https://zondax.ch/",children:(0,o.jsx)(n.strong,{children:"Zondax"})}),", a research and software development company, and we are extremely excited to announce the completion of a very important project for the future of drand. The project focused on two important features that have the potential to unlock new capabilities for the drand randomness service, enable new application scenarios and make drand able to support many more applications and platforms."]}),"\n",(0,o.jsx)(n.p,{children:"In summary, the new features include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Unchained Randomness"}),": Each randomness beacon in drand has so far been linked to the previous one, forming a chain of beacons. With this update, each beacon is now independent of (all) the previous one(s)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Multi-protocol Support"}),": Drand is now able to support multiple protocols running on the same physical node and the same binary. In other words, a node can now participate in multiple drand networks, each of which having different characteristics. These characteristics can be different frequency of emitting randomness, different thresholds, different participants or having randomness in chained or unchained mode."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["We have compiled a comprehensive list of 26 Q&A in this ",(0,o.jsx)(n.a,{href:"https://docs.google.com/document/d/16QJG3Z-Kr0mN6snQz8cm0NnMXpYBpelKyvCf2oo1Zgc/edit?usp=sharing",children:(0,o.jsx)(n.strong,{children:"FAQ document"})}),". Below we provide a base summary of the new features and we encourage you to refer to the document for further details."]})}),"\n",(0,o.jsxs)(n.h2,{id:"\ufe0f-unchained-randomness--timed-encryption-",children:["\u26d3\ufe0f ",(0,o.jsx)(n.strong,{children:"Unchained Randomness & Timed Encryption"})," \ud83d\udd10"]}),"\n",(0,o.jsx)(n.h3,{id:"what-is-this",children:(0,o.jsx)(n.strong,{children:"What is this?"})}),"\n",(0,o.jsx)(n.p,{children:"According to the original drand design and implementation, every new beacon is linked to the previous one, i.e., simplistically, every new beacon includes a link to the previous beacon, used to derive the new randomness. This creates a chain of randomness beacons from the current one to the genesis beacon, when the drand network was launched. With this upgrade, we provide the option of each beacon becoming independent of the previous one, or, in other words, randomness can be \u201cunchained\u201d. A new drand network can still run in \u201cchained\u201d mode, although we recommend using the \u201cunchained\u201d randomness version."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"https://drand.love/assets/img/chained.e448fb8e.jpg",src:t(2717).A+"",width:"1600",height:"571"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"https://drand.love/assets/img/unchained.726b44f8.jpg",src:t(9243).A+"",width:"1600",height:"586"})}),"\n",(0,o.jsx)(n.h3,{id:"what-does-it-enable",children:(0,o.jsx)(n.strong,{children:"What does it enable?"})}),"\n",(0,o.jsx)(n.p,{children:"Although chained randomness provides some nice properties, having each beacon independent of the previous one presents a lot of potential for some applications: drand consumers can now enable timelock encryption in their applications, which means that they can securely encrypt a message for a specific round in the future, which can then be decrypted by anyone with the corresponding randomness. This is a very important feature which can mitigate front-running attacks in Decentralized Exchanges, and oracle platforms, as well as enabling sealed bid auctions."}),"\n",(0,o.jsx)(n.h3,{id:"how-does-it-work",children:(0,o.jsx)(n.strong,{children:"How does it work?"})}),"\n",(0,o.jsx)(n.p,{children:"Both randomness generation and consumption procedures remain the same as previously. All members of a drand network, e.g., the LoE, need to contribute their part in order for Threshold Cryptography to work. As with the Multi-Frequency support feature, no security property of the protocol is compromised."}),"\n",(0,o.jsx)(n.p,{children:"We will deliver this API in the coming months but we provide a sneak peek at how it can look like:"}),"\n",(0,o.jsx)(n.p,{children:"First, a client encrypts a message towards a round in the future."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"ciphertext := client.EncryptToRound(msg, round)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then, once the associated randomness is created,\xa0",(0,o.jsx)(n.em,{children:"anybody"}),"\xa0can decrypt the message:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"// get the randomness associated with the round\n\nrandom := client.Randomness(round)\n\nmessage := client.Decrypt(ciphertext,random)\n"})}),"\n",(0,o.jsx)(n.p,{children:"With this feature, drand has the potential to solve problems that remain unsolved in the Web3.0 space, such as front-running attacks, and puts drand ahead of the competition!"}),"\n",(0,o.jsx)(n.h2,{id:"multi-frequency--multi-protocol-support",children:(0,o.jsx)(n.strong,{children:"Multi-Frequency & Multi-Protocol Support"})}),"\n",(0,o.jsx)(n.h3,{id:"what-is-this-1",children:(0,o.jsx)(n.strong,{children:"What is this?"})}),"\n",(0,o.jsx)(n.p,{children:"Drand is producing randomness every 30 seconds, by default, and this is how it has been programmed to operate ever since the network\u2019s launch in August 2020 and up to the present day. However, several applications operate at higher frequencies (and quite likely some others at lower frequencies). We have heard the requests from our ecosystem of users and have worked hard to refactor the codebase and make drand capable of using different randomness schemes and/or frequencies."}),"\n",(0,o.jsx)(n.h3,{id:"what-does-it-enable-1",children:(0,o.jsx)(n.strong,{children:"What does it enable?"})}),"\n",(0,o.jsx)(n.p,{children:"Multi-protocol support enables a single set of participants to generate multiple randomness beacons of different kinds and at different frequencies. For example, you could think of the LoE-operated network generating randomness at 3s as well as generating post quantum randomness every minute."}),"\n",(0,o.jsx)(n.p,{children:"The full details of how the refactored protocol works will be made available in our documentation (once the features land in production), but, roughly, it works as follows."}),"\n",(0,o.jsxs)(n.p,{children:["In the next mainnet upgrade, LoE partners will start running a new protocol to generate\xa0",(0,o.jsx)(n.em,{children:"unchained"}),"\xa0randomness at a higher frequency. The current protocol (chained randomness every 30s) will stay in place for the short term. The new base frequency is still to be determined, but let\u2019s assume it is set to 3 seconds. Applications will now be able to consume randomness at any interval that is a multiple of the base frequency. So, for instance, Filecoin, which needs to consume randomness every 30 seconds, will be picking a beacon every 10th randomness generation event (once it starts following the new network). The case would be similar for an application that needs to consume randomness every, say, 6 seconds: the application would pick every other beacon generated by drand."]}),"\n",(0,o.jsx)(n.p,{children:"It is worth noting that all of the properties already natively integrated in drand, that is, verifiability, unpredictability and non-biasability, are kept intact with no compromise being made on the security properties of drand."}),"\n",(0,o.jsx)(n.h3,{id:"how-does-it-work-1",children:(0,o.jsx)(n.strong,{children:"How does it work?"})}),"\n",(0,o.jsx)(n.p,{children:"With the updated setup different frequencies (realized as routines) are generated and live within the same process as separate protocols, although each protocol is completely isolated from each other. Applications that wish to consume randomness at some particular frequency can form a separate network. Nodes that join each network participate in randomness generation and propagation between them and make use of the corresponding protocol."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://drand.love/assets/img/multi-frequency-diagram.cad03494.jpg",alt:"https://drand.love/assets/img/multi-frequency-diagram.cad03494.jpg"})}),"\n",(0,o.jsx)(n.p,{children:"More generally, each new frequency runs as a separate protocol. The new protocol can also choose between chained and unchained randomness. So, for instance, if we assume that the main drand network (the one operated by the LoE) runs at some specific frequency in unchained randomness mode, one can set up a new network with a different frequency and chained randomness."}),"\n",(0,o.jsx)(n.p,{children:"It has to be highlighted that not all members of a drand network, e.g., the League of Entropy (LoE), have to participate in all frequency networks, but instead, networks can form with a subset of nodes."}),"\n",(0,o.jsx)(n.p,{children:"This is another hugely valuable addition to drand\u2019s features that make the service suitable for a large variety of applications and will expand drand\u2019s customer base."}),"\n",(0,o.jsxs)(n.p,{children:["The updates have not been integrated into a release yet, but they\u2019re both expected to land in the coming quarter. We hope that you\u2019re as excited about these features as we are and we will be more than happy to discuss the needs of your particular application in order to take advantage of them. Feel free to reach out to us at:\xa0",(0,o.jsx)(n.a,{href:"mailto:leagueofentropy@googlegroups.com",children:(0,o.jsx)(n.strong,{children:"leagueofentropy@googlegroups.com"})}),", or through ",(0,o.jsx)(n.a,{href:"https://drand.love",children:"drand\u2019s website"}),". You can always follow developments in the public ",(0,o.jsx)(n.a,{href:"https://github.com/drand/drand/",children:"GitHub repository"}),"."]}),"\n",(0,o.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2717:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/chained.e448fb8e-ec61fa11fc4ee78c75f0dbf458351b5a.jpg"},9243:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/unchained.726b44f8-9cdbe606996dae9667c6100e2d8d3232.jpg"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(6540);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);