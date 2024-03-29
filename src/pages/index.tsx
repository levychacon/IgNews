import styles from "./home.module.scss";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Header } from "../components/Header";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import { FaProductHunt } from "react-icons/fa";

interface HomeProps{
  product:{
    priceId:string,
    amount: number
  }

}
export default function Home({product}:HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get acess to all the publication <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img
          src="/images/avatar.svg"
          alt="Girl coding"
          className={styles.girlImage}
        />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JVhseL7j49iOMjKqHvhQj5b", {
    expand: ['product'],
  });
  const product = {
    priceId : price.id,
    amount :Intl.NumberFormat('en-US',{
      style:'currency',
      currency:'USD'
    }).format(price.unit_amount / 100)
  }; 
  return {
    props: {
      product,
    },
    revalidate: 60*60*24 //24 hours
  };
};
