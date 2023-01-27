import React, { useState, useEffect } from 'react'
// pkgs: react-helmet
import Helmet from 'react-helmet'
// pkgs: react-router
import { useParams, useHistory, Link } from 'react-router-dom'
// pkgs: react-toastify
import { toast } from 'react-toastify'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import {
  getDetail,
  changeDetail,
  updateProduct,
  changePage
} from '../../../redux/actions/product'
import { addCart } from '../../../redux/actions/cart'
// components: page
import { NotFound } from '../../NotFound/NotFound'
// components: base
import { ModalConfirm } from '../../../components/base/ModalConfirm/ModalConfirm'
// components: side
import { SideLeft } from './SideLeft/SideLeft'
import { SideRight } from './SideRight/SideRight'
import { SideEdit } from './SideEdit/SideEdit'
// styles: module
import style from './Detail.module.css'

export const Detail = () => {
  const link = {
    textDecoration: 'none',
    color: 'inherit'
  }
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { detail, detailTemp, statusCode } = useSelector(
    (state) => state.product
  )
  const [show, setShow] = useState(false)
  const [image, setImage] = useState(detailTemp.image)
  const paramsId = parseInt(id)

  const handleShow = () => setShow(!show)
  const handleImage = (e) => {
    const fileImage = e.target.files[0]
    setImage(fileImage)
    dispatch(
      changeDetail({
        image: URL.createObjectURL(fileImage)
      })
    )
  }

  const formData = new FormData()
  formData.append('name', detailTemp.name)
  formData.append('price', detailTemp.price)
  formData.append('image', image)
  formData.append('description', detailTemp.description)
  formData.append('category_id', parseInt(detailTemp.category_id))

  const editProduct = async () => {
    await toast.promise(dispatch(updateProduct(detail.id, formData)), {
      pending: 'Updating',
      success: `${detail.name} updated successfully`,
      error: 'Update failed'
    })
    dispatch(changePage(1))
    history.push('/main/product')
  }

  const handleAddCart = (items) => {
    console.log(detail, items)
    dispatch(addCart({ ...detail, ...items }))
    toast.info(`${detail.name} added to cart`)
  }

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  if (isNaN(paramsId) || statusCode === 404) {
    return <NotFound />
  } else {
    return (
      <>
        <Helmet>
          <title>{`${detail.name} - CoffeeTeria`}</title>
          <meta name='description' content='This is Product Detail Page' />
        </Helmet>
        <div className={`${style.container}`}>
          <div className={`container ${style.content}`}>
            <nav className={`${style.crumb}`} aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className={`breadcrumb-item`}>
                  <Link
                    style={link}
                    to='/main/product'
                    className={`${style.crumb_page}`}>
                    Product
                  </Link>
                </li>
                <li
                  className={`breadcrumb-item ${style.crumb_active}`}
                  aria-current='page'>
                  {detail.name}
                </li>
                {user.role === 'admin' && (
                  <li
                    className={`breadcrumb-item ${style.crumb_active}`}
                    aria-current='page'>
                    Edit product
                  </li>
                )}
              </ol>
            </nav>
            <div className={`row ${style.section}`}>
              <SideLeft changeImage={handleImage} getImage={setImage} />
              {user.role !== 'admin' ? (
                <SideRight detail={detail} addToCart={handleAddCart} />
              ) : (
                <SideEdit confirmEdit={handleShow} />
              )}
            </div>
          </div>
        </div>
        <ModalConfirm
          show={show}
          closeModal={handleShow}
          text='update this product'
          eventClick={editProduct}
          btnBack='Cancel'
          btnConfirm='Update'
        />
      </>
    )
  }
}
