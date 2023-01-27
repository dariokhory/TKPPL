import React, { useEffect } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { getHistory, updatePage } from '../../../redux/actions/order'
// components: module
import { CardHistory } from '../../../components/module/CardHistory/CardHistory'
import { Pagination } from '../../../components/module/Pagination/Pagination'
// styles: module
import style from './History.module.css'

export const History = () => {
  const dispatch = useDispatch()
  const { id } = useSelector((state) => state.user.profile)
  const { history, pages, isLoading } = useSelector((state) => state.order)
  const page = pages.current_page

  const handlePage = (e) => {
    const selectedPage = e.selected + 1
    dispatch(updatePage(selectedPage))
  }

  useEffect(() => {
    console.log(id)
    dispatch(getHistory(page, id))
  }, [dispatch, page, id])

  return (
    <>
      <Helmet>
        <title>Order History - CoffeeTeria</title>
        <meta name='description' content='This is History Page' />
      </Helmet>
      <div className={`${style.container}`}>
        <div className={`container ${style.content}`}>
          <div className={`text-center text-white ${style.header}`}>
            <h2>Let's see what you have bought!</h2>
          </div>
          <div className={style.main}>
            {isLoading ? (
              <div className={`${style.loading}`}>
                <div className='spinner-border text-warning' role='status'>
                  <span className='visually-hidden'>Loading</span>
                </div>
                <div className='spinner-border text-warning' role='status'>
                  <span className='visually-hidden'>Loading</span>
                </div>
                <div className='spinner-border text-warning' role='status'>
                  <span className='visually-hidden'>Loading</span>
                </div>
              </div>
            ) : history.length <= 0 ? (
              <div className={`text-center ${style.empty}`}>
                <h1>Your order history is empty yet</h1>
              </div>
            ) : (
              <div className={`row ${style.section}`}>
                {history.map((item, index) => (
                  <div key={index} className={`col-lg-4 ${style.card_item}`}>
                    <CardHistory
                      data={item}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      image={item.image}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {pages.total_page > 1 && (
            <div className={style.page}>
              <Pagination totalPage={pages.total_page} pageEvent={handlePage} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
