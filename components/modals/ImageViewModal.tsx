import React from "react";
import styles from "./ImageViewModal.module.scss"
import { IoClose } from "react-icons/io5";

type ImageViewModalProps = {
  toggle: () => void;
  imageUrl: string;
}

export const ImageViewModal = (props: ImageViewModalProps) => {
  const {toggle, imageUrl} = props;
  return (
    <div className={styles.viewContainer}>
      <div>
        <img className={styles.viewBox} src={imageUrl} alt="Product Image"/>
        <IoClose size={30} className={styles.closeButton} onClick={toggle} role="button"/>
      </div>
    </div>
  )
}
