import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Card from "../components/card";
import TabButton from "../components/tab_button";
import styles from "../styles/Home.module.css";

// import { getFromCategory, GetValueInDollar, initializeWeb3 } from "../lib/web3Adaptor";
// import {
//   TestAccountSigningKey,
//   Provider,
//   Signer,
// } from "@reef-defi/evm-provider";
// import { WsProvider, Keyring } from "@polkadot/api";
// import { createTestPairs } from "@polkadot/keyring/testingPairs";
// import { KeyringPair } from "@polkadot/keyring/types";



export const category = [
  "NFT",
  "GameFi",
  "DeFi",
  "Governance",
  "Tools",
  "Social",
  "Web3",
  "Other",
];

export default function Home() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [nfts, setNfts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // const setup = async () => {
  
  //   // Return an array of all the injected sources
  //   // (this needs to be called first)
  //   const allInjected = await web3Enable('your dapp');
  
  //   let injected;
  //   if (allInjected[0] && allInjected[0].signer) {
  //     injected = allInjected[0].signer;
  //   }
  
  //   // Return an array of { address, meta: { name, source } }
  //   // (meta.source contains the name of the extension)
  //   const allAccounts = await web3Accounts();
  
  //   let account;
  //   if (allAccounts[0] && allAccounts[0].address) {
  //     account = allAccounts[0].address;
  //   }
  
  //   const provider = new Provider({
  //     provider: new WsProvider(WS_URL)
  //   });
  
  //   await provider.api.isReady;
  
  //   const signer = new Signer(provider, account, injected);
  
  //   // Claim default account
  //   if (!(await signer.isClaimed())) {
  //     console.log(
  //       "No claimed EVM account found -> claimed default EVM account: ",
  //       await signer.getAddress()
  //     );
  //     await signer.claimDefaultAccount();
  //   }
  //   console.log(signer, provider);
  //   return {
  //     signer,
  //     provider,
  //   };
  // }
  


  const handleFetch = async () => {
    // initializeWeb3().then(async () => {
    //   setLoading(true);
    //   await getFromCategory(category[activeTab]).then((res) => {
    //     setNfts(res);
    //     setLoading(false);
    //   });
    // });
  };

  useEffect(() => {
    handleFetch();
    // setup();
  }, [activeTab]);

  return (
    <div>
      <div
        id={"About"}
        className={styles.about}
        style={{ scrollMarginTop: "200px" }}
        onMouseOver={(e) => {
          
        }}
      >
        <div className={styles.about_text}>
          <div className={styles.about_title}>
            Showcase Super Unique Digital Ideas{" "}
          </div>
          <div className={styles.about_description}>
            Pat3nt is the world’s first patent NFT marketplace.
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.stat_title}>10 +</div>
              <div className={styles.stat_description}>Patents</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.stat_title}>7 +</div>
              <div className={styles.stat_description}>Developers</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.stat_title}>3 +</div>
              <div className={styles.stat_description}>Offers</div>
            </div>
          </div>
        </div>
        <img src="images/homepage.png" className={styles.pic} />
      </div>
      <div
        className={styles.Explore}
        id={"Explore"}
        style={{ scrollMarginTop: "200px" }}
      >
        <div className={styles.title}>NFT Marketplace</div>
        <div className={styles.subtitle}>
          Spotlight: Projects You Would Love
        </div>
        <div className={styles.tabs}>
          {category.map((tab, index) => {
            return (
              <TabButton
                name={tab}
                key={index}
                active={activeTab == index}
                onClick={() => {
                  setActiveTab(index);
                }}
              />
            );
          })}
        </div>
        <div className={styles.grid}>
          {(loading ? [] : nfts)?.map((nft, index) => {
            console.log(nft);
            return <Card key={index} nft={nft} />;
          })}
        </div>
      </div>
      <div id={"Resources"} style={{ scrollMarginTop: "200px" }}>
        <div className={styles.title}>Be An NFT Creator</div>
        <div className={styles.subtitle}>Create & Sell Your Own NFTs</div>
        <div className={styles.workflow}>
          <div className={styles.card}>
            <img src={"images/create.svg"} />
            <div className={styles["card-title"]}>Create Ideas</div>
            <div className={styles["card-subtitle"]}>
              Create your own ideas and patent them
            </div>
          </div>
          <div className={styles.card}>
            <img src={"images/upload.svg"} />
            <div className={styles["card-title"]}>Make Offers</div>
            <div className={styles["card-subtitle"]}>
              Make offer to buy an idea or patent as an NFT
            </div>
          </div>
          <div className={styles.card}>
            <img src={"images/listing.svg"} />
            <div className={styles["card-title"]}>Approve Offers</div>
            <div className={styles["card-subtitle"]}>
              Approve the offer and sell your idea as an NFT
            </div>
          </div>
        </div>
        <div className={styles.action}>
          <Link href="/create">
            <div className={styles.button}>Create Now</div>
          </Link>
          <Link href="/">
            <div className={`${styles.button} ${styles.outlined}`}>
              Watch Videos
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.card} style={{ marginBottom: "40px" }}>
        <div className={styles["card-title"]} style={{ fontSize: "33px" }}>
          Join Our Community
        </div>
        <div
          className={styles["card-subtitle"]}
          style={{ marginBottom: "50px" }}
        >
          Meet the team, artist and collectors of platform update,annoucement
          and more
        </div>
        <a href="https://discord.gg/BBKXsgJy">
          <div className={styles.button}>Take Me to Discord</div>
        </a>
      </div>
    </div>
  );
}
