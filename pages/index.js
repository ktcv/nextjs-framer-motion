import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'
import { staggerChildren, fadeInUp } from '../motion'

const Index = (props) => (
  <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
    <div className='container center'>
      <div className='title'>
        <h1>Select a protein</h1>
      </div>
      <motion.div variants={staggerChildren(0.2)} className='product-row'>
        {props.products.map((product) => (
          <Link
            key={product.id}
            href='/products/[id]'
            as={`/products/${product.id}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              className='card'
            >
              <span className='category'>Protein</span>
              <motion.img
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                key={product.image}
                src={product.image}
                width={250}
              />
              <div className='product-info'>
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
)

Index.getInitialProps = async function () {
  const res = await fetch(
    'https://my-json-server.typicode.com/ktcv/nextjs-framer-motion/products'
  )
  const data = await res.json()
  return {
    products: data,
  }
}

export default Index
