import React from 'react'
// pkgs: moment
import moment from 'moment'
// pkgs: react-date-picker
import DatePicker from 'react-date-picker'
// pkgs: react-redux
import { useSelector, useDispatch } from 'react-redux'
// modules: redux-action
import { changeProfile } from '../../../../redux/actions/user'
// styles: module
import style from './SideRight.module.css'

export const SideRight = (props) => {
  const dispatch = useDispatch()
  const { profileTemp } = useSelector((state) => state.user)
  const formatted = moment(profileTemp.birth_date).startOf('day')._d
  const handleChange = (e) => {
    dispatch(
      changeProfile({
        [e.target.name]: e.target.value
      })
    )
  }
  return (
    <div className={`col-md-8 ${style.container}`}>
      <div className={`${style.title}`}>
        <h3>Contacts</h3>
      </div>
      <div className={`${style.section}`}>
        <div className={`col-md-6 ${style.col}`}>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='email'>
              Email address :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={profileTemp.email}
              name='email'
              type='email'
              id='email'
            />
          </div>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='address'>
              Delivery address :
            </label>
            <textarea
              className={`form-control ${style.input_area} ${style.input_md}`}
              onChange={handleChange}
              value={profileTemp.address === null ? '' : profileTemp.address}
              type='textarea'
              name='address'
              id='address'
            />
          </div>
        </div>
        <div className={`col-md-4 ${style}`}>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='phone'>
              Mobile number :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={profileTemp.phone}
              name='phone'
              id='phone'
              type='tel'
            />
          </div>
        </div>
      </div>
      <div className={`${style.title}`}>
        <h3>Details</h3>
      </div>
      <div className={`${style.section}`}>
        <div className={`col-md-6 ${style.col}`}>
          <div className={`${style.input_box}`}>
            <label className={`form-label ${style.input_label}`} htmlFor='name'>
              Display name :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={profileTemp.username === null ? '' : profileTemp.username}
              name='username'
              id='name'
              type='text'
            />
          </div>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='firstname'>
              First name :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={profileTemp.first_name}
              name='first_name'
              id='firstname'
              type='text'
            />
          </div>
          <div className={`${style.input_box}`}>
            <label
              className={`form-label ${style.input_label}`}
              htmlFor='lastname'>
              Last name :
            </label>
            <input
              className={`form-control ${style.input_area} ${style.input_sm}`}
              onChange={handleChange}
              value={profileTemp.last_name}
              name='last_name'
              id='lastname'
              type='text'
            />
          </div>
        </div>
        <div className={`col-md-4 ${style}`}>
          <label className={`form-label ${style.input_label}`} htmlFor='date'>
            DD/MM/YYYY :
          </label>
          <DatePicker
            className={`${style.input_area} ${style.input_sm}`}
            value={profileTemp.birth_date !== null ? formatted : new Date()}
            onChange={props.changeDate}
            yearPlaceholder='yyyy'
            monthPlaceholder='mm'
            dayPlaceholder='dd'
            showLeadingZeros={true}
            locale='en-au'
            id='date'
          />
        </div>
      </div>
      <div className={`${style.section}`}>
        <div className={`form-check ${style.check_box}`}>
          <input
            className={`form-check-input shadow-none ${style.check}`}
            onChange={handleChange}
            value={
              (profileTemp.gender === 'female' ||
                profileTemp.gender === null ||
                profileTemp.gender === '') &&
              'male'
            }
            checked={profileTemp.gender === 'male' ? true : false}
            name='gender'
            type='radio'
            id='male'
          />
          <label
            className={`form-check-label ${style.input_label}`}
            htmlFor='male'>
            Male
          </label>
        </div>
        <div className={`form-check ${style.check_box}`}>
          <input
            className={`form-check-input shadow-none ${style.check}`}
            onChange={handleChange}
            value={
              (profileTemp.gender === 'male' ||
                profileTemp.gender === null ||
                profileTemp.gender === '') &&
              'female'
            }
            checked={profileTemp.gender === 'female' ? true : false}
            name='gender'
            type='radio'
            id='female'
          />
          <label
            className={`form-check-label ${style.input_label}`}
            htmlFor='female'>
            Female
          </label>
        </div>
      </div>
    </div>
  )
}
