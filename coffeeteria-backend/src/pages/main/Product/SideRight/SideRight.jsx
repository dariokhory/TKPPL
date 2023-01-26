import React, { useEffect } from 'react'
// pkgs: query-string
import qs from 'query-string'
// pkgs: react-router
import { useHistory, useLocation } from 'react-router-dom'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { getProduct, changePage } from '../../../../redux/actions/product'
// components: module
import { CardProduct } from '../../../../components/module/CardProduct/CardProduct'
import { Pagination } from '../../../../components/module/Pagination/Pagination'
import { TabsBar } from '../../../../components/module/TabsBar/TabsBar'
// styles: module
import style from './SideRight.module.css'

export const SideRight = () => {
  const { product, pages, isLoading } = useSelector((state) => state.product)
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const page = pages.current_page

  const handlePage = (e) => {
    const selectedPage = e.selected + 1
    dispatch(changePage(selectedPage))
  }

  useEffect(() => {
    const parsed = qs.parse(location.search)
    dispatch(
      getProduct(
        page,
        parsed.search !== undefined ? parsed.search : '',
        parsed.filter !== undefined ? parsed.filter : ''
      )
    )
  }, [dispatch, location, page])
  return (
    <div className={`col-md-9 p-0 ${style.wrapper}`}>
      <div className={`${style.container}`}>
        <TabsBar />
        <div className={`${style.card_box}`}>
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
          ) : product.length <= 0 ? (
            <div className={`${style.empty}`}>
              <h1>There's no item yet</h1>
            </div>
          ) : (
            <div className={`${style.card}`}>
              {product.map((item) => (
                <div className={`col-md-3`} key={item.id}>
                  <CardProduct
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    clickEvent={() => history.push(`/main/product/${item.id}`)}
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
        {user.role === 'admin' && (
          <button
            className={`btn text-white ${style.btn_create}`}
            onClick={() => history.push('/main/new-product')}>
            Add new product
          </button>
        )}
      </div>
    </div>
  )
}
