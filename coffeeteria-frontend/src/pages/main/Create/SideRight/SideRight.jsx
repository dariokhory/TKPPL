import React from 'react'
// pkgs: react-router
import { useHistory } from 'react-router-dom'
// pkgs: react-redux
import { useDispatch } from 'react-redux'
// modules: redux-action
import { changePage } from '../../../../redux/actions/product'
// modules: numeral
import { numFormatter } from '../../../../utils/numeral'
// styles: module
import style from './SideRight.module.css'

export const SideRight = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { name, desc, category } = props.product
  const price = props.price
  return (
    <div className={`col-md-6 ${style.wrapper}`}>
      <div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='name' className='form-label'>
            Name :
          </label>
          <input
            className='form-control form-control-lg'
            placeholder='Type product name max. 50 characters'
            onChange={props.getChange}
            maxLength={50}
            name='name'
            type='text'
            id='name'
            required
          />
        </div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='price' className='form-label'>
            Price :
          </label>
          <input
            className='form-control form-control-lg'
            onChange={props.getPrice}
            value={
              props.price !== 0
                ? `IDR ${numFormatter(price)}`
                : ''
            }
            placeholder='Type the price'
            name='price'
            type='text'
            id='price'
            required
          />
        </div>
        <div className={`mb-3 ${style.field_edit}`}>
          <label htmlFor='description' className='form-label'>
            Description :
          </label>
          <textarea
            className='form-control'
            name='desc'
            id='description'
            rows='3'
            placeholder='Describe your product max. 150 characters'
            maxLength={150}
            required
            onChange={props.getChange}
          // value={detailTemp.description}
          ></textarea>
        </div>
        <div className={`mb-3  ${style.field_edit}`}>
          <label htmlFor='category' className='form-label'>
            Category :
          </label>
          <select
            id='category'
            className={`mb-4 form-select ${style.dropdown}`}
            aria-label='Default select'
            onChange={props.getChange}
            name='category'
            // value={detailTemp.category_id}
            defaultValue={'Choose product category'}
            required>
            <option disabled hidden>
              Choose product category
            </option>
            <option value={1}>Coffee</option>
            <option value={2}>Non Coffee</option>
            <option value={3}>Food</option>
            <option value={4}>Add-on</option>
          </select>
        </div>
      </div>
      <button
        disabled={
          name !== '' &&
            price !== 0 &&
            desc !== '' &&
            category !== '' &&
            props.image !== null
            ? false
            : true
        }
        className={`btn mb-4 ${style.btn} ${style.btn_brown}`}
        onClick={props.confirmAdd}
        type='button'>
        Save product
      </button>
      <button
        className={`btn ${style.btn} ${style.btn_grey}`}
        onClick={() => {
          dispatch(changePage(1))
          history.push('/main/product')
        }}
        type='button'>
        Cancel
      </button>
    </div>
  )
}
