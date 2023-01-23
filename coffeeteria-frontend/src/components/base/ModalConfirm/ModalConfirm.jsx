import React from 'react'
// pkgs: react-bootstrap
import { Modal } from 'react-bootstrap'
// styles: module
import style from './ModalConfirm.module.css'

export const ModalConfirm = (props) => {
  return (
    <Modal
      show={props.show} onHide={props.closeModal}
      dialogClassName={style['border-radius']}
      className={`${style.modal}`}
      centered>
      <div className={`${style.modal_box}`}>
        <Modal.Body className={`${style.modal_body}`}>
          Are you sure want to {props.text} ?
        </Modal.Body>
        <div className={`${style.modal_footer}`}>
          <button
            className={`btn ${style.btn} ${style.btn_white}`}
            type='button'
            onClick={props.closeModal}>
            {props.btnBack}
          </button>
          <button
            className={`btn ${style.btn} ${style.btn_brown}`}
            type='button'
            onClick={props.eventClick}>
            {props.btnConfirm}
          </button>
        </div>
      </div>
    </Modal>
  )
}
